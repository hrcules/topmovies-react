import React, { createContext, useState } from "react";
import {
  getPopularMovies,
  getReleasesMovies,
  getUpcomingMovies,
} from "../../services/api";

export type MovieProps = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [number];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MovieFavoiteProps = {
  original_title: string;
  vote_average: number;
  poster_path: string;
  id: number;
};

export type MoviesContextProps = {
  movies: MovieProps[];
  moviesLoading: boolean;
  handleWithPopularMovies: (page: number) => void;
  handleWithUpcomingMovies: (page: number) => void;
  handleWithReleasesMovies: (page: number) => void;
  handleWithAddFavoritesMovies: (movie: MovieFavoiteProps) => void;
  handleRemoveFavoriteMovie: (id: number) => void;
  totalPages: number;
  favorites: MovieFavoiteProps[];
};

const MovieContext = createContext<MoviesContextProps>(
  {} as MoviesContextProps
);

const MovieProvider = ({ children }: { children: React.ReactNode }) => {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [moviesLoading, setMovieLoading] = useState(false);
  const [totalPages, setTotalPages] = useState<number>(0);

  const [favorites, setFavorites] = useState<MovieFavoiteProps[]>([]);

  const handleWithPopularMovies = async (page: number) => {
    setMovieLoading(true);
    try {
      const response = await getPopularMovies(page);

      if (response && response.results) {
        setMovies(response.results);
        setTotalPages(response.total_pages);
      } else {
        console.error("Resposta inválida da API");
      }
    } catch (error) {
      console.error("Erro ao buscar filmes populares:", error);
    } finally {
      setMovieLoading(false);
    }
  };
  const handleWithUpcomingMovies = async (page: number) => {
    setMovieLoading(true);
    try {
      const response = await getUpcomingMovies(page);

      if (response && response.results) {
        setMovies(response.results);
        setTotalPages(response.total_pages);
      } else {
        console.error("Resposta inválida da API");
      }
    } catch (error) {
      console.error("Erro ao buscar filmes populares:", error);
    } finally {
      setMovieLoading(false);
    }
  };
  const handleWithReleasesMovies = async (page: number) => {
    setMovieLoading(true);
    try {
      const response = await getReleasesMovies(page);

      if (response && response.results) {
        setMovies(response.results);
        setTotalPages(response.total_pages);
      } else {
        console.error("Resposta inválida da API");
      }
    } catch (error) {
      console.error("Erro ao buscar filmes populares:", error);
    } finally {
      setMovieLoading(false);
    }
  };

  const handleWithAddFavoritesMovies = async (movie: MovieFavoiteProps) => {
    setFavorites((prevItems) => [...prevItems, movie]);
  };

  const handleRemoveFavoriteMovie = (id: number) => {
    const updatedItems = favorites.filter((item) => item.id !== id);
    setFavorites(updatedItems);
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        moviesLoading,
        handleWithPopularMovies,
        handleWithUpcomingMovies,
        handleWithReleasesMovies,
        handleWithAddFavoritesMovies,
        handleRemoveFavoriteMovie,
        totalPages,
        favorites,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };
