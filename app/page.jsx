"use client"; // Ensure this file is treated as a Client Component

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Socials from "@/components/Socials";
import Photo from "@/components/ui/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  // download cv function
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "assets/resume/cv.pdf"; // URL of the CV
    link.download = "Jehan-Silva-CV.pdf"; // desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I`m <br /> <span className="text-accent">Jehan Silva</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am a dedicated software engineering undergraduate with a passion
              for technology and a strong desire to learn. As a quick learner, I
              am constantly seeking opportunities to expand my knowledge and
              skills in software development. My expertise lies in crafting
              elegant digital experiences, and I am proficient in various
              programming languages and technologies. I thrive in dynamic
              environments where I can apply my technical abilities to solve
              complex problems and create innovative solutions.
            </p>
            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handleDownload}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex 
                  justify-center items-center text-accent text-base hover:bg-accent 
                  hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      {/* stats */}
      <Stats />
    </section>
  );
};

export default Home;
