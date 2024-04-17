import React from "react";
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import Landing from "./Landing";

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

const buttonStyle = {
    color:'white',
    backgroundColor: 'rgb(154, 75, 255)',
    '&:hover': {
    backgroundColor: 'indigo'
    },
    fontSize: '17px',
    fontFamily: 'Inknut Antiqua',
    textTransform: 'capitalize',
    width: '10vw',
    height: '9vh',
    position: 'relative',
    left: '85%'
    
  }

  const headerStyle = {
    backgroundColor:'rgb(154, 75, 255)',
    width:'100vw', 
    height:'15vh', 
    
  }
    const headerTextStyle = {
    height:'15vh', 
    width:'15vw', 
    display:'flex', 
    alignItems:'center', 
    justifyContent:'center',
    color:'white',
    fontFamily: 'Irish Grover',
    textTransform: 'capitalize',
    fontSize:'25px'
    }

function Results (answers) {
    const [back, setBack] = React.useState(false)
    console.log(answers)
    if (back === true) {
      return (
        <>
          <Landing />
        </>
      )
    }

    return (
        <>
            <Box sx={headerStyle}>
                <Box>
                    <div>
                    <Button variant="text" onClick={() => {setBack(true)}} sx={headerTextStyle}>Purposeful</Button>
                    </div>
                </Box>
            </Box>
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', height:'70vh', gap:'40px'}}>
                <Box sx={{fontSize:'40px'}}>
                    You have the personality trait of {result['o']['name']}!!
                </Box>
                <Box sx={{backgroundColor:'rgb(154, 75, 255)', fontSize:'20px', height:'30vh', width:'40vw', justifyContent:'center', display:'flex'}}>
                    {result['o']['description']}
                </Box>
            </Box>
            <Button variant="contained" sx={buttonStyle} onClick={() => {setBack(true)}}>Back to home</Button>
        </>
    )
}

export default Results;