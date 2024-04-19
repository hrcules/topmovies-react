import { useContext } from "react";
import { MovieContext } from "../contexts/movies";

export const useMovies = () => {
  const context = useContext(MovieContext);
  return context;
};
