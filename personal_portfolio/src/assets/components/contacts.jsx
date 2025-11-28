import {
  FaCertificate,
  FaEnvelope,
  FaFileAlt,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-black-50 to-gray-200">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-800">Contact Me</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-2 mb-12 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT SECTION */}
          <div>
            <h3 className="text-2xl font-semibold text-white-700 mb-4">Quick Links</h3>

            <div className="space-y-5">

              {/* Resume Download */}
              <a
                href="/docs/Resume.pdf"
                download
                className="flex items-center space-x-4 p-3 bg-white shadow rounded-lg hover:shadow-lg transition"
              >
                <FaFileAlt className="text-gray-800 text-3xl" />
                <p className="text-gray-700 text-lg">Download Resume</p>
              </a>

              {/* Certifications */}
              <a
                href="/docs/Certifications.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-3 bg-white shadow rounded-lg hover:shadow-lg transition"
              >
                <FaCertificate className="text-yellow-500 text-3xl" />
                <p className="text-gray-700 text-lg">View Certifications</p>
              </a>

              {/* Email */}
              <a
                href="mailto:yourmail@gmail.com"
                className="flex items-center space-x-4 p-3 bg-white shadow rounded-lg hover:shadow-lg transition"
              >
                <FaEnvelope className="text-blue-600 text-3xl" />
                <p className="text-gray-700 text-lg">sudhanshu.it9@gmail.com</p>
              </a>

              {/* Phone */}
              <a
                href="tel:+919876543210"
                className="flex items-center space-x-4 p-3 bg-white shadow rounded-lg hover:shadow-lg transition"
              >
                <FaPhone className="text-green-600 text-3xl" />
                <p className="text-gray-700 text-lg">+91 9140745125</p>
              </a>

              {/* Location */}
              <div className="flex items-center space-x-4 p-3 bg-white shadow rounded-lg">
                <FaMapMarkerAlt className="text-red-600 text-3xl" />
                <p className="text-gray-700 text-lg">Delhi, India</p>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION - Contact Form */}
          <div className="bg-black shadow-xl rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Send a Message</h3>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 outline-none"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FOOTER */}
        <p className="text-center mt-12 text-black-600">
          © {new Date().getFullYear()} Sudhanshu | All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Contact;