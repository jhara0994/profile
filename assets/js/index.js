// possible functionality

// make clickable images rotate with images of all projects that are stored in those fields.

//on project pages, make quick scroll through or walk through of the project and make it move upon the page opening instead of having a static image.
// Web APIs Activity 19

// insert functionality to make links change color once selected. 
// add localStorage to the js file so that when you return to the page or reload the links still appear as if they have been clicked on 

// create a contact page similar to Web-APIs activity 13

// implement button to toggle light and dark mode - Third Party Apis activity 3

// implement a form for potential collaborators - Third Party Activity 5 - use either this or the idea from line 11.

// implement moment.js to show current date and time on webpage

// pull the languages used from github and list under the repository link per project.

// JS for resetting the document
var resetBtn = document.getElementById('reset-btn')
var reset = document.getElementsByClassName('collab-form')
resetBtn.addEventListener('click', reset.reset())

// nodemailer to send formatted email from the collab file. 
const nodemailer = require('nodemailer');
  
  
let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jharalson29@gmail.com',
        pass: '*************'
    }
});
  
let mailDetails = {
    from: 'haralson3@gmail.com',
    to: 'jharalson29@gmail.com',
    subject: 'Test mail',
    text: 'Node.js testing mail for GeeksforGeeks'
};
  
mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log('Error Occurs');
    } else {
        console.log('Email sent successfully');
    }
});