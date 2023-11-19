import React from "react"
import { useState, useEffect } from "react"
import "./show.css"

export default function Show({ randomShowId, type }) {

    const [showData, setShowData] = useState()

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${type}/${randomShowId}?api_key=9eef0665d5cb7863449089e6adad9e67`)
            .then(results => results.json())
            .then(data => {
                console.log(typeof(data.name))
                setShowData({key: data.id, name: data.name, posterPath: data.poster_path, overview: data.overview, voteAverage: data.vote_average})
            })
    }, [])

    return (
        <div className="container">
            {showData && (
                <>
                <div className="column">
                    <img src={`https://image.tmdb.org/t/p/w185${showData.posterPath}`} alt="" />
                </div>
                <div className="column">
                    <h4>{showData.name}</h4>
                    <p>⭑ {showData.voteAverage}</p>
                    <p>{showData.overview}</p>
                </div>
                </>
            )}
        </div>
    )
}