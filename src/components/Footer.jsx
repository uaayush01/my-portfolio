import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.footer  initial={{opacity:0.2,y:100}} transition={{duration:1}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="py-6 text-center text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
      © {2025} Aayush Upadhyay. Built with React & Tailwind CSS.
    </motion.footer>
  );
};

export default Footer;
