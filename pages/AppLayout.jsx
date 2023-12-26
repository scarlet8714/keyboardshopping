import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import PageNav from "../components/PageNav";
import SideBar from "../components/SideBar";

export default function AppLayout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <PageNav />
      <Outlet />
      <SideBar />
      <Footer />
    </>
  );
}
