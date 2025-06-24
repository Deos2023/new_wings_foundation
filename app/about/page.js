// pages/about.js
import Head from 'next/head'
import Image from 'next/image'

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us - New Wings Foundation</title>
        <meta name="description" content="Learn about our mission, vision, and team at New Wings Foundation" />
      </Head>

      {/* Hero Section */}
      <section className="bg-indigo-700 text-white py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About New Wings Foundation</h1>
          <p className="text-xl max-w-2xl mx-auto">Our commitment to helping individuals overcome addiction and mental health challenges</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
                <Image 
                  src="/img/1 (27).jpeg" 
                  alt="Our Story" 
                  layout="fill" 
                  objectFit="cover" 
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in [Year], New Wings Foundation began with a simple mission: to provide compassionate, professional care for individuals struggling with addiction and mental health challenges in Noapara, Barasat and surrounding communities.
              </p>
              <p className="text-gray-600 mb-6">
                What started as a small facility has grown into a comprehensive rehabilitation center, helping hundreds of individuals regain control of their lives and find lasting recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission & Vision</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-indigo-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To provide evidence-based, compassionate care that addresses both addiction and mental health challenges, helping individuals achieve lasting recovery and improved quality of life.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-indigo-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To create a community where addiction is understood as a treatable condition, and where everyone has access to high-quality rehabilitation services regardless of their background or circumstances.
              </p>
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
        { src: "/img/1 (44).jpeg", alt: "Stop Drugs Banner 1" },
        { src: "/img/1 (38).jpeg", alt: "Stop Drugs Banner 2" },
        { src: "/img/1 (37).jpeg", alt: "Stop Drugs Banner 2" },
      ].map((item, index) => (
        <div key={index} className="relative w-full h-80 justify-center items-center rounded-xl overflow-hidden shadow-md">
          <Image 
            src={item.src} 
            alt={item.alt} 
            layout="fill" 
            objectFit="cover" 
            className="hover:scale-105 transition-transform duration-500"
          />
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Image & Video Section */}
     <section className="py-16 bg-white">
  <div className="container mx-auto px-6">
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">A Glimpse of Our Space</h2>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Explore the facilities and serene environment where transformation happens.
      </p>

      <div className="flex flex-col md:flex-row gap-6 items-center">
        {/* Single Image - Tall image preserved */}
        <div className="relative w-full md:w-1/2 h-[400px] -bottom-7 bg-white rounded-lg overflow-hidden">
          <Image 
            src="/img/1 (3).jpeg" 
            alt="Our Facility" 
            layout="fill" 
            objectFit="contain" 
            objectPosition="bottom"
          />
        </div>

        {/* Video */}
        <div className="w-full md:w-1/2 h-[450px] rounded-lg overflow-hidden">
          <video 
            className="w-full h-full rounded-lg" 
            controls 
            preload="metadata"
          >
            <source src="/vid1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

    </div>
  </div>
    </section>




      {/* Our Team */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Team</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Meet our dedicated team of professionals committed to your recovery journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Amit Sharma", role: "Medical Director", bio: "Specialized in addiction medicine with over 15 years of experience." },
              { name: "Priya Patel", role: "Lead Counselor", bio: "Licensed therapist focusing on cognitive behavioral therapy." },
              { name: "Rahul Gupta", role: "Rehabilitation Specialist", bio: "Expert in creating personalized recovery programs." }
            ].map((member, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image 
                    src={`/team-${index+1}.jpg`} 
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-indigo-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-16 bg-indigo-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Recovery?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Our team is here to support you every step of the way.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/contact" className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300">Contact Us</a>
            <a href="tel:9332757771" className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-indigo-700 transition duration-300">Call Now</a>
          </div>
        </div>
      </section>
    </>
  )
}
