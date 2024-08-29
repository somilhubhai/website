import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/user/signup",
        formData
      );
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form
        className="md:p-4 md:m-24 ml-8 px-4 mt-10"
        method="POST"
        onSubmit={handleSubmit}
      >
        Name :
        <br />
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          className="border-2 border-gray-300 w-full md:p-2 font-semibold text-black"
        />
        <br />
        Email :
        <br />
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="border-2 border-gray-300 w-full md:p-2 font-semibold text-black"
        />
        <br />
        Password :
        <br />
        <input
          type="text"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          className="border-2 border-gray-300 w-full md:p-2 font-semibold text-black"
        />
        <br />
        <button
          type="submit"
          className="bg-slate-400 mt-4 rounded-md px-4 py-2 hover:animate-bounce"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Signup;
