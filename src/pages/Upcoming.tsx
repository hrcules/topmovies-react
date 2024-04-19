import { useEffect, useState } from "react";
import {
  UpcomingContainer,
  UpcomingContent,
  UpcomingTitle,
} from "../styles/pages/Upcoming.style";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import MovieCard from "../components/MovieCard";
import { useMovies } from "../hooks/useMovies";
import { MoviesContainer } from "../styles/pages/Home.style";
import Sidebar from "../components/Sidebar";

function Upcoming() {
  const { movies, handleWithUpcomingMovies } = useMovies();
  const [page, setPage] = useState(1);

  const innerWidth = window.innerWidth;

  useEffect(() => {
    const fetchData = () => {
      handleWithUpcomingMovies(page);
    };

    fetchData();
  }, [page]);

  return (
    <UpcomingContainer>
      {innerWidth <= 768 ? <Sidebar /> : <Header />}

      <UpcomingContent>
        <UpcomingTitle>
          <h1>Filmes em lançamento</h1>

          <div>
            <Pagination page={page} setPage={setPage} />
          </div>
        </UpcomingTitle>

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
      </UpcomingContent>
    </UpcomingContainer>
  );
}

export default Upcoming;
