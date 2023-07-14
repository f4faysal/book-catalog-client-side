"use client";

import * as React from "react";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

interface LoginFormInputs {
  email: string;
  password: string;
}

export function LoginForm({ className, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  // const { user, isLoading } = useAppSelector((state) => state.user);
  // const dispatch = useAppDispatch();

  // const navigate = useNavigate();

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);

    // dispatch(loginUser({ email: data.email, password: data.password }));
  };

  // useEffect(() => {
  //   if (user.email && !isLoading) {
  //     navigate("/");
  //   }
  // }, [user.email, isLoading]);

  return (
    <div className="grid gap-6">
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
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </form>
      <div>
        <Link to="/" className="label-text-alt link link-hover">
          {" "}
          crete a new accunt{" "}
        </Link>
      </div>
    </div>
  );
}
