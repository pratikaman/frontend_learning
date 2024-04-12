import React from "react";
import { RxCross2 } from "react-icons/rx";
import PropTypes from "prop-types";

function Card({ quote, handleRemove, id}) {

  const { author, qt, image } = quote;

  return (
    <div className="w-[200px] h-full bg-yellow-500 flex-shrink-0 rounded-md relative flex flex-col gap-2 items-center pt-4 px-2 overflow-y-auto">
      <div className="w-[150px] h-[150px] rounded-full bg-pink-500 overflow-hidden flex-shrink-0 ">
        <img src={image} className="w-full h-full object-cover"></img>
      </div>
      <h1 className="font-semibold ">{author}</h1>
      <p className="text-xs">{qt}</p>
      <button onClick={() => handleRemove(id)} className="w-[20px] h-[20px] bg-red-600 rounded-full flex justify-center items-center absolute right-2 top-2">
        <RxCross2 />
      </button>
    </div>
  );
}

Card.propTypes = {
  quote: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

export default Card;
