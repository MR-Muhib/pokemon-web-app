import { useState } from "react";

const Button = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <button onClick={handleClick}>
      {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
    </button>
  );
};

export default Button;
