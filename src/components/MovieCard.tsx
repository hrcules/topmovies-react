import { Heart } from "lucide-react";
import {
  Card,
  CardContent,
  CardText,
  CardTextAvarage,
  FavoriteButton,
  GradientOverlay,
} from "../styles/components/MovieCard.style";
import { useMovies } from "../hooks/useMovies";

interface MovieCardProps {
  id: number;
  title: string;
  poster: string;
  vote_average: number;
}

const imageURL = "https://image.tmdb.org/t/p/w500";

function MovieCard({ id, title, poster, vote_average }: MovieCardProps) {
  const { handleWithAddFavoritesMovies, handleRemoveFavoriteMovie, favorites } =
    useMovies();

  const handleAddFavoriteList = () => {
    handleWithAddFavoritesMovies({
      id: id,
      original_title: title,
      poster_path: poster,
      vote_average: vote_average,
    });
  };

  const isFavorited = favorites.some((item) => item.id === id);

  return (
    <Card
      style={{
        backgroundImage: `url(${
          imageURL + poster + "&api_key=65906d591fb4fcbbcc0f0749a66c8eaa"
        })`,
      }}
    >
      <GradientOverlay />
      <CardContent>
        <FavoriteButton
          favorited={isFavorited ? true : undefined}
          onClick={() =>
            isFavorited
              ? handleRemoveFavoriteMovie(id)
              : handleAddFavoriteList()
          }
        >
          <Heart />
        </FavoriteButton>
        <CardText>{title}</CardText>
        <CardTextAvarage>{vote_average.toFixed(1)}</CardTextAvarage>
      </CardContent>
    </Card>
  );
}

export default MovieCard;
