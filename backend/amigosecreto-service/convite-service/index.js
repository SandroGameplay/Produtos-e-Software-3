// Requerindo nodemailer
const nodemailer = require('nodemailer');

// Configurando transport e smtp para envio do HOTMAIL
const transport = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
        // Email deve ser HOTMAIL
        user: "meuemail@hotmail.com",
        pass: "minhasenha"
    }
})

transport.sendMail({
    from: 'meuemail@hotmail.com',
    to: 'emaildestinatario@email.com',
    subject: 'convite de amigo secreto',
    text: 'você está sendo convidado para o nosso amigo secreto'
})