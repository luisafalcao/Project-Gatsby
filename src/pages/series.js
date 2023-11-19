import * as React from "react"
import Layout from "../components/layout"
import Generos from "../components/generos"
import { useState, useEffect } from "react"

const Series = () => {
  
  const [opcaoGenero, setOpcaoGenero] = useState({key: "", value: ""});

  useEffect(() => {
    if (opcaoGenero.value.length > 0) {
      alert(opcaoGenero.value)
    }
  }, [opcaoGenero]);
  
  return (
    <Layout>
      <h2>Que gênero você prefere?</h2>
      <Generos setOpcaoGenero={setOpcaoGenero}></Generos>
    </Layout>
  )
}

export default Series

export const Head = () => <title>Séries</title>
