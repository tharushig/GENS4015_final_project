import React from "react";
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Qs from "./Qs";


const buttonStyle = {
  color:'white',
  backgroundColor: 'rgb(154, 75, 255)',
  '&:hover': {
  backgroundColor: 'indigo'
  },
  fontSize: '35px',
  fontFamily: 'Inknut Antiqua',
  textTransform: 'capitalize',
  fontWeight: 'bold',
  width: '20vw',
  height: '15vh'
}
const boxStyle = {
  flexDirection:'column',
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  height:'75vh',
  gap: '100px',
  fontSize: '60px',
  color: 'white',
  fontFamily: 'Inknut Antiqua',
  fontWeight: 'bold',
  backgroundColor: 'rgb(53, 52, 52)'
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

function Landing () {
    const [start, setStart] = React.useState(false)
    if (start === true) {
      return (
        <>
          <Qs />
        </>
      )
    }
    return (
    <>
      <Box sx={headerStyle}>
          <Box sx={headerTextStyle}>
            <div>
            <Button variant="text" sx={headerTextStyle}>Purposeful</Button>
            </div>
          </Box>
          
      </Box>
      <Box sx={boxStyle}>
            <div>
              Start your search to finding yourself!
            </div>
            <div>
              <Button variant="contained" sx={buttonStyle} onClick={() => {setStart(true)}}>Start</Button>
            </div>
          </Box>  
    </>
    
    );
}

export default Landing;