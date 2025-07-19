// pages/index.js
"use client"
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Link } from 'lucide-react'

const heroSlides = [
  {
    title: "Recovery Starts Here",
    description: "Professional drug de-addiction and rehabilitation services in Noapara, Barasat. We help individuals regain control of their lives.",
    image: "/img/1 (66).jpeg",
    ctaPrimary: "Get Help Now",
    ctaSecondary: "Our Services"
  },
  {
    title: "A New Beginning",
    description: "Compassionate care for those struggling with addiction and mental health challenges.",
    image: "/img/1 (70).jpeg",
    ctaPrimary: "Call Now",
    ctaSecondary: "Learn More"
  },
  {
    title: "Holistic Treatment",
    description: "Addressing not just addiction but the underlying issues for long-term recovery.",
    image: "/img/1 (65).jpeg",
    ctaPrimary: "Start Today",
    ctaSecondary: "Our Approach"
  }
]

const testimonials = [
  {
    name: "Rahul S.",
    role: "Former Patient",
    quote: "New Wings Foundation gave me my life back. After years of struggling with addiction, their professional approach and caring staff made all the difference in my recovery journey.",
    image: "/testimonial1.jpg"
  },
  {
    name: "Priya M.",
    role: "Family Member",
    quote: "The support my brother received here was exceptional. They treated him with dignity and provided our family with guidance throughout the entire process.",
    image: "/testimonial2.jpg"
  },
  {
    name: "Amit K.",
    role: "Former Patient",
    quote: "The personalized treatment plan and aftercare support have been crucial in maintaining my sobriety. Forever grateful to the New Wings team for their dedication.",
    image: "/testimonial3.jpg"
  }
]

