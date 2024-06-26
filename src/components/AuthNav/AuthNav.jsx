import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "../AuthNav/AuthNav.module.css";

const linkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function AuthNav() {
  return (
    <header>
      <div>
        <NavLink to="/register" className={linkClass}>
          Register
        </NavLink>
        <NavLink to="/login" className={linkClass}>
          Login
        </NavLink>
      </div>
    </header>
  );
}
