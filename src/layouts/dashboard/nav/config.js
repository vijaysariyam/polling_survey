import Iconify from "../../../components/Iconify";

const navConfig = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <Iconify icon="ic:round-dashboard" width="24px" height="24px" />,
  },
  // {
  //   title: "Voters",
  //   path: "/voters",
  //   icon: (
  //     <Iconify icon="fluent:person-edit-20-filled" width="24px" height="24px" />
  //   ),
  // },
  {
    title: "Add User",
    path: "/user-registration",
    icon: <Iconify icon="ic:round-person" width="24px" height="24px" />,
  },
  {
    title: "View User",
    path: "/view-user",
    icon: <Iconify icon="ic:baseline-people" width="24px" height="24px" />,
  },
  {
    title: "Add Voter",
    path: "/voter-registration",
    icon: (
      <Iconify icon="icon-park-outline:people" width="24px" height="24px" />
    ),
  },
  {
    title: "View Voter",
    path: "/vew-voter",
    icon: <Iconify icon="formkit:people" width="24px" height="24px" />,
  },

  {
    title: "Add Ticket",
    path: "/add-ticket",
    icon: (
      <Iconify icon="majesticons:tickets-line" width="24px" height="24px" />
    ),
  },
  {
    title: "View Tickets",
    path: "/tickets",
    icon: <Iconify icon="ion:ticket" width="24px" height="24px" />,
  },
  // {
  //   title: "Admin",
  //   path: "/admin",
  //   icon: <Iconify icon="ri:admin-fill" width="24px" height="24px" />,
  // },
  // {
  //   title: "Reports",
  //   path: "/reports",
  //   icon: <Iconify icon="mdi:report-box-outline" width="24px" height="24px" />,
  //   children: [
  //     {
  //       title: "survey reports",
  //       path: "/reports/survey",
  //     },
  //   ],
  // },

  {
    title: "Add Poll Survey",
    path: "/add-poll-survey",
    icon: <Iconify icon="ph:note-duotone" width="24px" height="24px" />,
  },
  {
    title: "Voter and Volunteer Mapping",
    path: "/voter-and-volunteer-mapping",
    icon: <Iconify icon="ri:mind-map" width="24px" height="24px" />,
  },
  {
    title: "Sachivalayam",
    path: "/sachivalayam",
    icon: <Iconify icon="bi:building" width="24px" height="24px" />,
  },

  {
    title: "Logout",
    path: "/logout",
    icon: <Iconify icon="ic:round-logout" width="24px" height="24px" />,
  },
];

export default navConfig;
