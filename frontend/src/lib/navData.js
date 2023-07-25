import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
//import TopicIcon from '@mui/icons-material/Topic';
import LogoutIcon from '@mui/icons-material/Logout';
import CalculateIcon from '@mui/icons-material/Calculate';

export const navData = [
    {
        id: 0,
        icon: <DashboardIcon/>,
        text: "Dashboard",
        link: "/Dashboard"
    },
    {
        id: 1,
        icon: <CalculateIcon/>,
        text: "Topic1",
        link: "Topic1"
    },
    {
        id: 2,
        icon: <InfoIcon/>,
        text: "About Us",
        link: "About"
    },
    {
        id: 3,
        icon: <LogoutIcon/>,
        text: "Logout",
        link: "logout"
    }
]