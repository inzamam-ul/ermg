import http from '../http-common';

export const ROUTES = {
  ORDERS: '/orders/',
  PRODUCTS: '/products/',
  REGISTER: '/signup/',
  LOGIN: '/login/',
  PROFILE: '/profile/',
  LOGOUT: '/logout/',
  SAVED_PRODUCTS: '/products/favorites/',
  CART: '/cart/',
  CART_REFILL: '/cart/refill/',
  MESSAGES: '/messages/',
  EVENTS: '/events/',
  PASSWORD_RESET: '/password_reset/',
  PASSWORD_RESET_CONFIRM: '/password_reset/confirm/',
};

export default function profile() {
  return http.get('/profile/');
}
