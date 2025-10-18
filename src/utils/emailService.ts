// Simple email service that actually works
export const sendEmail = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    // Use Formspree API
    const response = await fetch('https://formspree.io/f/mldpaaak', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: `Portfolio Contact: ${formData.subject}`,
        message: `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`,
        _replyto: formData.email,
        _subject: `Portfolio Contact: ${formData.subject}`,
      }),
    });

    const result = await response.json();
    
    console.log('Formspree response:', result);
    
    if (result.ok) {
      return { success: true, message: 'Email sent successfully!' };
    } else {
      console.error('Formspree error:', result);
      throw new Error('Email sending failed');
    }
  } catch (error) {
    console.error('Email service error:', error);
    return { success: false, message: 'Email service unavailable' };
  }
};
