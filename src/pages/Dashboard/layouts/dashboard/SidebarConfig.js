import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import fileFill from '@iconify/icons-eva/file-fill';
import saveFill from '@iconify/icons-eva/save-fill';
import messageSquareFill from '@iconify/icons-eva/message-square-fill';
import layersFill from '@iconify/icons-eva/layers-fill';
import outlineRequestPage from '@iconify/icons-ic/outline-request-page';
import flipFill from '@iconify/icons-eva/flip-fill';
// ----------------------------------------------------------------------

const getIcon = name => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/admin/dashboard',
    icon: getIcon(pieChart2Fill),
  },
  {
    title: 'Documents',
    path: '/admin/documents',
    icon: getIcon(fileFill),
  },
  {
    title: 'Saved Products',
    path: '/admin/products',
    icon: getIcon(shoppingBagFill),
  },
  {
    title: 'projects',
    path: '/admin/projects',
    icon: getIcon(saveFill),
  },
  {title: 'Saved RFQs',
  path: '/admin/MyRFQ',
  icon: getIcon(flipFill),
  },
  {
    title: 'buyers',
    path: '/admin/buyers',
    icon: getIcon(peopleFill),
  },
  {
    title: 'Messages',
    path: '/admin/message',
    icon: getIcon(messageSquareFill),
  },
  {
    title: 'parts library',
    path: '/admin/parts',
    icon: getIcon(layersFill),
  },
  {
    title: 'Quotation Requests',
    path: '/admin/quotation-Requests',
    icon: getIcon(outlineRequestPage),
  },
 
  // {
  //   title: 'product',
  //   path: '/admin/products',
  //   icon: getIcon(shoppingBagFill),
  // },
  {
    title: 'blog',
    path: '/admin/blog',
    icon: getIcon(fileTextFill),
  },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: getIcon(lockFill),
  // },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: getIcon(personAddFill),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: getIcon(alertTriangleFill),
  // },
];

export default sidebarConfig;
