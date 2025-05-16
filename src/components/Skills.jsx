import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaGitAlt } from "react-icons/fa";
import { DiMysql, DiMongodb } from "react-icons/di";
import { SiTailwindcss, SiExpress, SiNetlify, SiVercel,  } from "react-icons/si"; 
import { VscVscode } from "react-icons/vsc";
import { GiSkills } from "react-icons/gi";
import { LuBrain } from "react-icons/lu";


const Skills = () => {
  const skills = [
    {
      title: "Frontend",
      items: [
        { name: "HTML", icon: <FaHtml5 size={24} /> },
        { name: "CSS", icon: <FaCss3Alt size={24} /> },
        { name: "JavaScript", icon: <FaJs size={24} /> },
        { name: "React JS", icon: <FaReact size={24} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={24} /> },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", icon: <FaNodeJs size={24} /> },
        { name: "Express.js", icon: <SiExpress size={24} /> },
      ],
    },
    {
      title: "Databases",
      items: [
        { name: "MongoDB", icon: <DiMongodb size={24} /> },
        { name: "MySQL", icon: <DiMysql size={24} /> },
      ],
    },
    {
      title: "Tools & Platforms",
      items: [
        { name: "GitHub", icon: <FaGithub size={24} /> },
        { name: "Netlify", icon: <SiNetlify size={24} /> },
        { name: "Vercel", icon: <SiVercel size={24} /> },
        { name: "VS Code", icon: <VscVscode size={24}/> },  
        { name: "Git", icon: <FaGitAlt size={24}/>
 },  
      ],
    },
    {
      title: "Other",
      items: [
        { name: "SQL", icon: <GiSkills size={24} /> },
        { name: "DSA", icon:<LuBrain /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-20 max-w-6xl mx-auto text-center"
    >
      <h2 className="text-3xl font-bold mb-12 text-blue-600 dark:text-blue-400">
        Skills
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-left">
        {skills.map((category, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              {category.title}
            </h3>
            <ul className="space-y-2">
              {category.items.map((skill, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white hover:scale-105 transition-all duration-300"
                >
                  <span>{skill.icon}</span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
