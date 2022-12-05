import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../../context/Context/Context";
import Section from "../Section/Section";

export default function Movies () {
    const [ sections, setSections ] = useState([]);
    const { options, setOptions } = useContext(Context);
    const popularURL = axios.get(`https://api.themoviedb.org/3/${options}/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`);
    const topRatedURL = axios.get(`https://api.themoviedb.org/3/${options}/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`);
    const trendingsULR = axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);

    useEffect(() => {
        axios.all([popularURL, topRatedURL, trendingsULR]).then(axios.spread((...responses) => {
            const responsePopular = responses[0].data.results;
            const responseTopRated = responses[1].data.results;
            const responseTrendings = responses[2].data.results;
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
                },
                {
                    id: 3,
                    name: 'Trendings',
                    items: responseTrendings
                }
            ]);
        }))
    }, [options]);
    const filterSections = sections.filter(item => item.id === 1 || item.id === 2);

    return (
        <div>
            <div className='options-btn'>
                <button onClick={() => setOptions("movie")}>Movie</button>
                <button onClick={() => setOptions("tv")}>TV</button>
            </div>
            {filterSections.map(section => {
                return (
                    <>
                    <Section title={section.name} setOptions={setOptions} id={section.id} items={section.items} />
                    </>
                )
            })}
        </div>
    )
}