import React, { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const XIcon = ({ size = 28, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
  >
    <path d="M18.21 2H21L14.33 10.09L22 22H15.82L11.06 14.66L5.6 22H2.77L9.8 13.3L2 2H8.35L12.66 8.71L18.21 2ZM16.92 20.33H18.74L7.15 3.6H5.22L16.92 20.33Z" />
  </svg>
);

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "mail",
        "template_ilggigl",
        e.target,
        "w4h-Dys3-HOov7jWl"
      )
      .then(
        () => setSubmitted(true),
        () => alert("Something went wrong!")
      );
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-6 text-white overflow-hidden"
    >
      {/* Background glows */}
      <motion.div
        animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-96 h-96 bg-emerald-700/20 blur-[130px] rounded-full top-10 left-20"
      />
      <motion.div
        animate={{ x: [0, -100, 0], y: [0, 60, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[450px] h-[450px] bg-emerald-600/20 blur-[150px] rounded-full bottom-20 right-10"
      />

      {/* Shining circle */}
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute w-[600px] h-[600px] bg-emerald-400/10 blur-[200px] rounded-full"
      />

      {/* Falling particles */}
      {[...Array(16)].map((_, i) => (
        <motion.span
          key={`contact-particle-${i}`}
          className="absolute w-1 h-1 bg-emerald-300/70 rounded-full"
          initial={{
            x: Math.random() * 1920,
            y: Math.random() * 1080,
            opacity: 0,
          }}
          animate={{
            x: "+=200",
            y: "+=350",
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      <div className="max-w-5xl mx-auto relative z-20">
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-cyan-400 text-center"
        >
          Get In Touch
        </motion.h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14">
          Have a project, want to collaborate, or just want to connect?
          <br />I'm always open to internships, freelance work, and collabs.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="
              p-8 rounded-2xl bg-black/50 backdrop-blur-xl 
              border border-white/10
              shadow-xl hover:shadow-emerald-600/30 transition-all
            "
          >
            <h3 className="text-2xl font-semibold text-emerald-300 mb-3">
              Let's Connect
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              Have a project in mind or just want to say hi? Feel free to reach out!
            </p>

            <div className="flex items-center gap-4 mb-8">
              <Mail size={28} className="text-emerald-400" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-medium break-all">
                  adityapratap8957@gmail.com
                </p>
              </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent mb-8"></div>

            <p className="text-gray-400 mb-3">Follow me on</p>

            <div className="flex gap-5">
              {[
                { icon: Github, link: "https://github.com/aditya8957" },
                { icon: Linkedin, link: "https://www.linkedin.com/in/aditya-pratap-9a768632a/" },
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={i}
                    href={s.link}
                    target="_blank"
                    whileHover={{ scale: 1.15 }}
                    className="
                      p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl
                      hover:border-emerald-400/40 hover:bg-emerald-500/10
                      transition-all shadow-md hover:shadow-emerald-500/30
                    "
                  >
                    <Icon className="text-emerald-300" size={26} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
              p-8 rounded-2xl bg-black/50 backdrop-blur-xl
              border border-white/10 shadow-xl hover:shadow-emerald-600/30
            "
          >
            {!submitted ? (
              <>
                <div className="mb-4">
                  <label className="text-sm text-gray-400">Your Name</label>
                  <input
                    name="user_name"
                    required
                    className="w-full mt-1 p-3 rounded-lg bg-black/40 border border-white/10 text-white focus:border-emerald-400 transition"
                  />
                </div>

                <div className="mb-4">
                  <label className="text-sm text-gray-400">Email</label>
                  <input
                    name="user_email"
                    required
                    type="email"
                    className="w-full mt-1 p-3 rounded-lg bg-black/40 border border-white/10 text-white focus:border-emerald-400 transition"
                  />
                </div>

                <div className="mb-4">
                  <label className="text-sm text-gray-400">Message</label>
                  <textarea
                    name="message"
                    required
                    className="w-full mt-1 p-3 rounded-lg bg-black/40 border border-white/10 text-white h-28 focus:border-emerald-400 transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 transition text-white font-medium shadow-lg"
                >
                  Send Message
                </button>
              </>
            ) : (
              <div className="text-emerald-400 font-medium text-center">
                Thanks — your message has been sent!
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
