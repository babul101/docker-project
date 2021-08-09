import React, { useRef, useEffect, useContext } from "react";
import MagicEffect from "materialize-css";
import StateContext from "../StateContext";

function NotesForm() {
  const _titleInput = useRef(null);
  const _descriptionInput = useRef(null);

  const { title, setTitle, description, setDescription } =
    useContext(StateContext);

  useEffect(() => {
    MagicEffect.CharacterCounter.init(_titleInput.current);
    MagicEffect.CharacterCounter.init(_descriptionInput.current);
    return () => {};
  }, []);
  return (
    <>
      <h3>Create a new note</h3>
      <div className='row'>
        <form action='' className='col s12'>
          <div className='row'>
            <div className='input-field col s6'>
              <input
                type='text'
                id='input_text'
                className='input_text'
                data-length='15'
                ref={_titleInput}
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
              <label htmlFor='input_text'>Title</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
              <textarea
                id='textarea'
                className='materialize-textarea'
                data-length='150'
                ref={_descriptionInput}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              ></textarea>
              <label htmlFor='textarea'>Description</label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default NotesForm;
