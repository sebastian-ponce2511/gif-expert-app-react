import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Star Wars"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        //setCategories={setCategories}
        onNewCategory={onAddCategory}
      />

      {categories.map((category) => (
        <GifGrid key={Math.random()} category={category} />
      ))}
    </>
  );
};
