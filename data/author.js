// Backend Expertise
import NodeIcon from "assets/devicon/node.svg?component";
import LaravelIcon from "assets/devicon/laravel.svg?component";
// Frontend Expertise
import VueIcon from "assets/devicon/vuejs.svg?component";
import NuxtIcon from "assets/devicon/nuxt.svg?component";
import BootstrapIcon from "assets/devicon/bootstrap.svg?component";
import html from "assets/devicon/html.svg?component";
import css from "assets/devicon/css.svg?component";
import tss from "assets/devicon/tss.svg"
import JavascriptIcon from "assets/devicon/javascript.svg?component";
import TailwindCssIcon from "assets/devicon/tailwindcss.svg?component";
// Timeline
import Home from "assets/icons/home.svg?component";
import Academy from "assets/icons/academy.svg?component";

const author = {
  author_image: "/author.png",
  name: "Typedef-Jia",
  position: "全栈开发者",
  email: "jiaiy311@163.com",
  location: "开封",
  github: "Typedef-Jia",
  socials: {
    twitter: "MDRT83716131",
    stackoverflow: "#",
    youtube: "#",
    linkedin: "#",
    facebook: "#",
  },
  expertises: {
    "Frontend": [

      {
        name: "Javascript",
        icon: JavascriptIcon,
        description: "",
      },

      {
        name: "Tailwind",
        icon: TailwindCssIcon,
        description: "",
      },
      {
        name: "Bootstrap",
        icon: BootstrapIcon,
        description: "",
      },
      {
        name: "VueJS",
        icon: VueIcon,
        description: "",
      },
      {
        name: "Nuxt 3",
        icon: NuxtIcon,
        description: "",
      }
    ],
    "Backend": [
      {
        name: "Laravel",
        icon: LaravelIcon,
        description: "",
      },
      {
        name: "NodeJs",
        icon: NodeIcon,
        description: "",
      }
    ]
  },
  timeline: [

    {
      icon: Academy,
      currently: true,
      title: "2023年",
      subtitle: "2023 - 2024",
      description: "在大学，学习软件技术相关技术。",
    },
    {
      icon: Home,
      title: "2022年 开始学习编程  ",
      subtitle: "学习的第一个语言是",
      description: "C 语言",
    }
  ],
};

export default author;
