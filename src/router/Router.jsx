import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Homepage from "../pages/Homepage";
import Favorites from "../pages/Favorites";
import PokemonDetails from "../pages/PokemonDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/favorites", element: <Favorites /> },
      { path: "/pokemon/:name", element: <PokemonDetails/>}
      // add dynamic elements by id using home page product
    ],
  },
]);
