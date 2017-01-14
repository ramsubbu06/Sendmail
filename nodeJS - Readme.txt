1.http://localhost/happemysql.php - Make sure that the sql server is up.
2.start the xampp tool - both these are needed, to make the DB run.

2a.start the mysql server
2b.start the apache server

then run these and they will run.

3.Goto your project folder and run these commands
node . 

this node . this command runs the .js file that is in the package.json.
eventhough the server.js file is being called, in the index.html the app.js script is added hence it is also called from the path - C:\Users\ramya\Desktop\sendmail\client

the package.json does not contain the  .js file so by default the index.js file is being called. this is the package.json below.

{
  "name": "sendmail",
  "version": "1.0.0",
  "dependencies": {
    "body-parser": "^1.14.2",
    "express": "^4.13.4",
    "multer": "^1.2.1",
    "nodemailer": "^2.1.0",
    "nodemailer-sendgrid-transport": "^0.2.0"
  },
  "devDependencies": {
    "body-parser": "^1.15.2"
  }
}

http://stackoverflow.com/questions/37153499/what-does-the-command-node-do/37153607 - from here- index.js is the default if the package.json does not specify any files.

so understand that the app.js is executed afterwards from the home directory itself because you have added to add the app.js into the html file


4. then open the webpage - http://localhost:8080/index.html
sendmail project -

5. The files are uploaded into the local folder sendmail\uploads\fullsize

Sendgrid Instructions
---------------------
# Send email using NodeJS

## Instructions
+ Create an account at sendgrid.com and generate the api key
+ Replace the API_KEY at index.js
+ Install NodeJS (nodejs.org)
+ Open Command Prompt / Terminal and browse to the project folder
+ Run the following command
<pre>
node .
</pre>
