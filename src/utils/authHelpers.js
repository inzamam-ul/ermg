import { USER_ROLES } from "../constants";

const hasRoles = (expectedRoles) => (userRoles) =>
  userRoles.some((userRole) => expectedRoles.includes(userRole));

const isSupplier = hasRoles([USER_ROLES.SUPPLIER]);
const isBuyer = hasRoles([USER_ROLES.BUYER]);

const isAuthorized = (userRoles, allowedRoles) => {
  const setUserRoles = new Set(userRoles);
  const setAllowedRoles = new Set(allowedRoles);
  const intersection = new Set(
    [...setAllowedRoles].filter((allowedRole) => setUserRoles.has(allowedRole))
  );
  return intersection.size > 0;
};

export { isSupplier, isBuyer, isAuthorized };
