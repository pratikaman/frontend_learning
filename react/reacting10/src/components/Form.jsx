import React from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

function Form({handleQuoteSubmit}) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div className="w-full h-[250px] bg-[#47A8BD] mt-8 rounded-md flex justify-center">
      <form
        action=""
        className="w-[500px] flex flex-col justify-center gap-2 p-2 items-center"
        onSubmit={handleSubmit(data => {
            handleQuoteSubmit(data);
            reset();
            // console.log(data);
        })}
      >
        <input
        {...register("author")}
          type="text"
          placeholder="author"
          className="w-[400px] border-2 border-black rounded p-1"
        />
        <input
        {...register("qt")}
          type="text"
          placeholder="quote"
          className="w-[400px] border-2 border-black rounded p-1"
        />
        <input
        {...register("image")}
          type="text"
          placeholder="image url"
          className="w-[400px] border-2 border-black rounded p-1"
        />
        <input
          type="submit"
          className="w-[80px] px-2 py-1 bg-violet-700 text-zinc-200 rounded cursor-pointer"
          value="Save"
        />
      </form>
    </div>
  );
}


Form.propTypes = {
    handleQuoteSubmit: PropTypes.func.isRequired
}


export default Form;
