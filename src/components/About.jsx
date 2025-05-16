// src/components/About.jsx
import devImage from "../assets/pic-1.svg";

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
        Hello! I'm a Web developer who loves building modern, performant
        web applications. With a solid background in both frontend and backend
        technologies, I enjoy crafting user-friendly interfaces and building
        robust APIs. I’m also interested in problem solving, databases, and
        scalable deployment.
      </p>
    </div>

    {/* Image */}
    <div className="md:w-1/2 flex justify-center">
      <img
        src={devImage}
        alt="Web developer"
        className="w-full max-w-sm rounded-xl"
      />
    </div>
  </div>
</section>

  );
};

export default About;
