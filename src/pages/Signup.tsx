import loginImg from "../assets/images/login-img.png";
import { SignupForm } from "../components/ui/SignUpForm";

export default function Signup() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img src={loginImg} className="max-w-sm rounded-lg shadow-2xl" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  );
}
