import Directory from "@/components/directory/directory";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Directory />
      <Outlet />
    </>
  );
};

export default Home;
