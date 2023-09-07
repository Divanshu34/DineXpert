const express = require('express');
const nodemailer = require('nodemailer');
const appForSendMail = express.Router();

appForSendMail.post("/", (request, response) => {

    const mailTransporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465, 
        secure: true,
        auth: {
            user: 'foodestaan4@gmail.com',
            pass: 'rytedjlsyxvubrxm'
        }
    })

    let details = {
        from: "Food-e-Staan",
        to: request.body.email,
        subject: 'Table Booking Confirmation',
        html: `
            <h1>Table Booking Confirmation</h1>
            <p>Dear Guest,</p>
            <p>Your table booking has been confirmed with the following details:</p>
            <ul>
                <li>Date: ${request.body.reservationDate}</li>
                <li>Start Time: ${request.body.startTime}</li>
                <li>End Time: ${request.body.endTime}</li>
                <li>Number of Guests: ${request.body.tableType}</li>
            </ul>
            <p>We look forward to welcoming you!</p>
            <p>Best regards,</p>
            <p>Food-E-Staan & Team</p>
        `
    };

    mailTransporter.sendMail(details, (err) => {
        if (err) {
            console.log(err); // Log the error for debugging
            response.status(500).send("Error sending mail"); // Send an error response
        } else {
            response.send("Mail Sent Successfully");
        }
    });
});

module.exports = appForSendMail;
