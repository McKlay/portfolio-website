const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full h-full py-80 overflow-hidden flex flex-col items-center justify-center z-10"
    >
      {/* Text Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
          Making apps with modern technologies.
        </h2>
        <p className="italic text-gray-300 text-sm md:text-base mb-10">
          Never miss a task, deadline or idea.
        </p>

        {/* Icons Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 justify-center items-center">
          <img src="/assets/images/html.png" alt="HTML" className="w-12 h-12" />
          <img src="/assets/images/css.png" alt="CSS" className="w-12 h-12" />
          <img src="/assets/images/javascript.png" alt="JS" className="w-12 h-12" />
          <img src="/assets/images/tailwind.png" alt="Tailwind" className="w-12 h-12" />
          <img src="/assets/images/react.png" alt="React" className="w-12 h-12" />
          <img src="/assets/images/nextjs.png" alt="Next.js" className="w-12 h-12" />
          <img src="/assets/images/python.png" alt="Python" className="w-12 h-12" />
          <img src="/assets/images/docker.png" alt="Docker" className="w-12 h-12" />
        </div>
      </div>

      {/* Purple Orbital Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="/assets/videos/skills.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
};

export default Skills;
