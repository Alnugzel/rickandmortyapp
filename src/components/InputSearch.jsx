import React, { useRef } from "react";

const InputSearch = ({ setLocationNumber }) => {
  const locationSearch = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocationNumber(locationSearch.current.value.trim());
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={locationSearch} type="text" placeholder="Search Location" />
        <button>Search</button>
      </form>
    </div>
  );
};

export default InputSearch;
