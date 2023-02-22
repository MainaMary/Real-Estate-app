import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import { NavLink, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [openMenu, steOpenMenu] = useState<boolean>(false);
  const [toolTip, setToolTip] = useState<boolean>(false);
  const menuList = [
    { path: "/", label: "Home" },
    { path: "/offers", label: "Offers" },
  ];
  const handleMenu = () => {
    steOpenMenu((prev) => !prev);
  };
  const handleToolTip = () => {
    setToolTip((prev) => !prev);
  };
  const navigate = useNavigate();
  const closeToolTip =() =>{
   handleToolTip()
  }
  return (
    <nav className="flex z-20 bg-white items-center justify-between h-32">
      <h4>Logo design</h4>
      <ul
        className={
          openMenu
            ? "block bg-red-300 top-20 w-full fixed"
            : " w-[10%] md:flex justify-between hidden"
        }
      >
        {menuList.map((label) => (
          <li key={label.label}>
            <NavLink
              to={label.path}
              className={({ isActive }) =>
                isActive
                  ? " text-primary-color border-b-2 border-primary-color"
                  : ""
              }
            >
              {label.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className=" hidden md:flex">
        <CustomButton onClick={() => navigate("/login")}>Sign in</CustomButton>
        <CustomButton onClick={() => navigate("/register")}>
          Sign up
        </CustomButton>
        <div  className="relative ml-1">
          <CgProfile onClick={handleToolTip} />
          <div>
            {toolTip && (
              <div className="absolute rounded-lg bg-gray-400 px-3 py-2 top-8 cursor-pointer right-3 w-[200px] ">
                <ul>
                <Link to={"/addList"} onClick={closeToolTip}>User profile</Link>
                <li>User settings</li>
                <li>Sign out</li>
                </ul>
               
              </div>
            )}
          </div>
        </div>
      </div>

      <div className=" block md:hidden" onClick={handleMenu}>
        {openMenu ? <IoMdClose /> : <FiMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
