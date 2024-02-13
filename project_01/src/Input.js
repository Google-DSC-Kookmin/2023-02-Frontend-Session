import React, { useState } from "react";

const Input = ({ onSearch }) => {
  const [location, setLocation] = useState("");

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const searchPopulation = (e) => {
    if (e.key === "Enter") {
      onSearch(location);
    }
  };

  return (
    <input
      placeholder="장소를 입력하세요"
      value={location}
      onChange={handleInputChange}
      type="text"
      onKeyDown={searchPopulation}
    />
  );
};

export default Input;
