import Iconify from "../../../components/Iconify";

const navConfig = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <Iconify icon="ic:round-dashboard" width="24px" height="24px" />,
  },
  {
    title: "Voters",
    path: "/voters",
    icon: <Iconify icon="fluent:person-edit-20-filled" width="24px" height="24px" />,
  },
  {
    title: "Tickets",
    path: "/tickets",
    icon: <Iconify icon="ion:ticket" width="24px" height="24px" />,
  },
  {
    title: "Admin",
    path: "/admin",
    icon: <Iconify icon="ri:admin-fill" width="24px" height="24px" />,
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <Iconify icon="mdi:report-box-outline" width="24px" height="24px" />,
    children: [
      {
        title: "survey reports",
        path: "/reports/survey",
      },
    ],
  },
  {
    title: "Logout",
    path: "/logout",
    icon: <Iconify icon="ic:round-logout" width="24px" height="24px" />,
  },
];

export default navConfig;
