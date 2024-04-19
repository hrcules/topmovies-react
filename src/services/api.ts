import axios from "axios";

interface PopularMovieProps {
  data: {
    page: number;
    results: [
      {
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
      }
    ];
    total_pages: number;
    total_results: number;
  };
}

const baseURL = "https://api.themoviedb.org/3";
const api_key = "65906d591fb4fcbbcc0f0749a66c8eaa";

const request = axios.create({
  baseURL,
  timeout: 10000, // 10s timeout
  headers: {
    Accept: "application/json",
    "content-type": "application/json",
    Authorization: "Bearer 65906d591fb4fcbbcc0f0749a66c8eaa",
  },
});

export const getPopularMovies = async (page: number) => {
  try {
    const { data }: PopularMovieProps = await request.get("/movie/popular", {
      params: { api_key, page },
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};
export const getUpcomingMovies = async (page: number) => {
  try {
    const { data }: PopularMovieProps = await request.get("/movie/upcoming", {
      params: { api_key, page },
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getReleasesMovies = async (page: number) => {
  try {
    const { data }: PopularMovieProps = await request.get("movie/now_playing", {
      params: { api_key, page },
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};
