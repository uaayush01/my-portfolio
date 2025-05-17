import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <motion.section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
        Contact Me
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-10 max-w-xl mx-auto">
        I'm open to work, collaboration, or just a friendly hello. Drop a message!
      </p>

      <motion.form
  action="https://formspree.io/f/mjkwjknp"
  method="POST"
  className="space-y-6 text-left"    initial={{opacity:0.2,y:100}} transition={{duration:1}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
>
  <input
    type="text"
    name="name"
    required
    placeholder="Your Name"
    className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
  />
  <input
    type="email"
    name="email"
    required
    placeholder="Your Email"
    className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
  />
  <textarea
    name="message"
    required
    rows="5"
    placeholder="Your Message"
    className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
  ></textarea>
  <button
    type="submit"
    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition duration-300"
  >
    Send Message
  </button>
</motion.form>
      <motion.div className="mt-12 flex justify-center gap-8 text-2xl text-blue-600 dark:text-blue-400"  initial={{opacity:0.2,y:100}} transition={{duration:1}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
        <a
          href="mailto:uaayush08@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:animate-bounce transition-transform duration-300"
        >
          <FaEnvelope />
        </a>
        <a
          href="www.linkedin.com/in/aayush-upadhyay-0107aaayush"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:animate-bounce transition-transform duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/uaayush01"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:animate-bounce transition-transform duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://leetcode.com/u/aayush_00/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:animate-bounce transition-transform duration-300"
        >
          <SiLeetcode />
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
