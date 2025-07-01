import React, { use } from "react";
import { Link, NavLink } from "react-router";
import "./Navbar.css";
import { AuthContext } from "../../contexts/AuthContext";
import { BiExit, BiMenu } from "react-icons/bi";
import Swal from "sweetalert2";
import { useMediaQuery } from "usehooks-ts";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const media = useMediaQuery("(max-width: 400px)");

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Successfully Logged Out!",
          icon: "success",
        })
      }).catch((error) => {
        Swal.fire({
          title: "Logout Failed!",
          text: error.message,
          icon: "error",
        });
      })
  }

  const handleImageClick = () => {
    if (media) {
      const logoutBtn = document.querySelector("#logoutBtn");
      if (logoutBtn.classList.contains("hidden")) {
        logoutBtn.classList.remove("hidden");
      } else {
        logoutBtn.classList.add("hidden");
      }
    }
  }

  const handleMenuToggle = () => {
    const navLinks = document.querySelector("#navLinks2");
    if (navLinks.classList.contains("hidden")) {
      navLinks.classList.remove("hidden");
    } else {
      navLinks.classList.add("hidden");
    }
  }

  return (
    <>
      <div className="flex p-4 justify-between sticky top-0 z-50 bg-base-200">
        <div className="flex md:flex-row items-center ml-[2.5vw]">
          <div className="rounded-full bg-[#BEE6F2] text-xl text-black p-3 italic border border-gray-400 font-medium">
            {/* <img src="" alt="" /> */}
            <h1>MarathonOps</h1>
          </div>
          <div
            className="bg-[#E4F2F6] rounded-full text-lg p-1 border border-gray-400 hidden md:block"
            id="navLinks"
          >
            <div className="flex gap-1 items-center">
              <NavLink to={"/"} className={"p-2 rounded-full hover:bg-[#BEE6F2]"}>
                Home
              </NavLink>
              <NavLink
                to={"/marathons"}
                className={"p-2 rounded-full hover:bg-[#BEE6F2]"}
              >
                Marathons
              </NavLink>
              <NavLink to={"/contactUs"} className={'p-2 rounded-full hover:bg-[#BEE6F2]'}>Contact Us</NavLink>
              { user && (
                <NavLink to={'/dashboard'} className={'p-2 rounded-full hover:bg-[#BEE6F2]'}>Dashboard</NavLink>
              )}
            </div>
          </div>
          <div className="block md:hidden">
              <button className="btn btn-ghost rounded-full text-3xl" onClick={handleMenuToggle}>
                <BiMenu></BiMenu>
              </button>
          </div>
        </div>
        {user ? (
          <div className="flex gap-1 items-center mr-[2.5vw] min-[400px]:flex-row-reverse flex-col">
            <img src={user.photoURL} onClick={handleImageClick} className="w-12 rounded-full" alt="" referrerPolicy="no-referrer" />
            <button className="btn btn-error rounded-full font-extralight text-lg hidden" onClick={handleLogOut} id="logoutBtn">LogOut</button>
          </div>
        ) : (
          <div className="flex sm:flex-row flex-col gap-1 items-center mr-[2.5vw]">
            <Link
              to={"/login"}
              className="btn btn-primary rounded-full font-normal sm:text-xl"
            >
              Login
            </Link>
            <Link
              to={"/register"}
              className="btn btn-info rounded-full font-normal sm:text-xl"
            >
              Register
            </Link>
          </div>
        )}
      </div>
      <div
        className="bg-[#E4F2F6] rounded-full text-lg p-1 border border-gray-400 hidden w-[95%] mx-auto mb-2 sticky top-[6.5rem] z-60"
        id="navLinks2"
      >
        <div className="flex gap-1 items-center justify-center">
          <NavLink to={"/"} className={"p-2 rounded-full hover:bg-[#BEE6F2]"}>
            Home
          </NavLink>
          <NavLink
            to={"/marathons"}
            className={"p-2 rounded-full hover:bg-[#BEE6F2]"}
          >
            Marathons
          </NavLink>
          { user && (
            <NavLink to={'/dashboard'} className={'p-2 rounded-full hover:bg-[#BEE6F2]'}>Dashboard</NavLink>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
