import axios from "axios";
import React, { useEffect, useState } from "react";
import Section from "../Section/Section";

export default function Movies () {
    const [ sections, setSections ] = useState([]);
    const popularURL = axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`);
    const topRatedURL = axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`);
    useEffect(() => {
        axios.all([popularURL, topRatedURL]).then(axios.spread((...responses) => {
            const responsePopular = responses[0].data.results;
            const responseTopRated = responses[1].data.results;
            setSections([
                {
                    id: 1,
                    name: 'Populars',
                    items: responsePopular
                },
                {
                    id: 2,
                    name: 'Top rated',
                    items: responseTopRated
                }
            ]);
        }))
    }, []);
    console.log(sections)

    return (
        <div>
            {sections.map(section => {
                return (
                    <>
                    <Section title={section.name} id={section.id} items={section.items} />
                    </>
                )
            })}
        </div>
    )
}