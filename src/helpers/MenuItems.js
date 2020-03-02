import DashboardIcon from "@material-ui/icons/Dashboard"
import PeopleIcon from "@material-ui/icons/People"
import CodeIcon from "@material-ui/icons/Code"

export const getMenus = [
  {
    path: "/",
    icon: DashboardIcon,
    label: "Project Co-ordinator",
  },
  {
    path: "/abc",
    icon: PeopleIcon,
    label: "Content Creators",
  },
  {
    path: "/abcd",
    icon: CodeIcon,
    label: "Web Metadata",
    children: [
      {
        path: "/abcdef",
        label: "Slide Show",
      },
    ],
  },
]
