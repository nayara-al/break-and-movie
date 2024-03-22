/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import * as Component from "../../components";

const searchURL = "/search/movie";

import { IMovie } from "../../interface/IMovie";
import api from "../../services/api";

export default function Search() {
  const [searchParams] = useSearchParams();
  const [movieData, setMoviesData] = useState<IMovie[]>([]);
  const query = searchParams.get("q");

  async function getSearchedMovies(url: any) {
    try {
      const resp = await api.get(
        `${url}?api_key=${import.meta.env.VITE_API_KEY}&query=${query}`
      );

      setMoviesData(resp.data.results);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}`;
    getSearchedMovies(searchWithQueryURL);
  }, [query]);

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <h2 className="text-white font-medium text-2xl ">
        Resultados para: <span className="text-black font-bold">{query}</span>
      </h2>
      <div className="w-full flex flex-wrap gap-6 justify-center items-center">
        {movieData.map((item) => (
          <Component.Movie.MovieBox key={item.id}>
            <Component.Movie.Image
              src_path={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
            />
            <Component.Movie.LinkButton link_path={`/movie/${item.id}`}>
              {item.original_title ? item.original_title : item.original_name}
            </Component.Movie.LinkButton>
          </Component.Movie.MovieBox>
        ))}
      </div>
    </div>
  );
}
