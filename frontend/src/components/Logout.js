import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const history = useHistory();

  useEffect(() => {
    // Redirect to login page after logout
    history.push("/login");
  }, []);

  return null;
};

export default Logout;
