import React from "react";
import MovieDetail from "../../components/MovieDetail/MovieDetail";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";

export default function Movie () {
    const {movieId} = useParams();
    console.log(movieId)

    return (
        <div>
            <Header/>
            <MovieDetail movieId={movieId} />
        </div>
    )
}