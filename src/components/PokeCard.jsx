import React from 'react';
import {Card, CardContent, CircularProgress, Typography} from "@mui/material";
import {toUpLetter} from "../toUpLetter.js";


const PokeCard = ({pokemon, loading, infoPokemon}) => {
    return (
        <>
            {
                loading ? <CircularProgress/> :
                    pokemon.map((item) => {
                        return (
                            <Card key={item.id} elevation={5} sx={{display: 'flex', maxWidth: 400, justifyContent: 'between'}} onClick={() => infoPokemon(item)}>
                                <CardContent>
                                    <Typography variant="h5">{item.id}</Typography>
                                    <Typography variant="subtitle1">{toUpLetter(item.name)}</Typography>
                                    {item.types.map(poke => (
                                        <Typography variant={'h6'}>
                                            <span style={{fontWeight: 'bold'}}>
                                                {toUpLetter(poke.type.name)}
                                            </span>
                                        </Typography>
                                    ))}
                                </CardContent>
                                <img style={{margin: 'auto', display: 'block'}} src={item.sprites.front_default} alt={item.name}/>
                            </Card>
                        )
                    })
            }
        </>
    )

}

export default PokeCard;


