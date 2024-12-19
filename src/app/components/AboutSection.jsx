"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="grid grid-cols-2 gap-x-8 gap-y-4 pl-2">
        <li className="flex items-center gap-2">
          <img src="/images/projects/powerbi.png" alt="Power BI" className="w-6 h-6" /> Power BI
        </li>
        <li className="flex items-center gap-2">
          <img src="/images/projects/figma.png" alt="Figma" className="w-4 h-6" /> Figma
        </li>
        <li className="flex items-center gap-2">
          <img src="/images/projects/jupyter.png" alt="Jupyter Notebook" className="w-6 h-7" /> Jupyter Notebook
        </li>
        <li className="flex items-center gap-2">
          <img src="/images/projects/tableu.png" alt="Tableu" className="w-7 h-7" /> Tableu
        </li>
        <li className="flex items-center gap-2">
          <img src="/images/projects/colab.png" alt="Google Colab" className="w-7 h-4" /> Google Colab
        </li>
        <li className="flex items-center gap-2">
          <img src="/images/projects/excel.png" alt="Microsoft Excel" className="w-8 h-7" /> Microsoft Excel
        </li>
        <li className="flex items-center gap-2">
          <img src="/images/projects/python.png" alt="Python" className="w-7 h-7" /> Python
        </li>
        <li className="flex items-center gap-2">
          <img src="/images/projects/canva.png" alt="Canva" className="w-10 h-6" /> Canva
        </li>
        <li className="flex items-center gap-2">
          <img src="/images/projects/html.png" alt="HTML" className="w-9 h-9" /> HTML
        </li>
        <li className="flex items-center gap-2">
          <img src="/images/projects/css.png" alt="CSS" className="w-6 h-8" /> CSS
        </li>
        <li className="flex items-center gap-2">
          <img src="/images/projects/js.png" alt="JavaScript" className="w-6 h-6" /> JavaScript
        </li>
        <li className="flex items-center gap-2">
          <img src="/images/projects/react.png" alt="React" className="w-8 h-7" /> React
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Universitas Brawijaya</li>
        <li>SMAK Santo Albertus, Malang</li>
        <li>SMP Santa Ursula, Bandung</li>
        <li>SD Santa Ursula, Bandung</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Career Essentials in Generative AI by Microsoft and Linkedin</li>
        <li>Kickstart Data Science Journey: Python Programming Essentials</li>
        <li>Designing and Implementing Microsoft Azure AI Solution</li>
        <li>SAP Analytics Cloud and SAP Building Apps</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a 5th semester Informatics Engineering student at Universitas Brawijaya, passionate about technology, problem-solving, and creating impactful solutions. Balancing my roles as a Data Scientist, Front-End Developer, and UI/UX Designer, I combine analytical precision with creative design. Through leadership roles and hands-on projects, I strive to bridge innovation and purpose, using data and technology to make a meaningful difference.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
