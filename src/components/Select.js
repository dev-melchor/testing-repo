import React, { useEffect, useState } from "react";

const Select = () => {
  const [selectValue, setSelectValue] = React.useState("");
  const onChange = (event) => {
    const value = event.target.value;
    setSelectValue(value);
  };

  const [breed, setBreed] = useState([]);

  const fetchData = () => {
    return fetch("https://api.thecatapi.com/v1/breeds")
      .then((response) => response.json())
      .then((data) => setBreed(data));
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <div>
      <h2 className="mb-3">Breed</h2>

      <select onChange={onChange} className="form-select">
        <option defaultValue disabled>Select breed</option>
        {breed && breed.length > 0 && breed.map((breedObj, index) => (
          <option key={breedObj.id} value={breedObj.name}>{breedObj.name}</option>
        ))}
      </select>

      {selectValue && <h2 className="mt-3">{selectValue}</h2>}
    </div>
  );
};

export default Select;