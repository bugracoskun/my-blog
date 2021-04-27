const nodemailer = require("nodemailer");

export default (req, res) => {
    const { name, email, subject, text } = req.body;
    console.log(email);
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
        user: process.env.USER,
        pass: process.env.PASS,
        },
    });

    const mailOption = {
        from: `${email}`,
        to: process.env.USER,
        subject: `${subject}`,
        text: `
        E-mail: ${email}

        İsim: ${name}

        Mesaj:
        ${text}
        `,
    };

    transporter.sendMail(mailOption, (err, data) => {
        if (err) {
        console.log(err);
        res.send({status:false,message:"error"});
        } else {
        console.log("mail send");
        }
    });

    console.log(name, email, text);
    res.send({status:true,message:"success"});
}
  