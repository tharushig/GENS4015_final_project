import React from "react";
import { Box } from '@mui/material';

const result = {
    o: {
        name: 'Openness',
        description: 'You are curious and knowledgable'
    },
    e: {
        name: 'Extraversion',
        description: 'sociability, assertiveness, opposite of introversion'
    },
    a: {
        name:'Agreeableness',
        description: 'compassion, respectfulness, trust in others'
    },
    c: {
        name: 'Conscientiousness',
        description: 'organization, productiveness, responsibility'
    },
    n: {
        name:'Neuroticism',
        description: 'anxiety and depression'
    }
}


function Results () {
    return (
        <>
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', height:'70vh', gap:'40px'}}>
                <Box sx={{fontSize:'40px'}}>
                    You have the personality of {result['o']['name']}!!
                </Box>
                <Box sx={{backgroundColor:'rgb(154, 75, 255)', fontSize:'20px', height:'30vh', width:'40vw', justifyContent:'center', display:'flex'}}>
                    {result['o']['description']}
                </Box>
            </Box>
            
        </>
    )
}

export default Results;