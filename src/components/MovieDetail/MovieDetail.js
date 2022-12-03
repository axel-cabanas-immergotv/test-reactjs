import React, { useEffect, useState } from "react";
import axios from "axios";

export default function MovieDetail ({movieId}) {
    const [ data, setData ] = useState([]);
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`)
            .then(res => {
                setData(res.data);
            });
    }, []);

    return (
        <div className="movie__content container">
            <div className="movie__content-poster" style={{backgroundImage: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${data.backdrop_path}")`}}>
                <div className="bg">
                    <div className="movie__content-poster-img">
                        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${data.poster_path}`}/>
                    </div>
                    <div className="movie__content-poster-desc">
                        <h1>{data.title} <span>({data.release_date})</span></h1>
                        <div className="description">
                            <h2>{data.tagline}</h2>
                            <p className="description-title">Overview</p>
                            <p className="description-overview">{data.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}