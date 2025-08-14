// src/components/Hero.jsx

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center px-4 text-center"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I'm <span className="text-blue-600 dark:text-blue-400">Aayush Upadhyay</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 max-w-xl">
        A passionate Web developer crafting responsive web apps with clean UI and solid backend architecture.
      </p>
      <a
        href={`${import.meta.env.BASE_URL}ayush-up.pdf`}
        download
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 mt-4"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Hero;
