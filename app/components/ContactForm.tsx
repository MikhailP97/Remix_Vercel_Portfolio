import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useInView } from 'react-intersection-observer';

function Toast({ message, show, error }: { message: string, show: boolean, error: boolean }) {
  return (
    <div
      className={`fixed top-4 right-4 p-3 ${error ? 'bg-red-800' : 'bg-green-800'} text-[#FEFAF6] text-sm rounded-lg shadow-lg transition-opacity duration-500 ${show ? "opacity-100" : "opacity-0"}`}
    >
      {message.split('\n').map((line, index) => (
        <span key={index}>
          {line}
          <br />
        </span>
      ))}
    </div>
  );
}

export default function ContactForm() {

  const { ref: formRef, inView: formInView } = useInView({
    threshold: 0.1
  });

  const form = useRef<HTMLFormElement | null>(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({ email: '', message: '' });
  const [toastMsg, setToastMsg] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastError, setToastError] = useState(false);

  const validateForm = () => {
    let valid = true;
    let emailError = '';
    let messageError = '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      emailError = 'Email is required';
      valid = false;
    } else if (!emailRegex.test(email)) {
      emailError = 'Please enter a valid email address';
      valid = false;
    }

    if (!message) {
      messageError = 'Message is required';
      valid = false;
    }

    setErrors({ email: emailError, message: messageError });

    return valid;
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      if (form.current) {
        emailjs
          .sendForm('service_9x86jyh', 'template_p7r0u96', form.current, 'user_kkiVCtLUFgzs0KA68U62O')
          .then(
            () => {
              setToastMsg('Your message was sent 👍🏻')
              setShowToast(true);
              setTimeout(() => {
                setShowToast(false);
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
              }, 3000);
            },
            (error) => {
              setToastMsg(`Can't send your message.. 😞 \nTry to contact me by mail`)
              setShowToast(true);
              setToastError(true)
              setTimeout(() => {
                setShowToast(false);
                setToastError(false);
              }, 4000);
            }
          );
      }
    }
  };

  return (
    <div className={`container mx-auto pt-6 pb-6 md:pb-12 lg:pb-16 mt-16`} id='contact' ref={formRef}>
      <h2 className="section-title">Contact</h2>
      <form className="mt-6 sm:mt-10 lg:mt-16"
        ref={form} onSubmit={sendEmail}
      >
        <div className={`flex flex-col items-center gap-4 ${formInView ? 'animate-fadeBottom' : ''}`} ref={formRef}>
          <input className="contact-input h-8" placeholder='Name' type='text' name="name" value={name} onChange={(e) => setName(e.target.value)} />
          <input className={`rounded-md bg-stone-100 text-xs text-[#222831] border-2 ${errors.email ? 'border-red-800' : 'border-[#222831]'} focus:outline-none focus:ring-1 dark:focus:ring-2 focus:ring-[#222831] dark:focus:ring-[#f1d2b5] w-64 sm:w-80 md:w-96 xl:w-1/3 2xl:w-1/4 p-2 h-8`} placeholder='Email*' value={email} onChange={(e) => setEmail(e.target.value)} name="email" />
          {errors.email && <p className="text-red-800 text-xs">{errors.email}</p>}
          <input className="contact-input h-8" placeholder='Subject' type='text' name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
          <textarea className={`rounded-md bg-stone-100 text-xs text-[#222831] border-2 ${errors.message ? 'border-red-800' : 'border-[#222831]'} focus:outline-none focus:ring-1 dark:focus:ring-2 focus:ring-[#222831] dark:focus:ring-[#f1d2b5] w-64 sm:w-80 md:w-96 xl:w-1/3 2xl:w-1/4 p-2 h-48`} placeholder='Message*' value={message} onChange={(e) => setMessage(e.target.value)} name="message" />
          {errors.message && <p className="text-red-800 text-xs">{errors.message}</p>}
        </div>
        <div className="flex justify-center">
          <button type="submit" className="py-1 px-6 sm:px-8 shadow-md hover:shadow-none focus:shadow-none shadow-[#222831] dark:shadow-[#FEFAF6] mt-4 sm:mt-6 rounded-md text-sm text-[#222831] dark:text-[#FEFAF6] font-medium border-2 border-[#222831] dark:border-[#FEFAF6] focus:outline-none hover:outline-none hover:font-semibold focus:font-semibold">Send</button>
        </div>
      </form >
      <div className="flex flex-row justify-center mt-6">
        <span
          className="inline-flex items-center justify-center gap-1 rounded-full border border-[#222831] dark:border-[#FEFAF6] px-3 py-1 text-[#222831] dark:text-[#FEFAF6]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-3 fill-[#222831] dark:fill-[#FEFAF6]"><path d="M12.042 23.648c-7.813 0-12.042-4.876-12.042-11.171 0-6.727 4.762-12.125 13.276-12.125 6.214 0 10.724 4.038 10.724 9.601 0 8.712-10.33 11.012-9.812 6.042-.71 1.108-1.854 2.354-4.053 2.354-2.516 0-4.08-1.842-4.08-4.807 0-4.444 2.921-8.199 6.379-8.199 1.659 0 2.8.876 3.277 2.221l.464-1.632h2.338c-.244.832-2.321 8.527-2.321 8.527-.648 2.666 1.35 2.713 3.122 1.297 3.329-2.58 3.501-9.327-.998-12.141-4.821-2.891-15.795-1.102-15.795 8.693 0 5.611 3.95 9.381 9.829 9.381 3.436 0 5.542-.93 7.295-1.948l1.177 1.698c-1.711.966-4.461 2.209-8.78 2.209zm-2.344-14.305c-.715 1.34-1.177 3.076-1.177 4.424 0 3.61 3.522 3.633 5.252.239.712-1.394 1.171-3.171 1.171-4.529 0-2.917-3.495-3.434-5.246-.134z" /></svg>
          <p className="whitespace-nowrap text-xs">mykhaylopelykh@gmail.com</p>
        </span>
      </div>
      <Toast message={toastMsg} show={showToast} error={toastError} />
    </div >
  );
}

