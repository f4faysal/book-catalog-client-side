import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../../redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";

interface SignupFormInputs {
  name: string;
  email: string;
  password: string;
}

export function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>();
  const { user, isLoading } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const onSubmit = (data: SignupFormInputs) => {
    
    dispatch(createUser({ email: data.email, password: data.password }));
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (user.email && !isLoading) {
      navigate("/");
    }
  }, [user.email, isLoading]);

  return (
    <div className="grid gap-6">
      <h1 className="w-full text-center text-2xl">EBook Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1 form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p>{errors.email.message}</p>}
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              id="password"
              placeholder="your password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p>{errors.password.message}</p>}
            <label className="label">
              <span className="label-text"> Password</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              id="password"
              placeholder="confirm password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Create Account</button>
          </div>
        </div>
      </form>
      <div>
        <Link to="/login" className="label-text-alt link link-hover">
          {" "}
          Already have an account? Login Here
        </Link>
      </div>
    </div>
  );
}
