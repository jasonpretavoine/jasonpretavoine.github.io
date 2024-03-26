import cors from 'cors';
import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

const app = express();
const port = 3001; // Utilisez le port de votre choix

// Middleware pour parser le corps des requêtes POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Configuration de Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // Par exemple, pour Gmail. Changez selon votre fournisseur
  auth: {
    user: 'pretavoine.jason@gmail.com', // Votre adresse email
    pass: 'kvjbltqlbgjerscz', // Votre mot de passe ou mot de passe d'application
  },
});

// Route pour gérer l'envoi d'email
app.post('/submit', async (req, res) => {
  const { email, lastname, phone, subject, message, captchaCode } = req.body; // Inclure captchaCode dans la déstructuration

  if (!captchaCode) {
    return res.status(400).json({ message: 'Captcha code is missing' });
  }

  const secretKey = '6LcPoKQpAAAAADo57Qat54kqcjJ07XVlkcXOLNae'; // Utilisez votre clé secrète CAPTCHA
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaCode}`;

  try {
    // Envoyer une requête à l'API de vérification de Google
    const response = await axios.post(verifyUrl);
    const { success } = response.data;

    if (success) {
      // La vérification CAPTCHA a réussi, procéder à l'envoi de l'email
      const mailOptions = {
        from: 'pretavoine.jason@gmail.com', // L'adresse d'envoi
        to: 'pretavoine.jason@gmail.com', // Destinataire
        subject: `Message de ${lastname}: ${subject}`, // Sujet
        text: `Message: ${message}, Adresse mail: ${email}, Numéro de téléphone: ${phone}`, // Corps du message
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          res.status(500).json({ message: 'Error sending email' });
        } else {
          console.log(`Email sent: ${info.response}`);
          res.json({ message: 'Email sent successfully' });
        }
      });
    } else {
      // La vérification CAPTCHA a échoué
      res.status(400).json({ message: 'Invalid CAPTCHA. Please try again.' });
    }
  } catch (error) {
    console.error('CAPTCHA verification failed', error);
    res.status(500).json({ message: 'Error verifying CAPTCHA' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
