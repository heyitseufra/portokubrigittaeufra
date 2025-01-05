"use client";
import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Feel free to reach out to me via the contact details below. I&apos;m
          always happy to connect!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/heyitseufra">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/brigitta-eufra">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <h6 className="text-lg font-semibold text-white mb-4">
          Contact Information
        </h6>
        <ul className="text-[#ADB7BE] space-y-2">
          <li>
            <strong>Email:</strong> brigittaeufra66@gmail.com
          </li>
          <li>
            <strong>Phone:</strong> +62 858 7126 3547
          </li>
          <li>
            <strong>Address:</strong> Jl. Puncak Cengkeh No.10A, Malang,
            Indonesia
          </li>
        </ul>
      </div>
    </section>
  );
};

export default EmailSection;
