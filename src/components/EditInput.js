import React, { useState } from "react";

const EditInput = (props) => {
  const [toggle, toggleInput] = useState(false);

  function toggleElement() {
    console.log(toggle);
    toggleInput(!toggle);
    //console.log(props);
    //props.onChange({ [event.target.name]: event.target.value });
  }

  return (
    <>
      {toggle ? (
        <input
          fluid
          type="text"
          className="budgetEditInput"
          value={props.v}
          onMouseOut={toggleElement}
          onChange={props.handleChange}
        />
      ) : (
        <span onClick={toggleElement} onMouseOver={toggleElement}>
          {props.v}
        </span>
      )}
    </>
  );
};

export default EditInput;
