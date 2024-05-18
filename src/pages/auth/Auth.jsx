import React, { useState, useContext } from "react";
import { type } from "../../utility/Action.type";
import classes from ".//signup.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../utility/Firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../components/dataProvider/DataProvider";
import { ClipLoader } from "react-spinners";
function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({ signIN: false, signUp: false });

  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const navStateData = useLocation();
  console.log(navStateData)
  console.log(user);

  const authHandler = (e) => {
    e.preventDefault();
    if (e.target.name === "signIn") {
      //firebase auth
      setLoading({ ...loading, signIN: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          console.log(userInfo);
          dispatch({ type: type.SET_USER, user: userInfo.user });
          setLoading({ ...loading, signIN: false });
          navigate (navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          console.log(err);
          setError(err.message);
          setLoading({ ...loading, signIN: false });
        });
    } else {
      //firebase auth

      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          console.log(userInfo);
          dispatch({ type: type.SET_USER, user: userInfo.user });
          setLoading({ ...loading, signUp: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          console.log(err);
          setError(err.message);
          setLoading({ ...loading, signUp: false });
        });
    }
  };
  return (
    <section className={classes.login}>
      {/* logo */}
      <Link to="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHf1Bna1RlWOiy5AAicMxR41zyA64T8dRJTmS9aiZfcwJSloiF1epEShxc7A3BHYu6hA&usqp=CAU"
          alt=""
        />
      </Link>
      {/* form */}
      <div className={classes.login_container}>
        <h1>Sign In</h1>
        {navStateData?.state?.msg && (
          <p style={{ color: "red", textAlign: "center",padding: "5px",fontWeight: "bold" }}>{navStateData?.state?.msg}</p>
          
        )
        }
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
            />
          </div>
          <button
            name="signIn"
            type="submit"
            onClick={authHandler}
            className={classes.login_signin_btn}
          >
            {loading.signIN ? (
              <ClipLoader color="white" size={20} />
            ) : (
              "Sign In"
            )}
          </button>
        </form>
        {/* agreement */}
        <p>
          by signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        {/* create account btn */}
        <button
          name="signUp"
          type="submit"
          onClick={authHandler}
          className={classes.login_create_btn}
        >
          {loading.signUp ? (
            <ClipLoader color="black" size={20} />
          ) : (
            "Create your Amazon Account"
          )}
        </button>
        {error && <p style={{ paddingTop: "10px", color: "red" }}>{error}</p>}
      </div>
    </section>
  );
}

export default Auth;
