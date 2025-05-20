"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react"; 

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-32 text-white max-w-[1200px] mx-auto px-4"
    >
      {/* Decorative Gradient Blob */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-purple-500 rounded-full blur-[120px] opacity-30 pointer-events-none z-0" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-16 relative z-10"
      >
        {/* Left Side */}
        <div className="space-y-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl lg:text-7xl font-bold text-gray-300 leading-tight"
          >
            Get in <span className="text-gray-500">touch</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass p-8 rounded-2xl space-y-8 backdrop-blur-md border border-white/10 shadow-2xl bg-white/5"
          >
            <div className="space-y-1">
              <p className="text-sm uppercase tracking-widest text-gray-400">
                Phone
              </p>
              <a
                href="tel:+919650227870"
                className="text-xl lg:text-2xl font-medium hover:text-gray-400 transition duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5 text-gray-500" />
                +91 9650227870
              </a>
            </div>

            <div className="space-y-1">
              <p className="text-sm uppercase tracking-widest text-gray-400">
                Email
              </p>
              <a
                href="mailto:yashchauhan.2303@gmail.com"
                className="text-xl lg:text-2xl font-medium hover:text-gray-400 transition duration-300 flex items-center gap-2 break-all"
              >
                <Mail className="w-5 h-5 text-gray-500" />
                yashchauhan.2303@gmail.com
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side – Optional Contact Box */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass p-8 rounded-2xl backdrop-blur-md border border-white/10 shadow-2xl bg-white/5 space-y-6"
        >
          <h3 className="text-2xl font-semibold text-gray-300">Let’s work together</h3>
          <p className="text-gray-400 text-lg">
            Got a project in mind or just want to say hello? Feel free to reach out — I’ll get back to you as soon as I can.
          </p>
          <a
            href="mailto:yashchauhan.2303@gmail.com"
            className="inline-block mt-4 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl transition"
          >
            Say Hello 👋
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
