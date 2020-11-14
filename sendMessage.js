const fs = require("fs");
const path = require("path");
const parse = require("csv-parse/lib/sync");
const { readFile, readImageDir } = require("./utils");

const wa = require("@open-wa/wa-automate");

wa.create().then((client) => start(client));

async function start(client) {
  const options = process.argv[2];

  const message = await readFile(path.join(__dirname, "/message.txt"));

  const csvPath = path.join(__dirname, "/people.csv");
  let allContacts;
  var csvData = await readFile(csvPath);
  allContacts = parse(csvData, {
    columns: false,
    trim: true,
    skip_empty_lines: true,
  });
  for (let i = 1; i < allContacts.length; i++) {
    const number = `91${allContacts[i][1]}@c.us`;
    client.sendText(number, message);

    // If image mode is ON
    if (options === "--image") {
      const imagesPath = readImageDir();
      imagesPath.forEach((image) => {
        const imagePath = path.join(__dirname, "/images/", image);
        const fileName = image;
        const caption = image;
        client.sendImage(number, imagePath, fileName, caption);
      });
    }
  }
}
