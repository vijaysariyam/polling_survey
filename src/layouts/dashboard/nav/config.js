import Iconify from "../../../components/Iconify";

const navConfig = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <Iconify icon="ic:round-dashboard" width="24px" height="24px" />,
  },
  {
    title: "Opinion Poll Survey ",
    path: "/reports",
    icon: <Iconify icon="mdi:report-box-outline" width="24px" height="24px" />,
    children: [
      {
        title: "Add Poll Survey",
        path: "/add-poll-survey",
      },
      {
        title: "Opinion Poll Survey",
        path: "opinion-poll-survey",
        icon: <Iconify icon="ic:round-person" width="24px" height="24px" />,
      },
      {
        title: "Opinion Poll Survey Results",
        path: "/opinion-poll-survey-results",
        icon: <Iconify icon="ic:round-person" width="24px" height="24px" />,
      },
      {
        title: "opinion survey reports",
        path: "/reports/survey",
      },
    ],
  },
  {
    title: "Voting Poll Survey ",
    path: "/reports",
    icon: <Iconify icon="mdi:vote" width="24px" height="24px" />,
    children: [
      {
        title: "Voting Poll Survey",
        path: "opinion-poll-survey",
        icon: <Iconify icon="ic:round-person" width="24px" height="24px" />,
      },
      {
        title: "Voting Poll Survey Results",
        path: "/opinion-poll-survey-results",
        icon: <Iconify icon="ic:round-person" width="24px" height="24px" />,
      },
      {
        title: "Voting survey reports",
        path: "/reports/survey",
      },
    ],
  },

  // {
  //   title: "Voters",
  //   path: "/voters",
  //   icon: (
  //     <Iconify icon="fluent:person-edit-20-filled" width="24px" height="24px" />
  //   ),
  // },
  {
    title: "User Management",
    path: "/reports",
    icon: <Iconify icon="ic:baseline-people" width="24px" height="24px" />,
    children: [
      {
        title: "Add User",
        path: "user-registration",
      },
      {
        title: "View User",
        path: "/view-user",
      },
    ],
  },

  {
    title: "Voter Management",
    path: "/reports",
    icon: <Iconify icon="formkit:people" width="24px" height="24px" />,
    children: [
      {
        title: "Add Voter",
        path: "/voter-registration",
      },
      {
        title: "View Voter",
        path: "/view-voter",
      },
    ],
  },
  {
    title: "Ticket Management",
    path: "/reports",
    icon: <Iconify icon="ion:ticket" width="24px" height="24px" />,
    children: [
      {
        title: "View Tickets",
        path: "/tickets",
      },

      {
        title: "No Vote Reason Ticket",
        path: "/add-ticket1",
        icon: (
          <Iconify icon="majesticons:tickets-line" width="24px" height="24px" />
        ),
      },
      {
        title: "Absent Ticket",
        path: "/absent-ticket",
        icon: (
          <Iconify icon="majesticons:tickets-line" width="24px" height="24px" />
        ),
      },
    ],
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
    title: "Configuration",
    path: "/reports",
    icon: <Iconify icon="ri:mind-map" width="24px" height="24px" />,
    children: [
      {
        title: "Voter and Volunteer Mapping",
        path: "/voter-and-volunteer-mapping",
      },
      {
        title: "User Mapping",
        path: "/user-mapping",
      },
    ],
  },
  {
    title: "Administration",
    path: "/admin",
    icon: <Iconify icon="eos-icons:admin" width="24px" height="24px" />,
    children: [
      {
        title: "Designations",
        path: "/designations",
      },
      {
        title: "Political Parties",
        path: "/parties",
      },
      {
        title: "Districts",
        path: "/districts",
      },
      {
        title: "Constituencies",
        path: "/constituencies",
      },

      {
        title: "Mandals",
        path: "/mandals",
      },
      {
        title: "Divisions",
        path: "/divisions",
      },
      {
        title: "Sachivalayam",
        path: "/sachivalayam",
      },
      {
        title: "Parts",
        path: "/parts",
      },
      {
        title: "Villages",
        path: "/villages",
      },
    ],
  },
  
  {
    title: "States",
    path: "/states",
    icon: <Iconify icon="bi:building" width="24px" height="24px" />,
  },

  {
    title: "Logout",
    path: "/logout",
    icon: <Iconify icon="ic:round-logout" width="24px" height="24px" />,
  },
];

export default navConfig;
