import React, { useRef } from "react";

const InputSearch = ({ setLocationNumber }) => {
  const locationSearch = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocationNumber(locationSearch.current.value.trim());
  };

  return (
    <div className="content__search">
      <form onSubmit={handleSubmit}>
        <input
          className="input__search"
          ref={locationSearch}
          type="text"
          placeholder="Search Location"
        />
        <button className="button__search">Search</button>
      </form>
    </div>
  );
};

export default InputSearch;
