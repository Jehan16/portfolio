import Link from "next/link";

import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Jehan16" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/jehan-silva-aa9a141ba",
  },
  {
    icon: <FaYoutube />,
    path: "https://www.youtube.com/channel/UCuMl_JaXgwLiI_25kRkwDrQ",
  },
  { icon: <FaXTwitter />, path: "https://x.com/Jehan28298804" },
  //   { icon: <FaTwitter />, path: "" }, old twitter logo
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
