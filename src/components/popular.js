import React from "react"
import { useState, useEffect } from "react"
import "./generos.css"

export default function Popular({ genero, type, setAllShows }) {

    const [shows, setShows] = useState([])
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/${type}?api_key=9eef0665d5cb7863449089e6adad9e67&sort_by=popularity.desc&with_genres=${genero}&page=1&include_null_first_air_dates=false&page=1`)
            .then(results => results.json())
            .then(data => {
                data.results.forEach(item => {
                    shows.push(item.name)
                });
                setShows(shows)
            })
    }, [genero])

    const handleChange = event => {
        setAllShows(shows) //avisa pra página series que alguma coisa mudou
    }

    return (
        <div>
            <input type="checkbox" onChange={handleChange}/>
            <ul>
                {shows.forEach(show => {
                    return `<li>${show}</li>`
                })}
            </ul>
        </div>
    )
}