import {HomePage} from "../pages/home";
import {AboutPage} from "../pages/About";
import {ContactsPage} from "../pages/Contacts";
import {AccountPage} from "../pages/Account";
import {NotAllowedPage} from "../pages/Restricted";
import {CatalogPage} from "../pages/catalog";

export const appRoutes = [
    {
        path: '/',
        exact: true,
        component: HomePage
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: '/catalog',
        component: CatalogPage
    },
    {
        path: '/contacts',
        component: ContactsPage
    },
    {
        path: '/account',
        component: AccountPage,
        isPrivate: true
    },
    {
        pathname: '/restricted',
        component: NotAllowedPage
    }

];