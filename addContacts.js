require("dotenv").config();
const { google } = require("googleapis");

const { OAuth2 } = google.auth;

console.log(process.env.SECRET_KEY);
const oAuth2Client = new OAuth2(process.env.CLIENT_ID, process.env.SECRET_KEY);

oAuth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN,
});

const people = google.people({ version: "v1", auth: oAuth2Client });

async function addContacts() {
  const { data: newContact } = await people.people.createContact({
    requestBody: {
      emailAddresses: [{ value: "nitesh@navgurukul.org" }],
      phoneNumbers: [{ value: "+918962158723" }],
      names: [
        {
          displayName: "Nitesh Sharma",
          familyName: "Sharma",
          givenName: "Nitesh",
        },
      ],
    },
  });
  console.log("\n\nCreated Contact:", newContact);
}

addContacts();
