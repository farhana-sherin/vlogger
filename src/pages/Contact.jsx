import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  ArrowRight,
  Clock,
  Globe
} from 'lucide-react';
import { DOQUAD_CONTACT, SOCIAL_LINKS } from '../constants/data';
import Collaboration from '../components/Collaboration';

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.95 1.96C5.12 19.5 12 19.5 12 19.5s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    location: '',
    inquiryType: 'Food Spot Suggestion',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message || !formData.emailOrPhone) return;

    setLoading(true);
    setErrorMessage('');

    const apiKey = import.meta.env.VITE_BREVO_API_KEY || "";
    const receiverEmail = import.meta.env.VITE_RECEIVER_EMAIL || "";
    const senderEmail = import.meta.env.VITE_SENDER_EMAIL || receiverEmail;

    const emailPayload = {
      sender: {
        name: "Foodie World Contact",
        email: senderEmail
      },
      to: [
        {
          email: receiverEmail,
          name: "Foodie World Admin"
        }
      ],
      subject: `📩 [Foodie World] New ${formData.inquiryType} from ${formData.name}`,
      htmlContent: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
          <div style="padding: 30px 15px; background-color: #f8fafc;">
            <div style="max-width: 580px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);">
              
              <!-- Header Bar -->
              <div style="background-color: #ea580c; padding: 24px 30px; text-align: left;">
                <div style="font-size: 12px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; color: #ffedd5; margin-bottom: 4px;">
                  Foodie World • Contact Inquiry
                </div>
                <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 800; text-transform: uppercase; letter-spacing: -0.5px;">
                  New Message Received
                </h1>
              </div>

              <!-- Main Content Body -->
              <div style="padding: 30px;">
                
                <p style="margin: 0 0 20px 0; font-size: 14px; color: #64748b; line-height: 1.5;">
                  You received a new inquiry through your official website contact form. Here are the submission details:
                </p>

                <!-- Information Table -->
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 0; font-size: 13px; font-weight: 700; color: #64748b; text-transform: uppercase; width: 140px;">Full Name</td>
                    <td style="padding: 12px 0; font-size: 15px; font-weight: 600; color: #0f172a;">${formData.name}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 0; font-size: 13px; font-weight: 700; color: #64748b; text-transform: uppercase;">Email / Phone</td>
                    <td style="padding: 12px 0; font-size: 15px; font-weight: 600; color: #ea580c;">
                      <a href="mailto:${formData.emailOrPhone}" style="color: #ea580c; text-decoration: none;">${formData.emailOrPhone}</a>
                    </td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 0; font-size: 13px; font-weight: 700; color: #64748b; text-transform: uppercase;">Location / City</td>
                    <td style="padding: 12px 0; font-size: 15px; font-weight: 500; color: #334155;">${formData.location || 'Not specified'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; font-size: 13px; font-weight: 700; color: #64748b; text-transform: uppercase;">Inquiry Topic</td>
                    <td style="padding: 12px 0;">
                      <span style="display: inline-block; background-color: #fff7ed; color: #c2410c; border: 1px solid #ffedd5; font-size: 13px; font-weight: 700; padding: 4px 12px; rounded: 9999px; border-radius: 20px;">
                        ${formData.inquiryType}
                      </span>
                    </td>
                  </tr>
                </table>

                <!-- Message Box -->
                <div style="background-color: #fafafa; border: 1px solid #e7e5e4; border-left: 4px solid #ea580c; border-radius: 12px; padding: 20px; margin-bottom: 10px;">
                  <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; tracking: 1px; color: #ea580c; margin-bottom: 8px;">
                    Message Details
                  </div>
                  <div style="font-size: 14px; color: #292524; line-height: 1.6; white-space: pre-wrap; font-weight: 400;">
                    ${formData.message}
                  </div>
                </div>

              </div>

              <!-- Footer -->
              <div style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 16px 30px; text-align: center;">
                <p style="margin: 0; font-size: 12px; color: #94a3b8;">
                  Sent automatically from <strong style="color: #64748b;">Foodie World Website</strong>
                </p>
              </div>

            </div>
          </div>
        </body>
        </html>
      `
    };

    try {
      const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': apiKey,
          'content-type': 'application/json'
        },
        body: JSON.stringify(emailPayload)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          emailOrPhone: '',
          location: '',
          inquiryType: 'Food Spot Suggestion',
          message: ''
        });
        setTimeout(() => setSubmitted(false), 8000);
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('Brevo API Error:', errorData);
        setErrorMessage('Could not deliver email. Please try again or reach out on WhatsApp directly.');
      }
    } catch (err) {
      console.error('Email Submit Error:', err);
      setErrorMessage('Network connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen font-sans pb-16">

      {/* 1. Page Banner Header */}
      <section className="py-16 lg:py-20 relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-[#111111] to-[#0A0A0A]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#EA580C]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1550px] mx-auto px-6 md:px-12 lg:px-16 text-center relative z-10">
          <span className="font-handwriting font-bold text-2xl lg:text-3xl text-[#EA580C] block mb-1">
            Get In Touch With Foodie World ~
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
            CONTACT & <span className="text-[#EA580C]">COLLABORATIONS</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mt-3 leading-relaxed">
            Have a food spot recommendation, restaurant review invite, or brand sponsorship query? Fill out the form or reach out directly!
          </p>
        </div>
      </section>

      {/* 2. Main Contact Grid (Left Details + Right Interactive Form) */}
      <section className="py-14 lg:py-20 relative">
        <div className="max-w-[1550px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">

            {/* Left Column: Direct Info & Quick Social Channels */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ type: "spring", stiffness: 180, damping: 16 }}
              className="lg:col-span-5 space-y-6"
            >

              <div className="bg-[#121212] border border-white/10 p-6 sm:p-8 rounded-3xl space-y-6 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#EA580C]/15 text-[#EA580C] flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold uppercase text-white">Contact Info</h2>
                    <p className="text-xs text-gray-400">Direct response within 24 hours</p>
                  </div>
                </div>

                <div className="space-y-4 pt-2">

                  {/* Phone / WhatsApp Card */}
                  <a
                    href={DOQUAD_CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-[#1A1A1A] border border-white/5 hover:border-[#25D366]/50 transition-colors group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold uppercase text-gray-400 tracking-wider">WhatsApp & Phone</span>
                      <p className="text-xs font-bold text-white group-hover:text-[#25D366] transition-colors">
                        {DOQUAD_CONTACT.phoneFormatted}
                      </p>
                    </div>
                  </a>

                  {/* Location Card */}
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#1A1A1A] border border-white/5">
                    <div className="w-11 h-11 rounded-xl bg-[#EA580C]/10 border border-[#EA580C]/30 text-[#EA580C] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold uppercase text-gray-400 tracking-wider">Base Location</span>
                      <p className="text-xs font-bold text-white">
                        Malappuram & Kozhikode, Kerala
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="pt-4 border-t border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-3">
                    Connect On Social Media
                  </span>
                  <div className="grid grid-cols-2 gap-2.5">
                    <a
                      href={SOCIAL_LINKS.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-[#1A1A1A] border border-white/10 hover:border-red-500 flex items-center gap-2.5 text-xs font-bold text-white transition-colors"
                    >
                      <YoutubeIcon className="w-4 h-4 text-red-500" />
                      <span>YouTube</span>
                    </a>
                    <a
                      href={SOCIAL_LINKS.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-[#1A1A1A] border border-white/10 hover:border-pink-500 flex items-center gap-2.5 text-xs font-bold text-white transition-colors"
                    >
                      <InstagramIcon className="w-4 h-4 text-pink-500" />
                      <span>Instagram</span>
                    </a>
                  </div>
                </div>

              </div>

            </motion.div>

            {/* Right Column: Complete Interactive Message Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.15 }}
              className="lg:col-span-7 bg-[#121212] border border-white/10 p-8 sm:p-10 rounded-3xl relative shadow-2xl"
            >

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center space-y-4"
                >
                  <div className="w-20 h-20 rounded-full bg-[#EA580C]/20 border-2 border-[#EA580C] text-[#EA580C] flex items-center justify-center mx-auto shadow-lg shadow-[#EA580C]/20">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-display text-3xl font-extrabold text-white uppercase">Message Sent Successfully!</h3>
                  <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to <strong>Foodie World</strong>! Your message has been sent. We'll review it and get back to you shortly 🚀
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-display text-2xl font-bold uppercase text-white mb-1">Send A Direct Message</h3>
                    <p className="text-xs text-gray-400">Fill out the form below and we'll get back to you as soon as possible.</p>
                  </div>

                  {errorMessage && (
                    <div className="bg-red-500/10 border border-red-500/40 text-red-400 text-xs p-3 rounded-xl">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {/* Name Input */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                        Your Full Name <span className="text-[#EA580C]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#1A1A1A] border border-white/10 text-white text-xs placeholder-gray-500 focus:outline-none focus:border-[#EA580C] transition-colors"
                      />
                    </div>

                    {/* Email/Phone Input */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                        Email or WhatsApp <span className="text-[#EA580C]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. rahul@gmail.com / 98765..."
                        value={formData.emailOrPhone}
                        onChange={(e) => setFormData({ ...formData, emailOrPhone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#1A1A1A] border border-white/10 text-white text-xs placeholder-gray-500 focus:outline-none focus:border-[#EA580C] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Location / City & Topic */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                        City / Location
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Kozhikode, Calicut"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#1A1A1A] border border-white/10 text-white text-xs placeholder-gray-500 focus:outline-none focus:border-[#EA580C] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                        Inquiry Topic
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#1A1A1A] border border-white/10 text-white text-xs focus:outline-none focus:border-[#EA580C] transition-colors cursor-pointer"
                      >
                        <option value="Food Spot Suggestion">🍲 Food Spot Suggestion</option>
                        <option value="Brand Collaboration">🤝 Brand & Business Sponsorship</option>
                        <option value="Restaurant Review Invite">🍽️ Restaurant Review Invite</option>
                        <option value="General Query">💬 General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Detailed Message */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      Message Details <span className="text-[#EA580C]">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Share details about the spot, dish, or collaboration project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#1A1A1A] border border-white/10 text-white text-xs placeholder-gray-500 focus:outline-none focus:border-[#EA580C] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-6 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xl shadow-[#EA580C]/25 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending Your Message...</span>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
