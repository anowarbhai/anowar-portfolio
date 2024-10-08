"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: '(+88) 0172 931 2186'
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: 'm.anowarbhai@gmail.com'
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: 'Gobindaganj, Gaibandha, Dhaka, Bangladesh'
  },
]

export default function Contact() {
  return (
    <motion.section 
        initial = {{opacity: 0}}
        animate = {{
            opacity: 1,
            transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
        }}  className="py-6"
        >
          <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-[30px]">
              <div className="xl:w-[54%] order-2 xl:order-none">
                <form className="flex flex-col bg-[#27272c] gap-6 p-10 rounded-xl">
                  <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
                  <p className="text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quasi perferendis.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input type="firstname" placeholder="Firstname" />
                    <Input type="lastname" placeholder="Lastname" />
                    <Input type="email" placeholder="Email Address" />
                    <Input type="phone" placeholder="Phone number" />
                  </div>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a Servce" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Select a Service</SelectLabel>
                        <SelectItem value="Web Design">Web Design</SelectItem>
                        <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                        <SelectItem value="Logo Design">Logo Design</SelectItem>
                        <SelectItem value="Web Development">Web Development</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Textarea className="h-[200px]" placeholder="Type your message here." />
                  <Button size="md" className="max-w-40">Send Message</Button>
                </form>
              </div>
              <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                <ul className="flex flex-col gap-10">
                  {info.map((item, index) => {
                    return <li key={index} className="flex items-center gap-6">
                      <div className="w-[50px] h-[52px] xl:w-[70px] xl:h-[72px] bg-[#27272c] text-accent rounded-xl flex justify-center items-center">
                        <div className="text-[28px]">
                        {item.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-[22]">{item.description}</h3>
                      </div>
                    </li>
                  })}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>
  )
}
