import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const socials = [
  {icon: <FaGithub /> , path: ""},
  {icon: <FaLinkedinIn />, path: ""},
  {icon: <FaYoutube />, path: ""},
  {icon: <FaTwitter />, path: ""},
];

export default function Social({containerStyles, IconStyles}) {
  return (
      <div className={containerStyles}>
        {socials.map((item, index) => {
          return (
            <Link key={index} href={item.path} className={IconStyles}>
            {item.icon}
            </Link>
          );
        })}
      </div>
  )
}
