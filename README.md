## This works in 2 steps: 
- Add contacts to your phone using Google's People API
- Send messages to the newly added contacts
---
*Additional step: Delete the contacts if you don't want them to keep*

---

### Steps :
- **Clone the repository** : *git clone https://github.com/pysaquib/whatsapp-automation/*
- **Install dependencies** : *cd whatsapp-automation && npm install*
- **Edit people.csv** : *Edit the csv file* (**Note : Do not change the format of the csv file. The first row should contain *Name* and *Number* in first two respective columns**)
- **Add contacts** : *node addContacts.js : This will add the contacts from csv file to your google account* (**Note : Your google account should be logged into your phone in which you use whatsapp**)
