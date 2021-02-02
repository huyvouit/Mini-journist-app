import React from "react";
import UpdateInput from './UpdateInput';

const NewJournalForm = ({saveTodo} ) => {
  const { value, reset, onChangeOne,onChangeTwo } = UpdateInput();
  return (
    <form>
      <div className="new-journal-wrapper">
        <h2>New Journal</h2>

        <div className="new-journal-form">
          <div className="form-group">
            <label>Title</label>
            <br />
            <input onChange={onChangeOne}
              value={value.name}
              className="title-input-field"
              placeholder="Journal Title"
            ></input>
          </div>
          <div className="form-group">
            <label>Description</label>
            <br />
            <textarea onChange={onChangeTwo}
              value={value.description}
              className="description-input-field"
              rows="10"
              cols="50"
              placeholder="Journal Description"
            ></textarea>
          </div>
          <div>
            <button className="button-save-journal" 
            onClick={(e)=>{e.preventDefault();
            
              saveTodo(value);
              reset();
            }}
            >Save</button>
          
          </div>
        </div>
      </div>
      </form>
  
  );
};

export default NewJournalForm;
