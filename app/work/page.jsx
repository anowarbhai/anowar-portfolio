"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'Project 01',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem libero suscipit, accusantium dolore, delectus eum autem temporibus consequatur sed non aperiam distinctio vitae, deleniti possimus.',
    stack: [{name:'Html5'}, {name:'CSS3'}, {name: 'javascript'}],
    image: '/assets/work/thumb1.png',
    live: '/',
    github: '/'
  },
  {
    num: '02',
    category: 'backend',
    title: 'Project 02',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem libero suscipit, accusantium dolore, delectus eum autem temporibus consequatur sed non aperiam distinctio vitae, deleniti possimus.',
    stack: [{name:'WordPress'}, {name:'PHP'}, {name: 'Mysql'}],
    image: '/assets/work/thumb2.png',
    live: '/',
    github: '/'
  },
  {
    num: '03',
    category: 'Woocommerce',
    title: 'Project 03',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem libero suscipit, accusantium dolore, delectus eum autem temporibus consequatur sed non aperiam distinctio vitae, deleniti possimus.',
    stack: [{name:'Woocommerce'}, {name:'Woocommerce'}, {name: 'javascript'}],
    image: '/assets/work/thumb3.png',
    live: '/',
    github: '/'
  },
]

export default function Work() {
  const [project, setProject] = useState(projects[0]);
  const handelSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex])
  }
  return (
    <motion.div 
        initial = {{opacity: 0}}
        animate = {{
            opacity: 1,
            transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
        }}  className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
        >
          <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row xl:gap-[30px]">
              <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                <div className="flex flex-col gap-[25px] h-[50%]">
                  <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                    {project.num}
                  </div>
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} Project</h2>
                  <p className="text-white/60">{project.description}</p>
                  <ul className="flex gap-4">
                    {project.stack.map((item, index) =>{
                      return <li key={index} className="text-xl text-accent">{item.name}
                      {index !== project.stack.length - 1 && ","}</li>
                    } )}
                  </ul>
                  <div className="border border-white/20"></div>
                  <div className="flex justify-start gap-4 items-center">
                    <Link href={project.live}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[50px] h-[50px] bg-white/5 rounded-full flex justify-center items-center group">
                            <BsArrowUpRight className="text-2xl text-white group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Live Project</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                    <Link href={project.github}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[50px] h-[50px] bg-white/5 rounded-full flex justify-center items-center group">
                            <BsGithub className="text-2xl text-white group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Github Reposetory</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-[50%]">
                <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handelSlideChange}>
                  {projects.map((item,index) => {
                    return <SwiperSlide key={index} className="w-full">
                      <div className="h-[460px] group flex justify-center relative items-center bg-pink-50/20">
                        <div className="absolute w-full h-full bg-black/10 top-0 bottom-0 z-10"></div>
                        <div className="relation w-full h-full">
                          <Image src={project.image} alt="" className="object-cover" fill />
                        </div>
                      </div>
                    </SwiperSlide>
                  })}
                  <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_20px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-{22px} w-[44px] h-[44px] flex justify-center items-center transition-all duration-500" />
                </Swiper>
              </div>
            </div>
          </div>
      </motion.div>
  )
}
