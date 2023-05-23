// layouts
import { styled } from '@mui/material/styles';
//
import { Redirect, Route, Switch, useRouteMatch } from 'react-router';
import { createContext, useState } from 'react';
import DashboardNavbar from './layouts/dashboard/DashboardNavbar';
import DashboardSidebar from './layouts/dashboard/DashboardSidebar';
import DashboardApp from './pages/DashboardApp';
import NotFound from './pages/Page404';
import Products from './pages/Products';
import Parts from './views/Parts/Parts';
import Documents from './views/Documents/Documents';
import AddPartsMaterial from './views/Parts/Component/AddPartsMaterial/AddPartsMaterial';
import PartDetails from './views/Parts/PartDetails';
import Projects from './views/Projects/Projects';
import MessagePage from './views/Message/MessagePage';
import RFQ from './views/RFQ/RFQ';
import Suplier from './views/Suppliers/Suplier';
import Buyers from './views/Buyers/Buyers';
import AddMaterial from './views/DigitalStudio/Addmetarial/AddMaterial';
import AddComponent from './views/DigitalStudio/AddComponent/AddComponent';
import AddOtherCard from './views/DigitalStudio/AddOtherCard/AddOtherCard';
import DigitalStudio from './views/DigitalStudio/DigitalStudio';
import ProductDetails from './views/Products/Component/ProductDetails';
import Product from './views/Products/Product';
import UserProfile from './views/UserProfile/UserProfile';
import EditProfile from './views/UserProfile/EditProfile';
import QuotationRequest from './views/QuotationRequests/QuotationRequest';
import QuotationRequestDetails from './views/QuotationRequests/QuotationRequestDetails';
import SavedRfq from './views/RFQ/SavedRFQ/SavedRfq';
import RfqDetails from './views/RFQ/SavedRFQ/RfqDetails';
import EditRFQ from './views/RFQ/SavedRFQ/EditRFQ'
// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 70;

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

// ----------------------------------------------------------------------

export const MaterialContext = createContext();
export const ComponentContext = createContext();
export const OtherCardContext = createContext();

export default function Router() {
  const [open, setOpen] = useState(false);
  const { path } = useRouteMatch();

  const [material, setMaterial] = useState([]);
  const [component, setComponent] = useState([]);
  const [otherCard, setOtherCard] = useState([]);

  return (
    <MaterialContext.Provider value={[material, setMaterial]}>
      <ComponentContext.Provider value={[component, setComponent]}>
        <OtherCardContext.Provider value={[otherCard, setOtherCard]}>
          <RootStyle className="admin">
            <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
            <DashboardSidebar
              isOpenSidebar={open}
              onCloseSidebar={() => setOpen(false)}
            />
            <MainStyle>
              <Switch>
                <Route exact path={path + '/dashboard'}>
                  <DashboardApp />
                </Route>
                <Route path={path + '/user'}>
                  <UserProfile></UserProfile>
                </Route>
                <Route path={path + '/profile'}>
                  <UserProfile></UserProfile>
                </Route>
                <Route path={`${path}/edit-profile`}>
              <EditProfile/>
            </Route>
                <Route path={`${path}/documents`}>
                  <Documents />
                </Route>
                <Route path={`${path}/parts`}>
                  <Parts />
                </Route>
                <Route path={`${path}/addPartsMaterial`}>
                  <AddPartsMaterial />
                </Route>
                <Route path={`${path}/partsDetails/:id`}>
                  <PartDetails />
                </Route>
                <Route path={`${path}/projects`}>
                  <Projects />
                </Route>
                <Route path={`${path}/message`}>
                  <MessagePage />
                </Route>
                <Route path={`${path}/RFQ`}>
                  <RFQ />
                </Route>
                <Route path={`${path}/quotation-Requests`}>
              <QuotationRequest></QuotationRequest>
            </Route>
            <Route path={`${path}/MyRFQ`}>
              <SavedRfq></SavedRfq>
            </Route>
            <Route path={`${path}/RfqDetails/:id`}>
              <RfqDetails></RfqDetails>
            </Route>
            <Route path={`${path}/editRFQ/:id`}>
             <EditRFQ></EditRFQ>
            </Route>
            <Route path={`${path}/quotation-request-details/:id`}>
              <QuotationRequestDetails/>
            </Route>
                <Route path={`${path}/suppliers`}>
                  <Suplier />
                </Route>
                <Route path={`${path}/buyers`}>
                  <Buyers />
                </Route>
                <Route path={`${path}/digital-studio/addMaterial`}>
                  <AddMaterial />
                </Route>
                <Route path={`${path}/digital-studio/addDimension`}>
                  <h1>Under Maintenance</h1>
                </Route>
                <Route path={`${path}/digital-studio/addComponent`}>
                  <AddComponent />
                </Route>
                <Route path={`${path}/digital-studio/addOtherCard`}>
                  <AddOtherCard />
                </Route>
                <Route path={`${path}/digital-studio`}>
                  <DigitalStudio />
                </Route>
                <Route path={`${path}/products/:topicId`}>
                  <ProductDetails />
                </Route>{' '}
                <Route path={`${path}/products`}>
                  <Products />
                </Route>
                <Route exact path={path + '/parts'}>
                  <Parts />
                </Route>
                <Route exact path={path + '/*'}>
                  <NotFound />
                </Route>
                <Redirect from="/admin" to="/admin/dashboard" />
              </Switch>
            </MainStyle>
          </RootStyle>
        </OtherCardContext.Provider>
      </ComponentContext.Provider>
    </MaterialContext.Provider>
  );
}
