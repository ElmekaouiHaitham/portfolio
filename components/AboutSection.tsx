import React from "react";
import { FaHandPointRight } from "react-icons/fa";

const skills = [
  { skill: "Python" },
  { skill: "Machine learning" },
  { skill: "Next.js" },
  { skill: "Flask" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Tailwind CSS" },
  { skill: "Flutter" },
  { skill: "Dart" },
  { skill: "Firebase" },
  { skill: "System design " },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="flex justify-center items-center flex-col w-screen px-7 md:px-28">
        <div>
          <h1 className="text-4xl font-bold">À propos de moi</h1>
        </div>
        <hr className="w-6 h-1 mx-auto my-4 mb-5 bg-teal-500 border-0 rounded"></hr>
        <div className="flex flex-col md:flex-row gap-11 mt-4">
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-3">Faisons connaissance !</h1>
            <p>
              Salut, je m&apos;appelle Haitham et je suis élève en ingénierie à l&apos;ENSAMr{" "}
              <span className="font-bold">extrêmement ambitieux</span>,
              <span className="font-bold"> motivé</span> et{" "}
              <span className="font-bold">passionné</span>, passionné par ld&apos;IA, le web et les mathématiques,
            </p>
            <br />
            <p>
              Je crois qu&apos;il ne faut{" "}
              <span className="font-bold text-teal-500">
                jamais cesser de grandir
              </span>
              , et c&apos;est ce à quoi je m&apos;efforce de faire. J&apos;ai une passion pour
              la technologie et le désir de repousser constamment les limites de
              ce qui est possible. Je suis enthousiaste à l&apos;idée de voir où ma
              carrière me mènera et suis toujours ouvert aux nouvelles
              opportunités. 🙂
            </p>
            <br />
            <br />
            <div className="flex">
              <FaHandPointRight />
              <a href="https://github.com/ElmekaouiHaitham" target="_blank"
                className="pl-4 pb-3 text-teal-500 hover:text-teal-700 font-semibold"
              >
                Découvrez mon GitHub
              </a>
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-6">Mes compétences</h1>
            <div className="flex flex-wrap">
              {skills.map((item, index) => {
                return (
                  <p
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                    key={index}
                  >
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
