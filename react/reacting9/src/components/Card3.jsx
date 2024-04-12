import React, { useState } from "react";
import { useForm } from "react-hook-form"

function Card3() {

    // Method 3 to control forms (in genral any element)
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm()
   


  return (
    <div className="max-w-60">
      <h2 className="text-3xl font-bold text-center">Using react hook form</h2>
      <form action="" className="flex flex-col gap-4 items-center mt-4"  onSubmit={handleSubmit((data)=> console.log(data))}>
        <input
          {...register('userName')}
          type="text"
          name="userName"
          className="border-2 rounded p-2"
          placeholder="ur name"
        />
        <input
          {... register('age')}
          type="text"
          name="age" 
          className="border-2 rounded p-2"
          placeholder="ur age"
        />
        <input
          type="submit"
          className="bg-purple-300 rounded cursor-pointer w-fit px-4 py-2"
        />
      </form>
    </div>
  );
}

export default Card3;
