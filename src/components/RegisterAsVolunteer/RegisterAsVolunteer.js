import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./RegisterAsVolunteer.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterAsVolunteer = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [bookedServices, setBookedServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/selected-services")
      .then((res) => res.json())
      .then((data) => setBookedServices(data));
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:5000/register-as-volunteer", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json)
      .then((result) => {
        toast("Registration Complete!");
        console.log(result);
        navigate("/events");
      });
  };

  return (
    <section className="d-flex justify-content-center container mt-5 ">
      <ToastContainer />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-5 shadow-lg w-50 p-3"
      >
        <h2 className="text-start mb-5">Register As A Volunteer</h2>
        <input
          {...register("full-name")}
          className="form-control p-3 text-secondary my-3 border-dark"
          placeholder="Full Name"
          required
        />
        <input
          {...register("email")}
          className="form-control p-3 text-secondary my-3 border-dark"
          placeholder="Email"
          required
        />
        <input
          {...register("date")}
          className="form-control p-3 text-secondary my-3 border-dark"
          placeholder="Date"
          required
        />
        <input
          {...register("description")}
          className="form-control p-3 text-secondary my-3 border-dark"
          placeholder="Description"
          required
        />

        <textarea
          readOnly
          {...register("bookings")}
          className="form-control p-3  colored-input my-3 border-dark"
          placeholder={bookedServices.map((service) => service.name)}
          required
        />

        <input
          type="submit"
          className="w-100 bg-primary text-light fw-bold border-0 p-3 rounded "
          value="Registration"
        />
      </form>
    </section>
  );
};

export default RegisterAsVolunteer;
