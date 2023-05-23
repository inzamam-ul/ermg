// routes
import Router from './routes';
import { HelmetProvider } from 'react-helmet-async';
import 'simplebar/src/simplebar.css';

// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';
import { useAuth } from '../../lib/auth';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import Preloader from '../../Preloader/Preloader';

// ----------------------------------------------------------------------

export default function Admin() {
  const { user, setUser } = useAuth();
  const [preloader, setPreloader] = useState(true);
  const history = useHistory();
  useEffect(() => {
    setUser({ ...user, role: 'none' });

    const url = `http://localhost:4000/fetchUser/${user.email}`;
    setPreloader(true);
    axios.get(url).then(res => {
      if (res.data) {
        setUser(res.data);
      } else {
        history.push('/registration');
      }
    });
    setPreloader(false);
  }, []);
  return (
    <HelmetProvider>
      <ThemeConfig>
        <ScrollToTop />
        <GlobalStyles />
        <BaseOptionChartStyle />
        {preloader ? <Preloader /> : <Router />}
      </ThemeConfig>
    </HelmetProvider>
  );
}
