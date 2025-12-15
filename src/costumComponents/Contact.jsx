import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend, FiMessageSquare } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert('Message sent successfully!');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const contactInfo = [
    { icon: <FiMapPin />, title: "Address", content: "123 Shopping Street, Karachi, Pakistan" },
    { icon: <FiPhone />, title: "Phone", content: "+92 342 1234567" },
    { icon: <FiMail />, title: "Email", content: "support@nahmad.com" },
    { icon: <FiClock />, title: "Hours", content: "Mon - Sat: 9:00 AM - 9:00 PM" },
  ];

  const faqs = [
    { q: "How long does shipping take?", a: "Standard shipping takes 5-7 business days." },
    { q: "What is your return policy?", a: "We offer 30-day hassle-free returns." },
    { q: "Do you ship internationally?", a: "Yes, we ship to over 100 countries." },
    { q: "How can I track my order?", a: "You'll receive a tracking number via email." },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="gradient-text animate-fadeInUp">Contact Us</h1>
        <div className="breadcrumb animate-fadeInUp delay-200">
          <a href="/">Home</a>
          <span>/</span>
          <span>Contact</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Contact Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="card p-6 text-center stagger-item hover-lift"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                {info.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{info.title}</h3>
              <p className="text-gray-600">{info.content}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="card p-8 animate-fadeInLeft">
            <h2 className="text-2xl font-bold mb-2">Send us a Message</h2>
            <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you soon.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="form-input form-textarea"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner w-5 h-5 border-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Map & Additional Info */}
          <div className="animate-fadeInRight">
            <div className="card overflow-hidden mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.9954099668674!2d67.0011!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUxJzM4LjUiTiA2N8KwMDAnMDMuOSJF!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Location Map"
              />
            </div>

            <div className="card p-6 mb-8">
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {[
                  { icon: <FaFacebook />, color: 'hover:bg-blue-600' },
                  { icon: <FaTwitter />, color: 'hover:bg-sky-500' },
                  { icon: <FaInstagram />, color: 'hover:bg-pink-500' },
                  { icon: <FaLinkedin />, color: 'hover:bg-blue-700' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl text-gray-600 hover:text-white ${social.color} transition-all hover-scale`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="card p-6 gradient-bg text-white">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                  <FiMessageSquare />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Need Quick Support?</h3>
                  <p className="opacity-90 mb-4">Our support team is available 24/7</p>
                  <button className="bg-white text-green-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-all">
                    Start Live Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <section className="animate-fadeInUp">
          <h2 className="section-title gradient-text">Frequently Asked Questions</h2>
          <p className="section-subtitle">Find answers to common questions</p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="card p-6 hover-lift">
                <h3 className="font-bold text-lg mb-2 text-green-600">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;