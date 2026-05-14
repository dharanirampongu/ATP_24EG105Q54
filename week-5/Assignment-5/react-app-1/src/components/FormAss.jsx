import { useForm } from "react-hook-form";
import { useState } from "react";

function FormAss() {
  const {
    register,
    handleSubmit,
    formState: { errors },} = useForm();

  const [users, setUsers] = useState([]);

  // form submit function
  const onFormSubmit = (newUserobj) => {
    console.log(newUserobj);
    setUsers([...users,newUserobj]); 
  };
  return (
    <body className="bg-orange-300 ">
    <div className="bg-pink-200 m-10 p-3">
      <h1 className="text-center text-3xl">Form Demo</h1>

      {/* form */}
      <form
        className="max-w-md mx-auto mt-5 "
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <div className="mb-3">
          <label htmlFor="firstname">FirstName</label>
          <input
            type="text"
            {...register("firstname", {
              required: "first name required",
              validate: (v) => v.trim().length !== 0 || "not valid",
              minLength: { value: 4, message: "min of length 4 characters" },
            })}
            id="firstname"
            className="border w-full p-3"
          />
          {errors.firstname && (
            <p className="text-red-500">*Name required</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email required" })}
            id="email"
            className="border w-full p-3"
          />
          {errors.email && (
            <p className="text-red-500">*Email required</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="dateofbirth">Date of Birth</label>
          <input
            type="date"
            {...register("dateofbirth", { required: "date of birth required" })}
            id="dateofbirth"
            className="border w-full p-3"
          />
          {errors.dateofbirth && (
            <p className="text-red-500">*Enter date of birth</p>
          )}
        </div>

        <button type="submit" className="p-2 block bg-blue-400 text-center mx-auto  rounded-2xl border-1  border-amber-950">Add User</button>
      </form>
      </div>

      {/* table of users */}
        <div className="mt-10 max-w-2xl mx-auto bg-amber-200">
          <h1 className="text-3xl mb-5 text-center">List of Users</h1>
          <table className="w-full border-collapse border border-gray-400">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Email</th>
                <th>Date of Birth</th>
              </tr>
            </thead>
            <tbody className="w-full border-collapse border border-gray-400 text-center">
              {users.map((users, index) => (
                <tr key={index}>
                  <td>
                    {users.firstname}
                  </td>
                  <td>{users.email}</td>
                  <td>
                    {users.dateofbirth}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </body>
  );
}

export default FormAss;