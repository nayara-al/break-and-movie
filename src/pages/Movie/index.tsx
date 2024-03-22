import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as Component from "../../components";
import api from "../../services/api";
import { IMovie } from "../../interface/IMovie";

export default function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState<IMovie>();

  async function getMovie(movieUrl: string) {
    try {
      const resp = await api.get(`${movieUrl}`);
      setMovie(resp.data);
    } catch (e) {
      console.log(e);
    }
  }

  const formatCurrency = (value: number) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const movieUrl = `movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`;
    getMovie(movieUrl);
  }, []);
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-[80%] max-w-2xl overflow-hidden">
      {movie && (
        <div className="flex flex-col gap-4 text-center ">
          <h1 className="text-2xl text-blue-600 font-black">
            {movie.original_name ? movie.original_name : movie.original_title}
          </h1>
          <Component.Movie.MovieBox>
            <Component.Movie.Image
              src_path={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            />
          </Component.Movie.MovieBox>
          <div className="font-bold p-4 bg-white rounded-lg shadow-md">
            Orçamento:{" "}
            <span className="font-normal">
              U$ {movie.budget ? formatCurrency(movie.budget) : "não informado"}
            </span>
          </div>
          <div className="font-bold p-4 bg-white rounded-lg shadow-md">
            Receita:{" "}
            <span className="font-normal">
              U${" "}
              {movie.revenue ? formatCurrency(movie.revenue) : "não informado"}
            </span>
          </div>
          <div className="font-bold p-4 bg-white rounded-lg shadow-md">
            Duração: <span className="font-normal">{movie.runtime} min</span>
          </div>
          <div className="font-bold p-4 bg-white rounded-lg shadow-md">
            Descrição: <span className="font-normal">{movie.overview}</span>
          </div>
        </div>
      )}
    </div>
  );
}
