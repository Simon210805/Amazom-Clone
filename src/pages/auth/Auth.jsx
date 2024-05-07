import React from 'react'
import classes from ".//signup.module.css"
import { Link } from 'react-router-dom'
function Auth() {
  return (
    <section className={classes.login}>
      {/* logo */}
      <Link>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHf1Bna1RlWOiy5AAicMxR41zyA64T8dRJTmS9aiZfcwJSloiF1epEShxc7A3BHYu6hA&usqp=CAU"
          alt=""
        />
      </Link>
      {/* form */}
      <div className={classes.login_container}>
        
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>  
            <input type="password" name="password" id="password" />
          </div>
          <button type="submit">Sign In</button>
        </form>
</div>
    </section>
  );
}

export default Auth