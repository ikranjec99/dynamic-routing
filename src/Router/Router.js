import GridIcon from '@rsuite/icons/Grid';
import ReviewIcon from '@rsuite/icons/Review';
import GlobalIcon from '@rsuite/icons/Global';
import FolderFillIcon from '@rsuite/icons/FolderFill';
import { Home } from '../Pages/Home/Home';
import { Contact } from '../Pages/Contact/Contact';
import { PartnerProgram } from '../Pages/PartnerProgram/PartnerProgram';

export const Router = [
    {
        title: "Home",
        icon: <FolderFillIcon />,
        route: "",
        component: <Home />
    },
    {
        title: "About us",
        icon: <GridIcon />,
        children: [
            {
                title: "Contact us",
                icon: <ReviewIcon />,
                route: "/contact-us",
                component: <Contact />
            },
            {
                title: "Become a partner",
                icon: <GlobalIcon />,
                route: "/partner-program",
                component: <PartnerProgram />
            }
        ]
    }
]