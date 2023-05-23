const GLOBAL_MEDIA_QUERIES = {
  small: "(max-width: 599px)",
  medium: "(min-width: 600px) and (max-width: 1199px)",
  large: "(min-width: 1200px)",
};

const COOKIES = {
  csrftoken: "csrftoken",
};

const USER_ROLES = {
  BUYER: "buyer",
  SUPPLIER: "supplier",
};
const DRAWER_NAMES = {
  UN_AUTH_DRAWER: "unAuthDrawer",
  AUTH_DRAWER: "authDrawer",
  CART_DRAWER: "cartDrawer",
  PRODUCTS_DRAWER: "productsDrawer",
  DASHBOARD_PRODUCTS_DRAWER: "dashboardProductsDrawer",
  CUSTOMER_DRAWER: "customerDrawer",
  CALENDAR_EVENT_DRAWER: "calenderEventDrawer",
};

const TOAST_CONFIGS = {
  ERROR: {
    title: "Something went wrong",
    status: "error",
    duration: 3000,
    isClosable: true,
    position: "top-right",
  },
};

const PRODUCT_GSM_UNITS = [
  {
    title: "Gram",
    value: "gm",
  },
  {
    title: "Ounce",
    value: "oz",
  },
];

const PRODUCT_GSM_UNITS_TO_ENG = {
  oz: "Ounce",
  gm: "Gram",
};

const ORDER_STATUS_IN_COLOR = {
  Pending: "gray",
  "In Review": "purple",
  Processed: "blue",
  Completed: "green",
};

const VIEW_MODES = {
  TILE: "tile",
  LIST: "list",
};

const ALL_EVENT_TYPES = [
  "Supplier Sourcing",
  "Requirements Preparation",
  "Sample Exchange",
  "Collection Preparation",
  "Range Plan",
  "Design Process",
  "Design Selection Process",
  "Style Placement",
  "Selection Process",
  "Proto Sample",
  "Pre-Selection",
  "Style Colors",
  "Selection Preparation",
  "Pre-Negotiation",
  "Open Costing",
  "POs and PIs are exchanged",
  "Issue LC/TT/PayPal payment/etc",
  "Rest of Payment issued",
  "Fit Process",
  "Pre-Production Sample",
  "Production Sample",
  "Purchase of Accessories",
  "Fabric enters factory",
  "Production commences",
  "Production finishes",
  "Final QC",
  "Packaging",
  "Final QC",
  "Shipping & Delivery",
  "Freight forwarder issues documents",
  "Delivery commences",
  "Products are delivered",
];

export {
  GLOBAL_MEDIA_QUERIES,
  COOKIES,
  USER_ROLES,
  DRAWER_NAMES,
  TOAST_CONFIGS,
  PRODUCT_GSM_UNITS,
  PRODUCT_GSM_UNITS_TO_ENG,
  ORDER_STATUS_IN_COLOR,
  VIEW_MODES,
  ALL_EVENT_TYPES,
};
