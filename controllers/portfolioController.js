const nodemailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');

//transporter
const transporter = nodemailer.createTransport(sendGridTransport({
    auth: {
        api_key: process.env.API_SENDGRID_KEY,  //API key
        },  
}));

const sendEmailController = (req, res)=>{
    try{
        const {name, email, msg} = req.body;
        //validation
        if(!name || !email || !msg){
            return res.status(500).send({
                success: false,
                message: 'Please fill in all fields'});
            }
        //send email matter
        transporter.sendMail({
            to: 'palorelakhan5@gmail.com',
            from: 'palorelakhan5@gmail.com',
            subject: 'Portfolio Contact Form ',
            html: `
                <h5> Detail Information</h5>
                <ul>
                    <li><p>Name: ${name}</p></li>
                    <li><p>Email: ${email}</p></li>
                    <li><p>Message: ${msg}</p></li>
                </ul>
            `,

        });
        return res.status(200).send({
            success: true,
            message: 'Email sent successfully',
        });
    }catch(error){
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Internal server error',
            error,
     });
    }
};

module.exports = {sendEmailController};

