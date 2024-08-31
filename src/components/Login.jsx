import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../store/features/usersSlice";
import Spinner from "../ui/Spinner";

const Login = () => {
  const dispatch = useDispatch();
  const [user, setUsername] = useState("");
  const [pwd, setPassword] = useState("");

  const navigate = useNavigate();
  const { error, isLoading } = useSelector((state) => state.user);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (user && pwd) {
      // Dispatch the async thunk and wait for it to complete
      const resultAction = await dispatch(
        loginUser({ email: user, password: pwd })
      );
      console.log(resultAction);

      // Check if the login was successful
      if (loginUser.fulfilled.match(resultAction)) {
        console.log("Login successful, navigating to home...");
        navigate("/");
      } else {
        console.log("Login failed, error:", resultAction.payload);
      }
    } else {
      console.log("Invalid Credentials");
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form className="login__form" onSubmit={handleLogin}>
        <input
          value={user}
          onChange={(e) => setUsername(e.target.value)}
          type="email"
          placeholder="username"
        />
        <input
          value={pwd}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />

        <button className="outline-none" type="submit">
          {isLoading ? (
            <div className="flex items-center justify-center space-x-2">
              <Spinner />
            </div>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;
