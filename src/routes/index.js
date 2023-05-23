import { LandingPage, Contact, AboutUs } from '../pages';
import { LandingFooter } from '../pages/LandingPage';
import Login from '../pages/Login/Login';

const routes = [
  {
    title: 'eRMG',
    path: '/login',
    component: Login,
    footer: '',
    appBar: '',
  },
  // {
  //   title: "Register",
  //   path: "/register",
  //   component: Login,
  //   footer: "",
  //   appBar: "",
  // },
  {
    title:
      'eRMG | Helping the World Source Better, Sell Faster and Brand Smarter',
    path: '/',
    component: LandingPage,
    footer: LandingFooter,
  },
  {
    title: 'eRMG | Contact',
    path: '/contact',
    component: Contact,
    footer: LandingFooter,
    // appBar: CustomerNavBar,
  },

  {
    title: 'eRMG | About Us',
    path: '/about-us',
    component: AboutUs,
    footer: LandingFooter,
  },
];

export { routes };
