import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import Sidebar from "../components/Sidebar";
import { useMovies } from "../hooks/useMovies";
import {
  FavoriteTextNotFoud,
  FavoritesContainer,
  FavoritesContent,
  FavoritesTitle,
} from "../styles/pages/Favorites.style";
import { MoviesContainer } from "../styles/pages/Home.style";

function Favorites() {
  const { favorites } = useMovies();

  const innerWidth = window.innerWidth;

  return (
    <FavoritesContainer>
      {innerWidth <= 768 ? <Sidebar /> : <Header />}

      <FavoritesContent>
        <FavoritesTitle>
          <h1>Filmes Favoritados</h1>
        </FavoritesTitle>

        {favorites.length < 1 ? (
          <FavoriteTextNotFoud>
            <p>Adicione algum filme como favorito. 😊</p>
          </FavoriteTextNotFoud>
        ) : (
          <MoviesContainer>
            {favorites.map((movie, key) => (
              <MovieCard
                id={movie.id}
                title={movie.original_title}
                poster={movie.poster_path}
                vote_average={movie.vote_average}
                key={key}
              />
            ))}
          </MoviesContainer>
        )}
      </FavoritesContent>
    </FavoritesContainer>
  );
}

export default Favorites;
