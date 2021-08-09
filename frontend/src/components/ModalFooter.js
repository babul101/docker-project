import React, { useContext, useEffect, useState } from "react";
import StateContext from "../StateContext";

function ModalFooter() {
  const { title, description } = useContext(StateContext);
  const [isDisabled, setisDisabled] = useState(false);

  function isValid() {
    return (
      title.length > 0 &&
      title.length <= 15 &&
      description.length > 0 &&
      description.length <= 150
    );
  }

  useEffect(() => {
    setisDisabled(!isValid());
    return () => {};
  }, [title, description]);
  return (
    <div className='modal-footer'>
      <a
        style={{ marginRight: "0.5rem" }}
        href='#!'
        className='modal-action modal-close waves-effect btn-flat white-text red'
      >
        Cancel
      </a>
      <a
        href='#!'
        className={`${
          isDisabled ? "disabled" : ""
        }  modal-action modal-close waves-effect btn-flat white-text green`}
      >
        Ok
      </a>
    </div>
  );
}

export default ModalFooter;
