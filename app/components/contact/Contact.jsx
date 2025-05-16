'use client';

import { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      isError: false,
      message: '',
    });

    // Simulate form submission
    setTimeout(() => {
      // Success simulation
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        message: 'Your message has been sent successfully. I will get back to you soon!',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading>Contact Me</SectionHeading>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
              <p className="text-foreground mb-6">
                Have a project in mind or want to discuss potential opportunities? Feel free to reach out.
                I'm open to freelance work, full-time positions, or just connecting with fellow developers.
              </p>

              <div className="space-y-4">
                <ContactInfo 
                  icon={<EmailIcon />} 
                  title="Email" 
                  content="john@example.com" 
                  href="mailto:john@example.com"
                />
                <ContactInfo 
                  icon={<PhoneIcon />} 
                  title="Phone" 
                  content="+1 (123) 456-7890" 
                  href="tel:+11234567890"
                />
                <ContactInfo 
                  icon={<LocationIcon />} 
                  title="Location" 
                  content="San Francisco, CA" 
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-foreground mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-foreground mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-foreground mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-foreground mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
                    required
                  ></textarea>
                </div>

                <Button 
                  type="submit" 
                  primary 
                  disabled={formStatus.isSubmitting}
                  className="w-full"
                >
                  {formStatus.isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                {formStatus.isSubmitted && (
                  <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md">
                    {formStatus.message}
                  </div>
                )}

                {formStatus.isError && (
                  <div className="mt-4 p-3 bg-red-100 text-red-800 rounded-md">
                    {formStatus.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, title, content, href }) => {
  const contentElement = href ? (
    <a 
      href={href} 
      className="text-foreground hover:text-primary transition-colors"
    >
      {content}
    </a>
  ) : (
    <span className="text-foreground">{content}</span>
  );

  return (
    <div className="flex items-start">
      <div className="text-primary mt-1 mr-3">
        {icon}
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        {contentElement}
      </div>
    </div>
  );
};

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export default Contact; 