import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSearchDetails } from '../redux/configReducers';

function Form() {
  const [file, setFile] = useState('');
  const dispatch = useDispatch();
  const formHandler = (e) => {
    e.preventDefault();
    dispatch(fetchSearchDetails(file));
    setFile('');
  };

  return (
    <div className="form-container">
      <form className="input" onSubmit={formHandler}>
        <input type="text" name="search" id="search" placeholder="search country here" className="search-country" onChange={(e) => setFile(e.target.value)} value={file} />
        <button type="submit" className="btn-search" aria-label="search-country">
          search
          <i className="fa-solid fa-magnifying-glass-plus" /></button>
      </form>
    </div>
  );
}

export default Form;
