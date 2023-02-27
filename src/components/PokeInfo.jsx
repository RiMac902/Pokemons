import React from 'react';
import {Box, Card, CardContent, Typography} from "@mui/material";
import {toUpLetter} from "../toUpLetter.js";
import {blue} from '@mui/material/colors';


const primary = blue[700]

const PokeInfo = ({data}) => {
    return (
        <>
            {
                (!data) ? '' : (
                    <Card sx={{maxWidth: 400, padding: 2}} elevation={5}>
                        <img style={{margin: 'auto', display: 'block'}}
                             src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
                             alt={toUpLetter(data.name)}/>
                        <Typography variant={'h3'}>{toUpLetter(data.name)} #{data.id}</Typography>
                        <CardContent>
                            <Box>
                                {data.abilities.map(poke => (
                                    <Typography gutterBottom variant={'h4'} sx={{
                                        backgroundColor: primary,
                                        textAlign: 'center',
                                        borderRadius: '5px',
                                        color: 'white'
                                    }}>{toUpLetter(poke.ability.name)}</Typography>
                                ))}
                            </Box>
                            <Box>
                                {data.stats.map(poke => (
                                    <Typography gutterBottom variant={'h5'}>{toUpLetter(poke.stat.name)}: <span
                                        style={{fontWeight: 'bold'}}>{poke.base_stat}</span></Typography>
                                ))}
                            </Box>
                            <Box>
                                {data.types.map(poke => (
                                    <Typography gutterBottom variant={'h6'}>Type: <span
                                        style={{fontWeight: 'bold'}}>{toUpLetter(poke.type.name)}</span></Typography>
                                ))}
                            </Box>
                            <Typography variant={'h6'}>Weight: <span>{data.weight}</span></Typography>
                        </CardContent>
                    </Card>
                )
            }
        </>
    )
}

export default PokeInfo;


