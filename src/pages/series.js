import * as React from "react"
import { useState, useEffect } from "react"
import Layout from "../components/layout"
import Generos from "../components/generos"
// import Popular from "../components/popular"

const SeriesPage = () => {
  const [opcaoGenero, setOpcaoGenero] = useState({key: "", value: ""}) //qual opção do dropdown de generos foi selecionada
  const [allShows, setAllShows] = useState()
  const [randomShow, setRandomShow] = useState()
  useEffect(() => {
    console.log(opcaoGenero)
      if (opcaoGenero.key.length > 0) {
        let shows = []
        fetch(`https://api.themoviedb.org/3/discover/tv?api_key=9eef0665d5cb7863449089e6adad9e67&sort_by=popularity.desc&with_genres=${opcaoGenero.key}&page=1&include_null_first_air_dates=false&page=1`)
          .then(results => results.json())
          .then(data => {
            console.log(data)
            data.results.forEach(result => {
              shows.push(result)
            })
            setAllShows(shows)
          })
        }
        // console.log(allShows[(Math.floor(Math.random() * allShows.length))])
  }, [opcaoGenero])

  useEffect(() => {
    if (opcaoGenero.key.length > 0) {
      setRandomShow(allShows[(Math.floor(Math.random() * allShows.length))].name)

      // console.log(randomShow.name)
    }
  }, [allShows])

  return (
    <Layout>
      <h2>Qual gênero você prefere?</h2>
      <Generos setOpcaoGenero={setOpcaoGenero} opcaoGenero={opcaoGenero} type="tv" />
      <p>{randomShow}</p>
      
      {/* <Popular genre={opcaoGenero.key} setAllShows={setAllShows} type="tv"/> */}
    </Layout>
  )
}

export default SeriesPage

export const Head = () => <title>Séries</title>
