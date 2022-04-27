import React from "react";
import { useForm } from "react-hook-form";
const AddServices = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/addServices/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} />
      <input {...register("img")} />
      <input {...register("detail")} />

      <input type="submit" />
    </form>
  );
};

export default AddServices;
