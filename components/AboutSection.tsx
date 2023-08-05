import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Flutter" },
  { skill: "Dart" },
  { skill: "c++" },
  { skill: "Arduino" },
  { skill: "Flask" },
  { skill: "Machine learning" },
  { skill: "SQL" },
  { skill: "Firebase" },
  { skill: "System design " },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="flex justify-center items-center flex-col w-screen px-7 md:px-28">
        <div>
          <h1 className="text-4xl font-bold">About Me</h1>
        </div>
        <hr className="w-6 h-1 mx-auto my-4 mb-5 bg-teal-500 border-0 rounded"></hr>
        <div className="flex flex-col sm:flex-row gap-11 mt-4">
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-3">Get to know me!</h1>
            <p>
              Hi, my name is Haitham, and I am a{" "}
              <span className="font-bold">highly ambitious</span>,
              <span className="font-bold"> self-motivated</span>, and{" "}
              <span className="font-bold">passionate</span> developer with
              expertise in Flutter for cross-platform magic, Next.js for
              optimized web performance, and Flask for flexible backend APIs.
            </p>
            <br />
            <p>
              I&apos;ve worked on various projects, both independently and by
              collaborating on open-source initiatives. I enjoy solving complex
              challenges with innovative ideas, striving to make software that
              has a positive impact on businesses and people&apos;s lives.
            </p>
            <br />
            <p>
              My fascination with the scientific side of programming drives me
              to explore math, physics, and build simulations for real-world
              scenarios, enhancing my problem-solving abilities.
            </p>
            <br />
            <p>
              Besides application and web development, I&apos;m also passionate about
              machine learning. My solid foundation in this field allows me to
              integrate AI-driven features into my projects and explore
              innovative solutions.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>
              , and that&apos;s what I strive to do. I have a passion for technology
              and a desire to always push the limits of what is possible. I am
              excited to see where my career takes me and am always open to new
              opportunities. 🙂
            </p>
          </div>

          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-6">My skills</h1>
            <div className="flex flex-wrap">
              {skills.map((item, index) => {
                return (
                  <p className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold" key={index}>
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
