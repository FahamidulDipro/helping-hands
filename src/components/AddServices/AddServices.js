import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const AddServices = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/addServices/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/");
        console.log(result);
      });
  };

  return (
    <section className="d-flex justify-content-center container">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-5 shadow-lg w-50 p-3"
      >
        <input
          {...register("name")}
          className="form-control p-3 text-secondary my-3"
          style={{ background: "lightGrey" }}
          placeholder="Service Name"
          required
        />
        <input
          {...register("img")}
          className="form-control p-3 text-secondary my-3"
          style={{ background: "lightGrey" }}
          placeholder="Image URL"
          required
        />
        <input
          {...register("detail")}
          className="form-control p-3 text-secondary my-3"
          style={{ background: "lightGrey" }}
          placeholder="Service Details"
          required
        />

        <input
          type="submit"
          className="w-100 bg-info text-light fw-bold border-0 p-3 rounded "
          value="Add Service"
        />
      </form>
    </section>
  );
};

export default AddServices;