const stats = [
  { value: "95%", label: "Satisfaction Rate" },
  { value: "500+", label: "Lives Transformed" },
  { value: "10+", label: "Years of Experience" },
  { value: "24/7", label: "Support Available" }
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    
    return () => {
      clearInterval(heroInterval)
      clearInterval(testimonialInterval)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>New Wings Foundation - Drug De-addiction & Rehabilitation Center</title>
        <meta name="description" content="Professional drug de-addiction and minor mental treatment services in Noapara, Barasat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section with Auto Slide */}
             <section className="relative bg-indigo-700 text-white h-screen max-h-[800px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/50 z-0" />

            <div className="relative container mx-auto px-4 sm:px-6 h-full flex flex-col justify-center items-center md:flex-row md:items-center">
              {/* Text Section */}
              <div className="w-full md:w-1/2 mb-6 md:mb-0 z-10 text-center md:text-left px-2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">{slide.title}</h1>
                <p className="text-xl sm:text-2xl mb-6">{slide.description}</p>
                <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
                  <Link
                    href="#contact"
                    className="bg-white text-indigo-700 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition duration-300 text-center text-lg"
                  >
                    {slide.ctaPrimary}
                  </Link>
                  <Link
                    href="#services"
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-indigo-700 transition duration-300 text-center text-lg"
                  >
                    {slide.ctaSecondary}
                  </Link>
                </div>
              </div>

              {/* Larger Image Section */}
              <div className="w-full md:w-1/2 flex justify-center z-10 px-2">
                <div className="relative w-full max-w-md lg:max-w-xl h-80 sm:h-96 md:h-[500px]">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>


      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-indigo-700 mb-2">{stat.value}</div>
                <div className="text-lg text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Comprehensive Services</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              We offer a full continuum of care to support individuals at every stage of their recovery journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-indigo-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Drug De-addiction</h3>
              <p className="text-gray-600 mb-4">Medically supervised programs to overcome substance dependence safely and effectively.</p>
              <a href="/services" className="text-indigo-600 font-medium hover:text-indigo-800 transition duration-300 inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-indigo-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Residential Rehabilitation</h3>
              <p className="text-gray-600 mb-4">Structured inpatient programs providing 24/7 care in a supportive environment.</p>
              <a href="/services" className="text-indigo-600 font-medium hover:text-indigo-800 transition duration-300 inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-indigo-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Mental Health Support</h3>
              <p className="text-gray-600 mb-4">Integrated treatment for co-occurring mental health conditions and addiction.</p>
              <a href="/services" className="text-indigo-600 font-medium hover:text-indigo-800 transition duration-300 inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Preview */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
                <Image 
                  src="/img/1 (46).jpeg" 
                  alt="About New Wings Foundation" 
                  layout="fill" 
                  objectFit="cover" 
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose New Wings Foundation?</h2>
              <p className="text-gray-600 mb-4">
                At New Wings Foundation, we combine evidence-based treatment with compassionate care to create personalized recovery plans for each individual.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Licensed and experienced professional staff</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Proven treatment methodologies</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Comfortable, home-like facility</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Strong aftercare and alumni network</span>
                </li>
              </ul>
              <a href="/about" className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition duration-300 inline-flex items-center">
                Learn More About Us
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Success Stories</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Hear from those who have transformed their lives through our programs.
            </p>
          </div>
          
          <div className="relative h-96 bg-cover bg-center  bg-no-repeat bg-fixed"
          style={{
        backgroundImage: "url('/hero3.webp')", // Adjust path based on your `public` folder
      }}>
        
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 flex flex-col items-center ${index === currentTestimonial ? 'opacity-100' : 'opacity-0'}`}
              >

                <div className="bg-white p-8 mt-16 rounded-lg shadow-md max-w-2xl mx-auto text-center">
                  <p className="text-gray-600 italic text-lg mb-6">{testimonial.quote}</p>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-indigo-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Testimonial Indicators */}
            <div className="absolute bottom-0 py-5 left-0 right-0 flex justify-center space-x-2 ">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${index === currentTestimonial ? 'bg-indigo-600' : 'bg-gray-300'}`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
{/* Awareness Banners Section */}
<section className="py-16 bg-gray-100">
  <div className="container mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">International Anti-Drug & Liquor Awareness Days</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        We proudly support global movements promoting a healthier, addiction-free world.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[
        { src: "/img/1 (36).jpeg", alt: "World No Drug Day" },
        { src: "/img/1 (39).jpeg", alt: "International Anti Liquor Day - 26 June" },
        { src: "/img/1 (42).jpeg", alt: "International Day Against Drug Abuse" },
        { src: "/img/1 (1).jpeg", alt: "Stop Drug" },
        { src: "/img/1 (38).jpeg", alt: "Stop Drugs " },
        { src: "/img/1 (37).jpeg", alt: "Health Camps" },
      ].map((item, index) => (
        <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Image container */}
          <div className="relative w-full h-80 flex justify-center items-center bg-white">
            <Image 
              src={item.src} 
              alt={item.alt} 
              layout="fill" 
              objectFit="contain" 
              objectPosition="center"
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>
          {/* Caption */}
          <div className="py-3 px-4 text-center">
            <p className="text-sm font-medium text-gray-700">{item.alt}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Our Approach Section */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Treatment Approach</h2>
      <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Diagnosis Image */}
      <div className="relative w-full h-64 sm:h-96 lg:h-full">
        <Image
          src="/treat.png"
          alt="Diagnosis Process Diagram"
          layout="fill"
          objectFit="contain"
          className="rounded-xl"
        />
      </div>

      {/* Treatment Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {[
          {
            icon: (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            ),
            title: "Assessment",
            desc: "Comprehensive evaluation to create a personalized treatment plan."
          },
          {
            icon: (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            ),
            title: "Detoxification",
            desc: "Medically supervised detox to ensure safety and comfort."
          },
          {
            icon: (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            ),
            title: "Therapy",
            desc: "Individual and group sessions to address root causes."
          },
          {
            icon: (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            ),
            title: "Aftercare",
            desc: "Continued support for long-term recovery success."
          },
        ].map((step, index) => (
          <div key={index} className="text-center p-6">
            <div className="bg-indigo-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4">
              <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {step.icon}
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
            <p className="text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-16 bg-indigo-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Recovery Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Take the first step towards a healthier, happier life. Contact us today to learn more about our programs.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="tel:9332757771" className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300">Call Now: 9332757771</a>
            <a href="mailto:newwingsfoundation28@gmail.com" className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-indigo-700 transition duration-300">Email Us</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              We&apos;re here to help. Reach out to us with any questions or to begin the admissions process.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-6">Our team is available to answer your questions and guide you through the process of getting help.</p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-indigo-600 mr-4 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Phone</h4>
                    <p className="text-gray-600">9332757771 / 9831545651</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-indigo-600 mr-4 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Email</h4>
                    <p className="text-gray-600">newwingsfoundation28@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-indigo-600 mr-4 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Address</h4>
<p className="text-gray-600 mt-1 lowercase first-letter:uppercase">
                      SONARGAON APARTMENT ( NEAR MEDPLUS ) , KHUDIRAM BASU ROAD , NOAPARA , BARASAT , North 24 Parganas,700125
                    </p> 
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <form className="bg-gray-50 text-neutral-700 p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                  <textarea id="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required></textarea>
                </div>
                <button type="submit" className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition duration-300 w-full">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}