import React from "react";
import './index.css'


function Sign() {
//   const container=useRef(null);
//   const handleOnclickSignIn=e=>{
//     container.current.classList.remove("right-panel-active");

//   };
//   const handleOnclickSignUp=e=>{
//     container.current.classList.add("right-panel-active");
//   };
  return (
    <div className="sign" >
      <div className="signup-form">
    <form action="/examples/actions/confirmation.php" method="post">
		<h2>Create an Account</h2>
		<p className="hint-text">Sign up with your social media account or email address</p>
		<div className="social-btn text-center">
			<a href="#" className="btn btn-primary btn-lg"><i className="fa fa-facebook"></i> Facebook</a>
			<a href="#" className="btn btn-danger btn-lg"><i className="fa fa-google"></i> Google</a>
		</div>
		<div className="or-seperator"><b>or</b></div>
        <div className="form-group">
        	<input type="text" className="form-control input-lg" name="username" placeholder="Username" required="required"/>
        </div>
		<div className="form-group">
        	<input type="email" className="form-control input-lg" name="email" placeholder="Email Address" required="required"/>
        </div>
		<div className="form-group">
            <input type="password" className="form-control input-lg" name="password" placeholder="Password" required="required"/>
        </div>
		<div className="form-group">
            <input type="password" className="form-control input-lg" name="confirm_password" placeholder="Confirm Password" required="required"/>
        </div>  
        <div className="form-group">
            <button type="submit" className="btn bg-success w-100 text-white">Sign Up</button>
        </div>
    </form>
    <div className="text-center">Already have an account? <a href="#" className="text-success">Login here</a></div>
</div>
   </div>
  );
}

export default Sign;
