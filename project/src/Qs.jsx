import React from "react";
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Landing from "./Landing";
import Results from "./Results";

const points = {
  yes:0,
  no:0,
  unsure:0
}
const questions = [
  {
    Q:'Are you from Earth?'
  },
  {
    Q:'Are you currently or have ever lived in space? This means not on a planet'
  },
  {
    Q:'Do you like to help people?'
  },
  {
    Q:'Do you like to be told what to do?'
  },
  {
    Q:'Do you tend to take charge and tell people what to do?'
  },
  {
    Q:'Do you like interacting with other beings?'
  },
  {
    Q:'Do you like to plan and control everything?'
  },
  {
    Q:'Do you forget things often?'
  },
  {
    Q:'Are you usually careful?',
  },
  {
    Q:'Do you have strong opinions?'
  },
  {
    Q:'Do you argue with others?'
  },
  {
    Q:'Do you enjoy learning new things?'
  },
  {
    Q:'Do you tend to overthink or worry?'
  },
  {
    Q:'Are you quick to trust people?'
  },
  {
    Q:'Do you prefer to stay home or go out?'
  },
  {
    Q:'Would you consider yourself creative?'
  },
  {
    Q:'Do you like to explore?'
  },
  {
    Q:'Would you consider yourself a risk-taker?'
  },
  {
    Q:'Do you tend to voice your opinions?'
  },
  {
    Q:'Are you able to sympathize or empathise with others?'
  },
  {
    Q:'Do you handle multitasking well?'
  },
]


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

const buttonStyle = {
  color:'white',
  backgroundColor: 'rgb(154, 75, 255)',
  '&:hover': {
  backgroundColor: 'indigo'
  },
  fontSize: '25px',
  fontFamily: 'Inknut Antiqua',
  textTransform: 'capitalize',
  width: '30vw',
  height: '10vh'
}

const answersStyle = {
  color:'white', 
  flexDirection:'column', 
  height:'50vh', 
  display:'flex', 
  alignItems:'center', 
  gap:'50px', 
  justifyContent:'center'
}

const numStyle = {
  height:'15vh', 
  width:'15vw', 
  display:'flex', 
  justifyContent:'center' ,
  color:'white',
  fontFamily: 'Inkut Antiqua',
  fontSize:'20px',
  paddingTop:'20px'
  }

function Qs () {
  const [back, setBack] = React.useState(false)
  const [num, setNum] = React.useState(0)

  function nextQ (ans) {
    let newNum = num+1;
    setNum(newNum)
    points[ans] += 1
    console.log(points)
  }

  if (back === true) {
    return (
      <>
        <Landing/>
      </>
    )
  }

  if (num === 21) {
    return (
      <>
        <Results answers={points} />
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
        <Box sx={numStyle}>
              Q{num+1} of 21
            </Box>
            <Box sx={answersStyle}>
              <Box sx={{fontSize: '40px', fontFamily:'Inkut Antiqua'}}>
                {questions[num]['Q']}
              </Box>
              <div>
                <Button variant="text" sx={buttonStyle} onClick={() =>{nextQ('yes')}}>Yes</Button>
              </div>
              <div>
                <Button variant="text" sx={buttonStyle} onClick={() =>{nextQ('unsure')}}>Unsure</Button>
              </div>
              <div>
                <Button variant="text" sx={buttonStyle} onClick={() =>{nextQ('no')}}>No</Button>
              </div>
            </Box>
      </>
  )
}

export default Qs;