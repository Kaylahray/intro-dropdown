import calender from "../assets/images/icon-calendar.svg";
import planning from "../assets/images/icon-planning.svg";
import reminder from "../assets/images/icon-reminders.svg";
import todo from "../assets/images/icon-todo.svg";

const Links = [
  {
    name: "Features",
    submenu: true,
    sublinks: [
      {
        sublink: [
          { name: "Todo List", link: "/", icon: todo },
          { name: "Calender", link: "/", icon: calender },
          { name: "Reminders", link: "/", icon: reminder },
          { name: "Planning", link: "/", icon: planning },
        ],
      },
    ],
  },
  {
    name: "Company",
    submenu: true,
    sublinks: [
      {
        sublink: [
          { name: "History", link: "/" },
          { name: "Our Team", link: "/" },
          { name: "Blog", link: "/" },
        ],
      },
    ],
  },
  {
    name: "Careers",
  },
  {
    name: "About",
  },
];

export default Links;
