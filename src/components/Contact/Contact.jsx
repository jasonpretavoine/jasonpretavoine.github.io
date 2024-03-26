import React, { useState } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button, Box } from '@mui/material';

import './Contact.scss';

function ContactForm() {
  const schema = yup
    .object({
      email: yup.string().email('Email invalide').required('Email requis'),
      lastname: yup.string().required('Nom requis'),
      subject: yup.string().required('Sujet requis'),
      message: yup.string().required('Message requis'),
      phone: yup
        .string()
        .matches(/^[0-9]+$/, 'Le téléphone doit être un nombre')
        .required('Téléphone requis'),
    })
    .required();

  const onReCAPTCHAChange = (captchaCode) => {
    // Vous pouvez utiliser captchaCode pour la vérification côté serveur
    console.log(captchaCode);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3001/submit', data);
      console.log(response.data); // Réponse du serveur
      alert('Email envoyé avec succès!');
      reset(); // Réinitialiser le formulaire après l'envoi réussi
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email:", error);
      alert("Erreur lors de l'envoi de l'email.");
    }
  };

  return (
    <div>
      <div className="title-contact">
        <h1>Me Contacter</h1>
      </div>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          '& .MuiTextField-root': { m: 1, width: '60ch' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Votre nom"
          variant="outlined"
          type="text"
          {...register('lastname')}
          error={!!errors.lastname}
          helperText={errors.lastname?.message}
          required
        />
        <TextField
          label="Votre email"
          variant="outlined"
          type="email"
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email?.message}
          required
        />
        <TextField
          label="Votre téléphone"
          variant="outlined"
          type="text"
          {...register('phone')}
          error={!!errors.phone}
          helperText={errors.phone?.message}
          required
        />
        <TextField
          label="Sujet"
          variant="outlined"
          type="text"
          {...register('subject')}
          error={!!errors.subject}
          helperText={errors.subject?.message}
          required
        />
        <TextField
          label="Votre message"
          variant="outlined"
          multiline
          rows={4}
          {...register('message')}
          error={!!errors.message}
          helperText={errors.message?.message}
          required
        />
        <ReCAPTCHA
          sitekey="6LcPoKQpAAAAADo57Qat54kqcjJ07XVlkcXOLNae"
          onChange={onReCAPTCHAChange}
        />
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Envoyer
        </Button>
      </Box>
    </div>
  );
}

export default ContactForm;
