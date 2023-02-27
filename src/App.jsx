import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Container, createTheme, CssBaseline, styled, ThemeProvider} from "@mui/material";
import PokeCard from "./components/PokeCard.jsx";
import PokeInfo from "./components/PokeInfo.jsx";

const App = () => {
    const [pokemonData, setPokemonData] = useState([])
    const [loading, setLoading] = useState(true)
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?limit=12")
    const [nextUrl, setNextUrl] = useState()
    const [pokemon, setPokemon] = useState()
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    })
    const getPokemons = async (res) => {
        res.map(async (item) => {
            const result = await axios.get(item.url)
            setPokemonData(currentList => {
                currentList = [...currentList, result.data]
                currentList.sort((a, b) => a.id - b.id)
                return currentList
            })
        })
    }
    const pokeGet = async () => {
        setLoading(true)
        const res = await axios.get(url)
        setNextUrl(res.data.next)
        getPokemons(res.data.results)
        setLoading(false)
    }
    useEffect(() => {
        pokeGet()
    }, [url])
    const nextPage = () => {
        setUrl(nextUrl)
    }
    const LeftSide = styled('div')({
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gridGap: '2rem'
    })
    const RightSide = styled('div')({
        width: '40%',
        position: 'fixed',
        top: '16x',
        right: '10px',
    })
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Container sx={{display: 'flex', paddingTop: '1rem'}}>
                <LeftSide sx={{flexBasis: '60%'}}>
                    <PokeCard pokemon={pokemonData} loading={loading} infoPokemon={poke => setPokemon(poke)}/>
                    {nextUrl && <Button variant="contained" onClick={nextPage}>Load More</Button>}
                </LeftSide>
                <RightSide sx={{flexBasis: '50%'}}>
                    <PokeInfo data={pokemon}/>
                </RightSide>
            </Container>
        </ThemeProvider>
    )
}


export default App;