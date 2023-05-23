import { useState, useEffect } from "react";

import { useProfile } from ".";

export const useAuthRoleChecker = (desireRole) => {
  const [shouldRedirect, setShouldRedirect] = useState(null);

  const profile = useProfile();

  useEffect(() => {
    if (!profile) return;

    if (profile) {
      setShouldRedirect(profile.role !== desireRole);
    }
  }, profile);

  return shouldRedirect;
};
