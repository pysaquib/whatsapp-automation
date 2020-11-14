## This works in 3 steps:
- Have credentials for autorization (Have a google account and obtain credentials set in sample.env from oauth playground. *Note : If you need help in this, write to : saquib@navgurukul.org*
- Add contacts to your phone using Google's People API
- Send messages to the newly added contacts
---
#### *Additional step: Delete the contacts if you don't want them to keep*
---

### Steps :
- *Clone the repository* : **`git clone https://github.com/pysaquib/whatsapp-automation/`**
- *Install dependencies* : **`cd whatsapp-automation && npm install`**
- *Create environment variable* : **`touch .env`** and set credentials obtained for the account to be used from [oauth playground ](https://developers.google.com/oauthplayground/)
- *Edit people.csv* : **Edit the csv file** (*Note : Do not change the format of the csv file. The first row should contain **Name** and **Number** in first two respective columns*)
- *Add contacts* : **`node addContacts.js`** -> This will add the contacts from csv file to your google account* (*Note : Your google account should be logged into your phone in which you use whatsapp*)
- *Edit message.txt* : **Edit this file and write your personalised message** 
- *Send message* : **`node sendMessage.js`** -> This will read file from ***people.csv*** and send messages to the numbers. (*Note : If you want to send media files, then follow the next steps*)
- *Add images* : **Copy images in to /images directory**
- *Send message with media* : **`node sendMessage.js --image`**
