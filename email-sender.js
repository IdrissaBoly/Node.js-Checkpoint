// email-sender.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mamadousalifou01@gmail.com',
        pass: 'votre_mot_de_passe'
    }
});

const mailOptions = {
    from: 'mamadousalifou01@gmail.com',
    to: 'mamadousalifou@electroniger.com',
    subject: 'Test d\'envoi d\'e-mail',
    text: 'Ceci est un test d\'envoi d\'e-mail avec Nodemailer.'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email envoyé : ' + info.response);
    }
});
