// src/components/About.jsx
import devImage from "../assets/pic-1.svg";
import {motion} from 'framer-motion'

const About = () => {
  return (
    <section
  id="about"
  className="min-h-screen flex flex-col gap-10 px-6 py-20 max-w-6xl mx-auto"
>
  {/* Centered Heading */}
  <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400">
    About Me
  </h2>

  {/* Content row: text and image */}
  <div className="flex flex-col md:flex-row items-center justify-between gap-10">
    {/* Text */}
    <div className="md:w-1/2">
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        Hi there! I'm Aayush, a energetic and committed tech enthusiast passionate about creating innovative solutions for real-world problems. I am always excited to learn new technologies and tools and give my best to everything i do. Welcome to my online portfolio where you'll find a showcase of my projects, experiences, and the skills I've developed so far. Let's connect and collaborate together.
                </p>
    </div>

    {/* Image */}
    <motion.div className="md:w-1/2 flex justify-center"  initial={{opacity:0.2,y:100}} transition={{duration:1}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
      <img
        src={devImage}
        alt="Web developer"
        className="w-full max-w-sm rounded-xl"
      />
    </motion.div>
  </div>
</section>

  );
};

export default About;
