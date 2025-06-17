// pages/services.js
import Head from 'next/head'
import Image from 'next/image'

export default function Services() {
  const services = [
    {
      title: "Drug De-addiction Program",
      description: "Comprehensive treatment for substance abuse including alcohol, opioids, and other addictive substances.",
      features: [
        "Medically supervised detoxification",
        "Individual counseling sessions",
        "Group therapy",
        "Relapse prevention planning",
        "Aftercare support"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Residential Rehabilitation",
      description: "Structured inpatient program for those needing intensive treatment and support.",
      features: [
        "24/7 professional supervision",
        "Therapeutic community living",
        "Life skills training",
        "Recreational therapy",
        "Family counseling"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "Outpatient Treatment",
      description: "Flexible treatment options for those transitioning back to daily life or needing less intensive care.",
      features: [
        "Customized treatment plans",
        "Evening sessions available",
        "Continuing care groups",
        "Progress monitoring",
        "Community resource connections"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Mental Health Treatment",
      description: "Specialized care for co-occurring mental health conditions alongside addiction.",
      features: [
        "Dual diagnosis treatment",
        "Cognitive Behavioral Therapy",
        "Anxiety and depression management",
        "Trauma-informed care",
        "Medication management (if needed)"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    },
    {
      title: "Family Support Program",
      description: "Helping families understand addiction and rebuild healthy relationships.",
      features: [
        "Family education sessions",
        "Communication skills training",
        "Boundary setting guidance",
        "Support groups for family members",
        "Healing from codependency"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "Aftercare & Alumni Program",
      description: "Ongoing support to maintain sobriety after completing treatment.",
      features: [
        "Weekly support meetings",
        "Alumni events",
        "Mentorship opportunities",
        "Recovery check-ins",
        "Community service projects"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  return (
    <>
      <Head>
        <title>Our Services | New Wings Foundation</title>
        <meta name="description" content="Comprehensive drug de-addiction and rehabilitation services offered by New Wings Foundation" />
      </Head>

      {/* Hero Section */}
      <section className="bg-indigo-700 text-white py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">Comprehensive, compassionate care tailored to each individual's recovery needs</p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Treatment Programs</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              At New Wings Foundation, we offer a range of evidence-based treatment programs designed to address substance abuse and co-occurring mental health conditions. Our approach combines medical expertise with therapeutic support for holistic healing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="text-indigo-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
                <Image 
                  src="/hero4.webp" 
                  alt="Our Treatment Approach" 
                  layout="fill" 
                  objectFit="cover" 
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Treatment Approach</h2>
              <p className="text-gray-600 mb-4">
                At New Wings Foundation, we believe in treating the whole person, not just the addiction. Our multidisciplinary team works together to create personalized treatment plans that address physical, emotional, and spiritual needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-2 rounded-full mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Evidence-Based Therapies</h4>
                    <p className="text-gray-600">We utilize proven methods like CBT, DBT, and motivational interviewing to support recovery.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-2 rounded-full mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Individualized Care</h4>
                    <p className="text-gray-600">Each treatment plan is customized based on comprehensive assessments and ongoing evaluations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-2 rounded-full mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Continuum of Care</h4>
                    <p className="text-gray-600">From detox to aftercare, we provide support at every stage of the recovery journey.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What to Expect</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-indigo-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Initial Assessment</h3>
              <p className="text-gray-600">Comprehensive evaluation to determine the appropriate level of care and create your personalized treatment plan.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-indigo-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Structured Schedule</h3>
              <p className="text-gray-600">Daily therapy sessions, group activities, and personal time designed to support your recovery process.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-indigo-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Safe Environment</h3>
              <p className="text-gray-600">Our facility provides a secure, supportive space free from triggers where you can focus on healing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-indigo-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Begin Your Recovery Journey Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Our admissions team is available 24/7 to answer your questions and help you get started.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/contact" className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300">Contact Admissions</a>
            <a href="tel:9332757771" className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-indigo-700 transition duration-300">Call Now: 9332757771</a>
          </div>
        </div>
      </section>
    </>
  )
}