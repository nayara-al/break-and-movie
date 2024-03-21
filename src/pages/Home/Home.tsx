/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import api from "../../services/api";
import { IMovie } from "../../interface/IMovie";
import * as Component from "../../components";

export default function Home() {
  const [movieData, setMovieData] = useState<IMovie[]>([]);

  useEffect(() => {
    getTrendingMovieData("movie");
  }, []);

  async function getTrendingMovieData(type: any) {
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const resp = await api.get(
        `/trending/${type}/day?api_key=${apiKey}&media_type=movie`
      );
      console.log(21, resp.data.results);

      setMovieData(resp.data.results);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <div className="w-full flex flex-col gap-10">
        <div className="flex justify-center gap-10">
          <Component.Button
            className="bg-red-600"
            onClick={() => {
              getTrendingMovieData("movie");
            }}
          >
            Trending Movies
          </Component.Button>
          <Component.Button
            className="bg-blue-600"
            onClick={() => {
              getTrendingMovieData("tv");
            }}
          >
            Trending TV
          </Component.Button>
        </div>
        <div className="w-full flex flex-wrap gap-6 justify-center items-center">
          {movieData.map((item) => (
            <Component.Movie.MovieBox>
              <Component.Movie.Image
                src_path={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
              />
              <div className="movie_name">
                {item.original_title ? item.original_title : item.original_name}
              </div>
            </Component.Movie.MovieBox>
          ))}
        </div>
      </div>
    </>
  );
}
