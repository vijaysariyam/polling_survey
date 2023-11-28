import Iconify from "../../../components/Iconify";

const navConfig = [
  {
    title: "Opinion Dashboard",
    path: "/dashboard",
    icon: <Iconify icon="ic:round-dashboard" width="24px" height="24px" />,
  },
  {
    title: "Voting Poll Dashboard",
    path: "/voting-poll-dashboard",
    icon: <Iconify icon="ic:round-dashboard" width="24px" height="24px" />,
  },

  // Option Survey with Sub Menu
  {
    title: "Opinion Survey ",
    path: "/opinionsurvey",
    icon: <Iconify icon="mdi:report-box-outline" width="24px" height="24px" />,
    children: [
      {
        title: "Opinion Survey",
        path: "/opinionsurvey/survey",
        icon: <Iconify icon="ic:round-person" width="24px" height="24px" />,
      },
      {
        title: "Opinion Results",
        path: "/opinionsurvey/results",
        icon: <Iconify icon="ic:round-person" width="24px" height="24px" />,
      },
      {
        title: "Opinion Reports",
        path: "/opinionsurvey/reports",
      },
    ],
  },

  // Voting Poll Survey with Sub Menu
  {
    title: "Voting Poll Survey ",
    path: "/voting-poll-survey",
    icon: <Iconify icon="mdi:vote" width="24px" height="24px" />,
    children: [
      {
        title: "Voting Poll Survey",
        path: "/voting-poll-survey/survey",
        icon: <Iconify icon="ic:round-person" width="24px" height="24px" />,
      },
      {
        title: "Voting Poll Results",
        path: "/voting-poll-survey/results",
        icon: <Iconify icon="ic:round-person" width="24px" height="24px" />,
      },
      {
        title: "Voting Poll Reports",
        path: "/voting-poll-survey/reports",
      },
      // {
      //   title: "Voting polling reports",
      //   path: "voting-polling-reports",
      // },
      {
        title: "Report by Survey and Voting Reason",
        path: "/voting-poll-survey/report-by-survey-and-voting-reason",
      },
      // {
      //   title: "Voting Poll Results",
      //   path: "voting-poll-results",
      // },
      // {
      //   title: "Results by District",
      //   path: "polling-results-by-state",
      // },
    ],
  },

  // {
  //   title: "Voters",
  //   path: "/voters",
  //   icon: (
  //     <Iconify icon="fluent:person-edit-20-filled" width="24px" height="24px" />
  //   ),
  // },


  // User Management with Sub Menu
  {
    title: "User Management",
    path: "/user-management",
    icon: <Iconify icon="ic:baseline-people" width="24px" height="24px" />,
    children: [
      {
        title: "Add User",
        path: "/user-management/user-registration",
      },
      {
        title: "View User",
        path: "/user-management/view-user",
      },
    ],
  },


  // Voter Management with Sub Menu
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
        title: "States",
        path: "/states",
        icon: <Iconify icon="bi:building" width="24px" height="24px" />,
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
    title: "Logout",
    path: "/login",
    icon: <Iconify icon="ic:round-logout" width="24px" height="24px" />,
  },
];

export default navConfig;
