import { useEffect, useState } from "react";

import Header from "../components/Header";
import Pagination from "../components/Pagination";
import MovieCard from "../components/MovieCard";
import { useMovies } from "../hooks/useMovies";
import {
  ReleasesContainer,
  ReleasesContent,
  ReleasesTitle,
} from "../styles/pages/Releases.style";
import { MoviesContainer } from "../styles/pages/Home.style";
import Sidebar from "../components/Sidebar";

function Releases() {
  const { movies, handleWithReleasesMovies } = useMovies();
  const [page, setPage] = useState(1);
  const innerWidth = window.innerWidth;

  useEffect(() => {
    const fetchData = () => {
      handleWithReleasesMovies(page);
    };

    fetchData();
  }, [page]);

  return (
    <ReleasesContainer>
      {innerWidth <= 768 ? <Sidebar /> : <Header />}
      <ReleasesContent>
        <ReleasesTitle>
          <h1>Filmes em lançamento</h1>

          <div>
            <Pagination page={page} setPage={setPage} />
          </div>
        </ReleasesTitle>

        <MoviesContainer>
          {movies.map((movie, key) => (
            <MovieCard
              id={movie.id}
              title={movie.title}
              poster={movie.poster_path}
              vote_average={movie.vote_average}
              key={key}
            />
          ))}
        </MoviesContainer>
      </ReleasesContent>
    </ReleasesContainer>
  );
}

export default Releases;
