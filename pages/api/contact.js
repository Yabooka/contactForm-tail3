import nodemailer from 'nodemailer'
export default async (req, res) => {
  // const { name, email, phone, message } = req.body
  const { name, email, phone, device, message } = req.body

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  })

  try {
    const emailRes = await transporter.sendMail({
      from: `Yabooka`,
      to: 'yabooka.rs@gmail.com',
      subject: `Nova poruka od ${name}`,
      html: `
      <p><strong>Ime: </strong> ${name} </p>
      <p><strong>Email: </strong> ${email} </p>
      <p><strong>Telefon: </strong> ${phone} </p>
      <p><strong>Uredjaj: </strong> ${device} </p>
      <p><strong>Poruka: </strong> ${message} </p>

      `,
    })

    console.log('Message Sent')
  } catch (err) {
    console.log(err)
  }

  res.status(200).json(req.body)
}
