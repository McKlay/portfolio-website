import { useEffect, useState } from "react";

const titles = [
  "AI Engineer",
  "React Developer",
  "Python Developer",
  "ML Enthusiast",
  "Software Engineer",
];

const RotatingTitles = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-xl sm:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 transition-all duration-500">
      {titles[index]}
    </div>
  );
};

export default RotatingTitles;
