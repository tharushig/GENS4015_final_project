import React from "react";
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Landing from "./Landing";
import Results from "./Results";

const questions = [
  "Are you from Earth?",
  "Are you currently or have ever lived in space? This means not on a planet.",
  "Do you like to help people?",
  "Do you like to be told what to do?",
  "Do you tend to take charge and tell people what to do?",
  "Do you like interacting with other beings?",
  "Do you like to plan and control everything?",
  "Do you forget things often?",
  "Are you usually careful?",
  "Do you have strong opinions?",
  "Do you argue with others?",
  "Do you enjoy learning new things?",
  "Do you tend to overthink or worry?",
  "Are you quick to trust people?",
  "Do you prefer to go out rather than stay home?",
  "Would you consider yourself creative?",
  "Do you like to explore?",
  "Would you consider yourself a risk-taker?",
  "Do you tend to voice your opinions?",
  "Are you able to sympathize or empathize with others?",
  "Do you handle multitasking well?"
];


const pointAssignments = {
  o: 0,
  e: 0,
  a: 0,
  c: 0,
  n: 0
};

const oQs = [5, 10, 15, 16, 19];
const cQs = [6, 7, 11, 16, 17, 18, 20];
const eQs = [2, 4, 7, 12, 14, 15];
const aQs = [2, 4, 8, 9, 14, 15, 19];
const nYesQs = [0, 1, 3, 13];
const nNoQs = [0, 1, 3, 13];

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
  fontFamily: 'Papyrus',
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
  fontFamily: 'Copperplate',
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
  fontFamily: 'Copperplate',
  fontSize:'25px',
  paddingTop:'20px'
}

function Qs () {
  const [back, setBack] = React.useState(false)
  const [num, setNum] = React.useState(0)
  
  React.useEffect(() => {
    pointAssignments['o'] = 0
    pointAssignments['e'] = 0
    pointAssignments['a'] = 0
    pointAssignments['n'] = 0
    pointAssignments['c'] = 0
  }, [])

  function yesQ () {
    if (aQs.includes(num)) {
      pointAssignments['a'] += 1
    }
    if (oQs.includes(num)) {
      pointAssignments['o'] += 1
    }
    if (cQs.includes(num)) {
      pointAssignments['c'] += 1
    }
    if (eQs.includes(num)) {
      pointAssignments['e'] += 1
    }
    if (nYesQs.includes(num)) {
      pointAssignments['n'] += 1
    }
    nextQ()
    
  }

  function NoQ () {
    if (nNoQs.includes(num)) {
      pointAssignments['n'] -= 1
    }
    nextQ()
  }
  
  function Unsure () {
    nextQ()
  }

  function nextQ () {
    let newNum = num+1;
    setNum(newNum)
  }

  if (back === true) {
    return (
      <>
        <Landing/>
      </>
    )
  }


  if (back === true) {
    return (
      <>
        <Landing/>
      </>
    )
  }

  if (num===21) {
    return (
      <>
        <Results answers={pointAssignments} />
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
              <Box sx={{fontSize: '40px', fontFamily:'Copperplate', textAlign:'center', width:'70vw'}}>
                {questions[num]}
              </Box>
              <div>
                <Button variant="text" sx={buttonStyle} onClick={yesQ}>Yes</Button>
              </div>
              <div>
                <Button variant="text" sx={buttonStyle} onClick={Unsure}>Unsure</Button>
              </div>
              <div>
                <Button variant="text" sx={buttonStyle} onClick={NoQ}>No</Button>
              </div>
            </Box>
      </>
  )
}

export default Qs;