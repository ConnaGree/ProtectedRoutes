import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/features/usersSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleLogin = async () => {
    await dispatch(logout());
    navigate("/login")
  };

  return (
    <div>
      {user && (
        <>
          <h1>Home</h1>
          <h2>Hello {user.full_name}</h2>

          <Link to={"/dashboard"}>To Dashboard</Link>
          <button
            onClick={handleLogin}
            className="border-[1px] rounded-md bg-black text-white px-[1rem] py-[.5rem]"
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default Home;
