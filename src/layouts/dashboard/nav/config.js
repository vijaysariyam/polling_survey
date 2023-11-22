import Iconify from "../../../components/Iconify";

const navConfig = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <Iconify icon="ic:round-dashboard" width="24px" height="24px" />,
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
];

export default navConfig;
