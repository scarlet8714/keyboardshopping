import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import PageNav from "../components/PageNav";
import SideBar from "../components/SideBar";

export default function AppLayout() {
  return (
    <>
      <PageNav />
      <Outlet />
      <SideBar />
      <Footer />
    </>
  );
}
