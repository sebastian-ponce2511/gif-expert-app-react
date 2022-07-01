import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setinputValue] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setinputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    //setCategories([...categories, inputValue]); Puede andar?
    //setCategories((categories) => [...categories, inputValue]);
    setinputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  );
};
