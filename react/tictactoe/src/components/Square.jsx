import React from "react";
import PropType from "prop-types";

function Square({val, setVal}) {

    // const [value, setValue] = useState(null);

    // const handleClick = () => {
    //     setValue("X");
    // }

  return <button onClick={setVal} className="square">{val}</button>;
}

Square.propTypes = {
    val: PropType.string,
    setVal: PropType.func,
};



export default Square;
