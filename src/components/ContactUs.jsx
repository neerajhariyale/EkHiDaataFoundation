import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobileno: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_zuzctqy", "template_m9gu1yj", form, "KuoXI0AQy7G8kaXvX")
      .then(() => {
        toast.dismiss();
        toast.success("Message sent successfully ✅");
        setForm({ name: "", email: "", mobileno: "", message: "" });
      })
      .catch((error) => {
        toast.dismiss();
        toast.error("Failed to send message ❌");
        console.error(error);
      });
  };

  return (
    <div className="mt-5 w-11/12 h-contain mx-auto flex flex-col items-center justify-evenly">
      {/* Toaster */}
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Heading */}
      <div className="flex flex-col items-center text-center px-4">
        <p className="mt-8 text-2xl md:text-3xl font-semibold">Join Us</p>
        <div className="w-16 border-2 border-red-500 mt-1"></div>

        <p className="text-lg font-semibold mt-4">
          Join us in our mission to make a difference!
        </p>
        <p className="mb-4 font-light text-sm md:text-base">
          If you are interested in volunteering or collaborating with us, please
          fill out the form below:
        </p>
      </div>

      {/* ContactUs Form */}
      <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 mt-5 p-6 bg-white border-2 border-gray-300 shadow-xl rounded-xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium ">Name</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Mobile No.</label>
            <input
              type="number"
              name="mobileno"
              required
              value={form.mobileno}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 no-spinner"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Message</label>
            <textarea
              name="message"
              required
              rows="4"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white font-semibold py-2 rounded hover:bg-red-700 transition"
          >
            Submit
          </button>

          {status && (
            <p className="text-center text-sm mt-2 text-green-600">{status}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
