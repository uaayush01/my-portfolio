import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import vsImg from "../assets/vspic.avif"
import gameImg from "../assets/gamepic.webp"
import ecoImg from "../assets/ecopro.avif"
import diceImg from "../assets/diceimg.avif"
import weatherImg from "../assets/weatherimg.avif"
import {motion} from 'framer-motion'


const projects = [
  {
    title: "VS Code Extension",
    description: "VS Code extension with 14+ installs.",
    tech: ["Javascript", "Node.js", "VS code api "],
    live: "https://marketplace.visualstudio.com/items?itemName=uaayushh01.todo-file-generator",
    code: "https://github.com/uaayush01/Auto-Todo",
    image: vsImg,
  },
  {
    title: "Whack-a-Mole Game",
    description: "Classic whack-a-mole arcade game built in JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://gentle-cannoli-75c698.netlify.app/",
    code: "https://github.com/uaayush01/Whack-A-Mole-",
    image: gameImg ,
  },
  {
    title: "E-commerce-website-clone",
    description: "Clone of famous e-commerce website.",
    tech: ["React JS"],
    live: "https://digital-storefront-site.vercel.app/",
    code: "https://github.com/uaayush01/Digital-storefront--site/tree/main",
    image: ecoImg,
  },
  {
    title: "Dice rolling Game",
    description: "Roll dice and get points!!.",
    tech: ["React JS", "TailWind CSS"],
    live: "https://dice-rolling-game-puce.vercel.app/",
    code: "https://github.com/uaayush01/Dice-Rolling-Game",
    image: diceImg,
  },
  {
    title: "Weather App",
    description: "Get weather forecasts using a public weather API.",
    tech: ["HTML", "CSS", "JS", "API"],
    live: "https://weather-app-02-nine.vercel.app/",
    code: "https://github.com/uaayush01/Weather-App-02",
    image: weatherImg,
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="py-20 px-6 max-w-7xl mx-auto text-center"
       initial={{opacity:0.2,y:100}} transition={{duration:1}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
    >
      <h2 className="text-3xl font-bold mb-12 text-blue-600 dark:text-blue-400">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-t-xl"
            />
            <div className="p-4 text-left">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1 mb-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-white rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <a
                  href={project.live}
                  target="_blank"
                  className="flex items-center gap-1 text-blue-600 text-sm hover:underline"
                >
                  <FiExternalLink /> Live
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  className="flex items-center gap-1 text-gray-700 dark:text-gray-300 text-sm hover:underline"
                >
                  <FaGithub /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
