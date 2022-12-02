import axios from "axios";
import React, { useEffect, useState } from "react";
import Section from "../Section/Section";

export default function Popular () {
    const [ sections, setSections ] = useState([]);
    const URLone = axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`);
    const URLtwo = axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`);
    useEffect(() => {
        axios.all([URLone, URLtwo]).then(axios.spread((...responses) => {
            const responseOne = responses[0].data.results;
            const responseTwo = responses[1].data.results;
            setSections([
                {
                    id: 1,
                    name: 'Populars',
                    items: responseOne
                },
                {
                    id: 2,
                    name: 'Top rated',
                    items: responseTwo
                }
            ]);
        }))
    }, []);
    
    return (
        <div>
            {sections.map(section => {
                return (
                    <>
                    <Section title={section.name} items={section.items} />
                    </>
                )
            })}
        </div>
    )
}