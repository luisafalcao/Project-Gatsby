import * as React from "react"
import { useState, useEffect } from "react"
import Layout from "../components/layout"
import Generos from "../components/generos"
import Show from "../components/show"
import Nav from "../components/nav"
import "../components/layout.css"

const SeriesPage = () => {
  const [opcaoGenero, setOpcaoGenero] = useState({key: "", value: ""}) //qual opção do dropdown de generos foi selecionada
  const [allShows, setAllShows] = useState()
  const [randomShow, setRandomShow] = useState()
  const [randomShowId, setRandomShowId] = useState()
  const [showComponent, setShowComponent] = useState(false)

  useEffect(() => {
      if (opcaoGenero.key.length > 0) {
        let shows = []
        fetch(`https://api.themoviedb.org/3/discover/tv?api_key=9eef0665d5cb7863449089e6adad9e67&sort_by=popularity.desc&with_genres=${opcaoGenero.key}&with_original_language=en&page=1&include_null_first_air_dates=false&page=1`)
          .then(results => results.json())
          .then(data => {
            data.results.forEach(result => {
              shows.push(result)
            })
            setAllShows(shows)
          })
        }
  }, [opcaoGenero])

  useEffect(() => {
    if (opcaoGenero.key.length > 0) {
      setRandomShowId(allShows[(Math.floor(Math.random() * allShows.length))].id)
      setShowComponent(true)
    }
  }, [allShows])
  
  return (
    <Layout>
      {!showComponent && (
       <>
       <Nav pageName="series"/>
       <h2>Qual gênero você prefere?</h2>
       <Generos setOpcaoGenero={setOpcaoGenero} type="tv" />
       </>
      )}
      {showComponent && 
        (<Show setRandomShow={setRandomShow} randomShowId={randomShowId} type="tv"></Show>)
      }     
    </Layout>
  )
}

export default SeriesPage

export const Head = () => <title>Séries</title>
