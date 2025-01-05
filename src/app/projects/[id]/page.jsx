"use client";
import React from "react";
import { notFound } from "next/navigation";

const projectsData = [
  {
    id: 1,
    title: "PowerBI Portfolio - Java's Major City Tourism",
    description:
      "An interactive Power BI dashboard showcasing key insights into tourism data from 5 major cities in Java Island.",
    details: `
      This data visualization program was developed using Power BI to provide deep insights into the tourism industry of five major cities on Java Island. 
      Leveraging datasets sourced from Kaggle, the interactive dashboard enables users to view and customize critical information, such as the top three most popular destinations, 
      the total number of destinations per city, and destination categorization. Additionally, the dashboard includes a map displaying the geographical distribution 
      of tourist destinations, complete with latitude and longitude coordinates and city names, making it easier for users to identify trends and patterns in regional tourism.`,
    image: "/images/projects/wisata.png",
    gitUrl:
      "https://drive.google.com/file/d/11QifiAaE_ua-Xohp2gLgu4kwzFMZ6LAE/view",
  },
  {
    id: 2,
    title: "Breast Cancer Detection Data Analysis",
    description:
      "A machine learning model to analyze and predict breast cancer cases using structured datasets.",
    details: `
      This breast cancer detection analysis project utilizes Python and Google Colab to analyze datasets obtained from Kaggle. 
      By applying advanced classification methods and clustering techniques, I identified patterns and trends in the data, achieving high prediction accuracy. 
      Python&apos;s robust data processing capabilities, combined with Google Colabs computational power, ensured that my analysis was both accurate and efficient, 
      providing a strong foundation for future clinical research and scientific advancements in medical science.`,
    image: "/images/projects/PSD.png",
    gitUrl:
      "https://drive.google.com/drive/folders/1YEnpIECp-dZcivPkO3xOIFDNbvSGHIft",
  },
  {
    id: 3,
    title: "Portofolio Sistem Pencarian Biaya Perjalanan: Routwise",
    description:
      "A system to optimize travel cost searching with interactive UI.",
    details: `
      This application is designed to help users find the most cost-effective train travel routes. 
      By leveraging the A* algorithm and Python, the app efficiently identifies optimal paths and total travel costs, 
      offering reliability and speed in route searching. The development of this application promises better access 
      to train fare information, providing an efficient solution for people planning cost-effective travel.`,
    image: "/images/projects/Routewise.png",
    gitUrl:
      "https://drive.google.com/drive/folders/1iHbfbMPPAfRbx7TD62GciZNdjtEJMJEH",
  },
  {
    id: 4,
    title:
      "Portofolio Aplikasi Operasional untuk Manajemen Catering Brilla Futura",
    description: "A management application for catering operations.",
    details: `
      The "Lite Database Application" was specifically developed to support the operations of "Brilla Futura Catering," 
      a catering business established in 2019 in Malang. The app provides secure admin login features, an intuitive main menu for managing orders, 
      financial calculations, and optimized third normal form database design to ensure data integrity and efficiency. 
      With this app, "Brilla Futura Catering" enhances order management and customer relationships while addressing the evolving market demands.`,
    image: "/images/projects/lite.png",
    gitUrl: "https://github.com/heyitseufra/BrillaApp",
  },
  {
    id: 5,
    title:
      "Portofolio UI/UX Design Tiny Treasure: Aplikasi Pengembangan Literasi Keuangan Anak-Anak",
    description:
      "A UI/UX design project focusing on financial literacy for kids.",
    details: `
      This application supports the development of financial literacy among children from an early age, starting within the family environment. 
      With features tailored for children and parental guidance, the app aims to help kids make responsible financial decisions. 
      Parental involvement in the financial literacy program also has a positive impact, indirectly shaping wise financial habits in children.`,
    image: "/images/projects/tiny.png",
    gitUrl:
      "https://drive.google.com/file/d/1F1uOLa_s9yv31-A95IDOemcQo8-HWZam/view",
  },
  {
    id: 6,
    title: "Portofolio Portuguese Student Performance Report",
    description: "A data analysis project on Portuguese student performance.",
    details: `
      The analysis provides a deep understanding of students learning patterns, identifying differences between male and female students in terms of study time or learning effectiveness. 
      By segmenting students based on attributes, the study offers insights into group differences, helping tailor learning approaches. 
      Additionally, understanding leisure time activities can guide the design of appropriate learning strategies or extracurricular activities.`,
    image: "/images/projects/portuguese.png",
    gitUrl:
      "https://drive.google.com/drive/folders/1pdBDOobDvp0wzRPOB5YT6Sneshj8Ongt?usp=sharing",
  },
  {
    id: 7,
    title:
      "Portofolio UI/UX Design Blossom: Aplikasi Pemantau Kesehatan Fisik dan Mental Ibu",
    description: "A health tracking app for mothers and babies.",
    details: `
      Blossom is a pregnancy and child development monitoring app designed to help mothers maintain their physical and psychological health. 
      Unlike existing apps, Blossom emphasizes mental health and supports working mothers to keep thriving. 
      Blossom includes positive affirmation features to keep mothers happy, alongside comprehensive tools to track health and development milestones.`,
    image: "/images/projects/blossom.png",
    gitUrl:
      "https://drive.google.com/file/d/12-YhwvGTrypQh2-XlCM9uYA88De6F-WM/view?usp=sharing",
  },
  {
    id: 8,
    title:
      "Portofolio Implementasi Backpropagation untuk Klasifikasi Gambar Pose Yoga",
    description: "An AI project classifying yoga poses using backpropagation.",
    details: `
      This experiment utilized simple feedforward architectures and backpropagation to classify yoga pose images. 
      Despite challenges such as vanishing gradients and overfitting, this study highlighted the limitations of traditional neural networks 
      for image recognition tasks, proposing Convolutional Neural Networks (CNNs) as a more efficient alternative.`,
    image: "/images/projects/yoga.png",
    gitUrl:
      "https://drive.google.com/file/d/1bIFtGX5QAciOjCVUXwsmBdKa2s8TkJ39/view?usp=sharing",
  },
  {
    id: 9,
    title:
      "Portofolio Brawithu: Aplikasi Pencegahan dan Penanganan Pelecehan Seksual di Universitas Brawijaya",
    description: "A mobile app to prevent and handle sexual harassment cases.",
    details: `
       BRAwithU application is designed as a comprehensive support tool to address and prevent sexual harassment incidents within the Universitas Brawijaya community. This Android-based platform includes advanced features such as a Panic Button for immediate assistance, a Quick Reporting System to enable victims or witnesses to report incidents efficiently, and Integrated Counseling Services to provide emotional and psychological support.`,
    image: "/images/projects/braw.png",
    gitUrl:
      "https://drive.google.com/file/d/1rE6vBvRq1GhwLv66_LEE6e8xw3_QgihU/view?usp=sharing",
  },
];

export default function ProjectPage({ params }) {
  const { id } = params;
  const project = projectsData.find((p) => p.id === parseInt(id, 10));

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-gradient-to-b from-black via-purple-900 to-black min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-96 object-cover filter brightness-75 hover:brightness-100 transition duration-300"
        />
        <div className="p-6">
          <h1 className="text-4xl font-bold text-pink-500">{project.title}</h1>
          <p className="mt-4 text-gray-300 text-lg leading-relaxed">
            {project.description}
          </p>
          <p className="mt-6 text-gray-400 text-sm leading-relaxed">
            {project.details}
          </p>
          <div className="mt-6">
            <a
              href={project.gitUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white rounded-full transition duration-300 shadow-lg hover:shadow-2xl"
            >
              {project.gitUrl ? "View More" : "GitHub Unavailable"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
