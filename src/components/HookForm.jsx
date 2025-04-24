import React from "react";
import { useForm } from "react-hook-form";

const HookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="p-6">
      <form
        className="max-w-md mx-auto mt-5 bg-gray-200 p-6 rounded"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label
          htmlFor="name"
          className="block text-gray-800 text-sm font-bold mb-2"
        >
          Name :
        </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Name is required" , minLength : 7 , maxLength : 50})}
          className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        />
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}

        {errors.name?.type === "minLength" && <span className="text-red-500"> Minimum length is 7 . </span>}
        {errors.name?.type === "maxLength" && <span className="text-red-500"> Maximum length is 50 . </span>}

        <label
          htmlFor="age"
          className="block text-gray-800 text-sm font-bold mb-2 mt-4"
        >
          Age :
        </label>
        <input
          type="number"
          id="age"
          {...register("age" , {required : true , min : 18 , max : 35}
          )}
          className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        />
        {errors.age?.type === "required" && <span className="text-red-500"> This field is required .</span>}
        {errors.age?.type === "min" && <span className="text-red-500"> Minimum age is 18 . </span>}
        {errors.age?.type === "max" && <span className="text-red-500"> Maximum age is 18 . </span>}

        <label
          htmlFor="country"
          className="block text-gray-800 text-sm font-bold mb-2 mt-4"
        >
          Country :
        </label>
        <input
          type="text"
          id="country"
          {...register("country")}
          className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        />

        <label
          htmlFor="city"
          className="block text-gray-800 text-sm font-bold mb-2 mt-4"
        >
          City :
        </label>
        <input
          type="text"
          id="city"
          {...register("city")}
          className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        />

        <button
          type="submit"
          className="m-7 px-3 py-2 rounded-md text-white text-md cursor-pointer transition duration-300 bg-blue-500 hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default HookForm;
