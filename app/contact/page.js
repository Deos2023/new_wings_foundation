// pages/contact.js

"use client"
import Head from 'next/head'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Format the message for WhatsApp
    const whatsappMessage = `New Contact Inquiry:%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Message:* ${formData.message}`
    
    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/919332757771?text=${whatsappMessage}`, '_blank')
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    })
  }

  return (
    <>
      <Head>
        <title>Contact Us | New Wings Foundation</title>
        <meta name="description" content="Get in touch with New Wings Foundation for drug de-addiction and rehabilitation services" />
      </Head>

      {/* Hero Section */}
      <section className="bg-indigo-700 text-white py-20">
        <div className="container mx-auto px-6 text-center py-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact New Wings Foundation</h1>
          <p className="text-xl max-w-2xl mx-auto">Reach out to us for help, questions, or to begin the admission process</p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="rounded-lg overflow-hidden shadow-xl">
            
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.862923057769!2d88.4813961!3d22.733335799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8a3be42abd93f%3A0x340ed80939e85041!2sNEW%20WINGS%20FOUNDATION!5e0!3m2!1sen!2sin!4v1750157620973!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="New Wings Foundation Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 text-neutral-700 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row">
            {/* Contact Info */}
            <div className="md:w-1/3 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Phone Numbers</h3>
                    <p className="text-gray-600 mt-1">
                      <a href="tel:9332757771" className="hover:text-indigo-600">+91 93327 57771</a>
                      <br />
                      <a href="tel:9831545651" className="hover:text-indigo-600">+91 98315 45651</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Email Address</h3>
                    <p className="text-gray-600 mt-1">
                      <a href="mailto:newwingsfoundation28@gmail.com" className="hover:text-indigo-600">newwingsfoundation28@gmail.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Our Location</h3>
                    <p className="text-gray-600 mt-1 lowercase first-letter:uppercase">
                      SONARGAON APARTMENT ( NEAR MEDPLUS ) , KHUDIRAM BASU ROAD , NOAPARA , BARASAT , North 24 Parganas,700125
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Working Hours</h3>
                    <p className="text-gray-600 mt-1">
                      Monday - Sunday: 24/7<br />
                      Admissions available anytime
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:w-2/3">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll contact you shortly. For immediate assistance, 
                  please call us directly or message us on WhatsApp.
                </p>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="5" 
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
                      required
                    ></textarea>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-between">
                    <button 
                      type="submit" 
                      className="bg-indigo-600 text-white px-8 py-3 rounded-md font-medium hover:bg-indigo-700 transition duration-300 mb-4 sm:mb-0 w-full sm:w-auto"
                    >
                      Send via WhatsApp
                    </button>
                    
                    <div className="text-center sm:text-left">
                      <p className="text-gray-600">Or call us directly at:</p>
                      <a href="tel:9332757771" className="text-indigo-600 font-medium hover:text-indigo-800">
                        +91 93327 57771
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-12 bg-red-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Immediate Help?</h2>
            <p className="text-xl mb-6">
              If you or a loved one is in crisis, don't hesitate to reach out. We're available 24/7 to provide assistance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="tel:9332757771" 
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300 text-center"
              >
                Call Now: 93327 57771
              </a>
              <a 
                href="https://wa.me/919332757771" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-red-600 transition duration-300 text-center"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}