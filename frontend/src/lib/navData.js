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
        text: "Unit Conversions",
        link: "UnitConversions"
    },
    {
        id: 2,
        icon: <CalculateIcon/>,
        text: "Algebra",
        link: "Algebra"
    },
    {
        id: 2,
        icon: <CalculateIcon/>,
        text: "Pre-Calculus",
        link: "Topic1"
    },
    {
        id: 3,
        icon: <InfoIcon/>,
        text: "About Us",
        link: "About"
    },
    {
        id: 4,
        icon: <LogoutIcon/>,
        text: "Logout",
        link: "logout"
    }
]