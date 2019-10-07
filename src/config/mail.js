import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import path from 'path';
import dotenv from 'dotenv';
import {ADMIN_MAIL} from '../constants';
// import sgMail from '@sendgrid/mail';
// import {SENDGRID_CREDENTIALS} from './sendgrid';
dotenv.config()

export const transporter = nodemailer.createTransport(
    {
        host:'smtp.ionos.mx',
        pool:true,
        port:465,
        secure:true,
        debug:true,
        auth: {
          user: 'connection@blackshiip.community',
          pass: process.env.MAIL_PASS
        },
        tls: {
        // do not fail on invalid certs
        // rejectUnauthorized: false
        }
    },
    {
      from:'"Blackshiip" connection@blackshiip.community',
      to:ADMIN_MAIL
    }
);

// sgMail.setApiKey(SENDGRID_CREDENTIALS.api_key);
// const msg = {
//   to: 'luiscasillas@n12.mx',
//   from: 'test@example.com',
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// sgMail.send(msg);

transporter.verify(function(error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take our messages');
    }
});

const abso = path.join(path.dirname(module.parent.filename), '../template');

console.log('abso',abso)
transporter.use('compile', hbs({
    viewEngine:{
      partialsDir: abso,
      defaultLayout:false
    },
    viewPath: abso,
    extName: '.html'

}));
