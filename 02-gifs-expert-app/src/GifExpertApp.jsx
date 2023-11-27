import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (nuevoElemento) => {
    if (categories.includes(nuevoElemento)) return; // Si existe no hagas nada

    // No se podría hacer .push() ya que mutariamos el estado y eso no se puede, tenemos que crear otro nuevo estado
    setCategories([nuevoElemento, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={(nuevoElemento) => onAddCategory(nuevoElemento)}
      />

      {categories.map((category) => {
        // Simpre se necesita un key (no se debe usar el index)
        return <GifGrid category={category} key={category} />;
      })}
    </>
  );
};
