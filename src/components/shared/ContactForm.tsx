import React from 'react';
import { useForm } from 'react-hook-form';
import Button from './Button';
import { send } from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

const SERVICE_ID = 'service_ze5kh1s';      // <-- Your Service ID
const TEMPLATE_ID = 'template_8p1ew5o';    // <-- Your Template ID
const USER_ID = 'vj0ermKxiZ3tTz_Q6';       // <-- Your Public Key

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    try {
      await send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone || '',
          subject: data.subject || '',
          message: data.message,
        },
        USER_ID
      );
      alert('Thank you for your message! We will get back to you soon.');
      reset();
    } catch (error) {
      alert('There was an error sending your message. Please try again later.');
      console.error('EmailJS error:', error);
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-secondary mb-1">
          Full Name <span className="text-error">*</span>
        </label>
        <input
          id="name"
          type="text"
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.name ? 'border-error' : 'border-gray-300'
          }`}
          placeholder="John Doe"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-error">{errors.name.message}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1">
          Email Address <span className="text-error">*</span>
        </label>
        <input
          id="email"
          type="email"
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.email ? 'border-error' : 'border-gray-300'
          }`}
          placeholder="john@example.com"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-error">{errors.email.message}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-1">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="+91 98765 43210"
          {...register('phone')}
        />
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-secondary mb-1">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Inquiry about your services"
          {...register('subject')}
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-secondary mb-1">
          Message <span className="text-error">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.message ? 'border-error' : 'border-gray-300'
          }`}
          placeholder="Your message here..."
          {...register('message', { required: 'Message is required' })}
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-error">{errors.message.message}</p>
        )}
      </div>
      
      <Button
        type="submit"
        variant="primary"
        className="w-full md:w-auto"
        onClick={handleSubmit(onSubmit)}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;