import { Outlet, useNavigation } from "react-router-dom";
import "../styles/main.css";
import { Navbar } from "../components/pageDesign/nav/Navbar";

export function NavLayout() {
  const { state } = useNavigation();

  return (
    <div className="main-container">
      <Navbar />
      {state === "loading" ? "loading..." : <Outlet />}
    </div>
  );
}
