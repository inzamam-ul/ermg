import { useEffect, useState } from "react";
import useAxios from "axios-hooks";

import { ROUTES } from "../services";

export const useProfile = () => {
  const [user, setUser] = useState(null);
  const [{ data, loading, response }] = useAxios(ROUTES.PROFILE);

  useEffect(() => {
    if (!!loading || !data | !response) return;

    if (response.status === 200) {
      const [user] = data;
      setUser(user);
    }
  }, [loading, data, response]);

  return user;
};
