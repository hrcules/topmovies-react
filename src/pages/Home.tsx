import { useEffect, useState } from "react";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import { useMovies } from "../hooks/useMovies";
import {
  HomeContainer,
  HomeContent,
  HomeTitle,
  MoviesContainer,
} from "../styles/pages/Home.style";
import Pagination from "../components/Pagination";
import Sidebar from "../components/Sidebar";

function Home() {
  const { movies, handleWithPopularMovies } = useMovies();
  const [page, setPage] = useState(1);

  const innerWidth = window.innerWidth;

  useEffect(() => {
    const fetchData = () => {
      handleWithPopularMovies(page);
    };

    fetchData();
  }, [page]);

  return (
    <HomeContainer>
      {innerWidth <= 768 ? <Sidebar /> : <Header />}

      <HomeContent>
        <HomeTitle>
          <h1>Filmes Populares</h1>

          <div>
            <Pagination page={page} setPage={setPage} />
          </div>
        </HomeTitle>

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
      </HomeContent>
    </HomeContainer>
  );
}

export default Home;
