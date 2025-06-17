'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="text-[#3D2B1F] relative bg-white" style={{ backgroundImage: 'url(/foo.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* About Column */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6">New Wings Foundation</h3>
              <p className="text-[#5E3B1F] mb-6">
                Professional drug de-addiction & rehabilitation center in Noapara, Barasat. Providing compassionate care and treatment for addiction and minor mental health conditions.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="bg-[#5E3B1F] hover:bg-[#3D2B1F] p-2 rounded-full transition text-white">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="bg-[#5E3B1F] hover:bg-[#3D2B1F] p-2 rounded-full transition text-white">
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            {/* Services Column */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6">Our Services</h3>
              <ul className="space-y-3 text-[#5E3B1F]">
                <li>Drug De-addiction Programs</li>
                <li>Residential Rehabilitation</li>
                <li>Outpatient Treatment</li>
                <li>Minor Mental Health Treatment</li>
                <li>Family Support Programs</li>
                <li>Aftercare & Alumni Support</li>
                <li>Counseling Services</li>
              </ul>
            </motion.div>

            {/* Quick Links Column */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link href="/" className="text-[#5E3B1F] hover:text-black transition">Home</Link></li>
                <li><Link href="/about" className="text-[#5E3B1F] hover:text-black transition">About Us</Link></li>
                <li><Link href="/services" className="text-[#5E3B1F] hover:text-black transition">Services</Link></li>

                <li><Link href="/contact" className="text-[#5E3B1F] hover:text-black transition">Contact</Link></li>
              </ul>
            </motion.div>

            {/* Contact Column */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#8B5E3C]" />
                  <span className="text-[#5E3B1F]">9332757771 / 9831545651</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#8B5E3C]" />
                  <span className="text-[#5E3B1F]">newwingsfoundation28@gmail.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-15 h-15 text-[#8B5E3C] " />
                  <p className="text-[#5E3B1F] mt-1 lowercase first-letter:uppercase">
                      SONARGAON APARTMENT ( NEAR MEDPLUS ) , KHUDIRAM BASU ROAD , NOAPARA , BARASAT , North 24 Parganas,700125
                    </p>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="border-t border-[#8B5E3C] my-12"
          />

          {/* Embedded Google Map */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="overflow-hidden shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.862923057769!2d88.4813961!3d22.733335799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8a3be42abd93f%3A0x340ed80939e85041!2sNEW%20WINGS%20FOUNDATION!5e0!3m2!1sen!2sin!4v1750157620973!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="w-full"
              title="New Wings Foundation Location"
            ></iframe>
          </motion.div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-12">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-sm text-center md:text-left text-[#5E3B1F]"
            >
              © {new Date().getFullYear()} New Wings Foundation. All rights reserved.<br />
              Committed to helping individuals overcome addiction and mental health challenges
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <Link href="/privacy" className="text-[#8B5E3C] hover:text-[#5E3B1F] text-sm transition">Privacy Policy</Link>
              <Link href="/terms" className="text-[#8B5E3C] hover:text-[#5E3B1F] text-sm transition">Terms of Service</Link>
              <Link href="/faq" className="text-[#8B5E3C] hover:text-[#5E3B1F] text-sm transition">FAQ</Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}