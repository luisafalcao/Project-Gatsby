import React from "react"
import { useState, useEffect } from "react"

export default function Generos({ setOpcaoGenero }) {

    const [options, setOptions] = useState([])

    useEffect(() => {
        const opt = [{ key: "", value: "Escolha um gênero" }];

        fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=9eef0665d5cb7863449089e6adad9e67")
            .then(results => results.json())
            .then(data => {
                data.genres.forEach(genre => {
                    opt.push({ key: genre.id, value: genre.name });
                });
                setOptions(opt)
            })
    }, []);

    const handleChange = event => {
        setOpcaoGenero({ key: event.target.value, value: event.target[event.target.selectedIndex].text })
    }

    return (
        <div>
            <select name="generos" onChange={handleChange}>
                {options.map(option => {
                    return (
                        <option key={option.key} value={option.key}>
                            {option.value}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}