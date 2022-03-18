import React, { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import {GiftGrid} from "./components/GiftGrid";

export const GiftApp = () => {
  const [categories, setCategories] = useState(["One Punch Man"]);

  return (
    <>
      <h1>GiftApp</h1>
      <AddCategory setCategories={setCategories} />

      <hr />

      <ol>
        {categories.map((category) => {
          return <GiftGrid category={category} key={category} />;
        })}
      </ol>
    </>
  );
}
