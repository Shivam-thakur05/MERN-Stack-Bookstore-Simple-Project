import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const closeModal = () => {
    document.getElementById("my_modal_3").close();
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={closeModal}
            >
              ✕
            </button>
            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <input
                type="email"
                className="input input-bordered w-full mt-1"
                placeholder="Email"
                {...register("email", { required: "This field is required" })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <input
                type="password"
                className="input input-bordered w-full mt-1"
                placeholder="Password"
                {...register("password", { required: "This field is required" })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className="mt-4">
              <button className="btn btn-primary w-full">Login</button>
            </div>
          </form>
          <div className="mt-4">
            <Link to="/signup" className="btn btn-ghost w-full">
              Not registered? <span>Signup</span>
            </Link>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;