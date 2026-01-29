"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "PowerBI Portfolio - Java's Major City Tourism",
    description:
      "An interactive Power BI dashboard showcasing key insights into tourism data from 5 major cities in Java Island.",
    image: "/images/projects/wisata.png",
    previewUrl: "/projects/1",
    gitUrl:
      "https://drive.google.com/file/d/1_ba2KGkAB0GPLWX8i3Su1tz_MOozrOcP/view?usp=sharing",
    tag: ["All", "Data"],
  },
  {
    id: 2,
    title: "Breast Cancer Detection Data Analysis",
    description:
      "A machine learning model to analyze and predict breast cancer cases using structured datasets.",
    image: "/images/projects/PSD.png",
    previewUrl: "/projects/2",
    gitUrl:
      "https://drive.google.com/file/d/1X3x7pY3GC4TUDjQs4L81x0DsdFxqXUVC/view?usp=sharing",
    tag: ["All", "Data"],
  },
  {
    id: 3,
    title: "Portofolio Sistem Pencarian Biaya Perjalanan: Routwise",
    description:
      "A system to optimize travel cost searching with interactive UI.",
    image: "/images/projects/Routewise.png",
    previewUrl: "/projects/3",
    gitUrl:
      "https://drive.google.com/drive/folders/1oqWOb_qUNG-52GgqxUr-WkQlMxTF0Cnu?usp=sharing",
    tag: ["All", "Mobile"],
  },
  {
    id: 4,
    title:
      "Portofolio Aplikasi Operasional untuk Manajemen Catering Brilla Futura",
    description: "A management application for catering operations.",
    image: "/images/projects/lite.png",
    previewUrl: "/projects/4",
    gitUrl: " https://github.com/heyitseufra/BrillaApp",
    tag: ["All", "Mobile"],
  },
  {
    id: 5,
    title:
      "Portofolio UI/UX Design Tiny Treasure: Aplikasi Pengembangan Literasi Keuangan Anak-Anak",
    description:
      "A UI/UX design project focusing on financial literacy for kids.",
    image: "/images/projects/tiny.png",
    previewUrl: "/projects/5",
    gitUrl:
      "https://drive.google.com/file/d/1uVRoQpGwxXkn17XhVOLUQgMI7IJd6KBQ/view?usp=sharing ",
    tag: ["All", "UI/UX Design"],
  },
  {
    id: 6,
    title: "Portofolio Portuguese Student Performance Report",
    description: "A data analysis project on Portuguese student performance.",
    image: "/images/projects/portuguese.png",
    previewUrl: "/projects/6",
    gitUrl:
      "https://drive.google.com/drive/folders/1EGkNoq2qHr0X9_hNSBpozVRADcSQCfb5?usp=sharing",
    tag: ["All", "Data"],
  },
  {
    id: 7,
    title:
      "Portofolio UI/UX Design Blossom: Aplikasi Pemantau Kesehatan Fisik dan Mental Ibu",
    description: "A health tracking app for mothers and babies.",
    image: "/images/projects/blossom.png",
    previewUrl: "/projects/7",
    gitUrl:
      "https://drive.google.com/file/d/1ZUsseE-4GJnei-1bn4rUuHlggogwfxNy/view?usp=sharing",
    tag: ["All", "UI/UX Design"],
  },
  {
    id: 8,
    title:
      "Portofolio Implementasi Backpropagation untuk Klasifikasi Gambar Pose Yoga",
    description: "An AI project classifying yoga poses using backpropagation.",
    image: "/images/projects/yoga.png",
    previewUrl: "/projects/8",
    gitUrl:
      "https://drive.google.com/file/d/1gaNLm8xbrCNeCXfzzD4dtuIfjIjDC_TP/view?usp=sharing",
    tag: ["All", "Data"],
  },
  {
    id: 9,
    title:
      "Portofolio Brawithu: Aplikasi Pencegahan dan Penanganan Pelecehan Seksual di Universitas Brawijaya",
    description: "A mobile app to prevent and handle sexual harassment cases.",
    image: "/images/projects/braw.png",
    previewUrl: "/projects/9",
    gitUrl:
      "https://drive.google.com/file/d/1-iIaLdkMmPG5-Xv-DnLa9tzW23uNAGZ0/view?usp=sharing",
    tag: ["All", "Mobile", "UI/UX Design"],
  },
  {
    id: 10,
    title:
      "Performance-Driven SEO & Sales Insights Dashboard for Strategic Campaigns at The Bali Bible",
    description:
      "An end-to-end analytics dashboard merging SEO, sales, and customer behavior to drive data-informed marketing strategies.",
    image: "/images/projects/travlr.jpg",
    previewUrl: "/projects/10",
    gitUrl:
      "https://drive.google.com/file/d/1qyfbMYIgBUdduCw2s2Nzxr7cHky8Stjg/view?usp=sharing",
    tag: ["All", "Data"],
  },
  {
    id: 11,
    title:
      "2026 Joint Business Plan: Strategic Partnership Program for Seller Growth at TikTok Shop | Tokopedia",
    description:
      "End-to-end strategic initiative driving seller partnerships, performance tracking, and cross-functional collaboration for e-commerce growth.",
    image: "/images/projects/tiktok.png",
    previewUrl: "/projects/11",
    gitUrl: "",
    tag: ["All", "Data"],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => setTag(newTag);

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag),
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Data"
          isSelected={tag === "Data"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="UI/UX Design"
          isSelected={tag === "UI/UX Design"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
