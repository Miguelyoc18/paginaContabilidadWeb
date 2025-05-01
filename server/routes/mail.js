const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/", async (req, res) => {
  console.log("USUARIO:", process.env.EMAIL_USER);
  console.log("CLAVE:", process.env.EMAIL_PASS ? "CARGADA" : "VACÍA");

  const { nombre, conocimiento, email, telefono, servicioInternet, mensaje } =
    req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Nuevo mensaje de contacto de ${nombre}`,
    text: `
      Nombre: ${nombre}
      ¿Cómo conoció el sitio?: ${conocimiento}
      Correo electrónico: ${email}
      Teléfono: ${telefono}
      Servicio de interés: ${servicioInternet}
      Mensaje:
      ${mensaje}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Correo enviado correctamente" });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    res.status(500).json({ message: "Error al enviar el correo", error });
  }
});

module.exports = router;
