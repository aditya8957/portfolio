import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code, Lightbulb } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "3rd Year B.Tech in Computer Science at KIET Ghaziabad",
    },
    {
      icon: Code,
      title: "Focus",
      description: "Full Stack Development & Data Structures",
    },
    {
      icon: Lightbulb,
      title: "Passion",
      description: "Building solutions that make a difference",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen text-white py-20 px-5 flex justify-center items-center overflow-hidden"
    >
      {/* Background glow elements */}
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

      <div className="relative z-20 max-w-6xl w-full">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-cyan-400">About</span> Me
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side Avatar Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border border-emerald-500/40">
              <img
                src="/images/adityaimg.png"
                alt="Aditya Pratap"
                className="w-full h-full object-cover object-top brightness-90"
              />
            </div>

            <div className="absolute inset-0 blur-3xl bg-emerald-600/20 -z-10 opacity-0 group-hover:opacity-100 transition duration-700"></div>
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate Computer Science student with a keen interest in
              building innovative web applications. Currently exploring the
              <span className="text-emerald-400"> MERN stack</span> and diving
              deep into <span className="text-emerald-400">Data Structures</span>.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to projects, or solving algorithmic challenges. I
              believe in writing clean, maintainable code that makes a real
              impact.
            </p>

            {/* Highlights */}
            <div className="grid gap-4 pt-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.4 + index * 0.1,
                  }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#0a0a0a] border border-emerald-600/30"
                >
                  <div className="p-3 rounded-lg bg-emerald-600">
                    <item.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
