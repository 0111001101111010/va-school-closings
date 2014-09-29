hrva_closing
----
Alert you of changed status to school closing/opening

install
---
```
git clone URLtoREPO
npm install
bower install
npm start
```

Features
---
- Subscribe/Unsubscribe
- Phone numbers

Node Express
- Node/Express
- Twilio
- Bootstrap?
- Data
    - List of all HRVA Schools
    - Someone to update this data.
    - Admin dashboard or maybe manual JSON file

Experience
- Subscribe to schools you care for a changed status.
- Stay updated later on, Texts would read like.
   - SCHOOL has TWO HOUR DELAY | CLOSING Today | check with your school for details
- STATUS DASHBOARD

Model
---
- School
   - Status
   - Name
   - Addresses
   - Phone number ARRAY

Routes

/ GET
 - Dashboard

/ POST
 - Submit a status change
 - CHANGE STATUS
 - EDIT A FILE

ALERT
/ SEND EVERYONE SOMETHING SCHOOL


Data feed here found. **CANT TRUST** data feeds inconsistent with each other.
MUST VISUALY CHECK..
---
http://cache.ltvcms.com/wtkr/closings/weather_closings_for_web.html
http://wx.wavy.com/weather/WAVY_closings_delays.html

Approach 
---
- don't scrape data
- general data 
- Classify schools by divisions 
- allow email/smssubscription 


Ideas down the line 
---
- Petition schools to close
- show stories 
- contact schools

LICENSE
---
AGPL
