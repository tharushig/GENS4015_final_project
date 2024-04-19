import React from "react";
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import Landing from "./Landing";

const result = {
    o: {
        name: 'Openness',
        description: 'You are curious and love to deep dive and learn more about things that interest you. You are also someone who has a creative flair and thinks outside the box. You are great at problem-solving and often use your imagination for such problems or just for fun. You are considered to be intelligent and have a wide knowledge base.'
    },
    e: {
        name: 'Extraversion',
        description: 'You are a social butterfly. You love to go and interact with others and be in a public setting. You are charismatic, outgoing and always up for anything. You get along easily with others and tend to have aspects of assertiveness. You tend to take charge rather than sit back, and take life into your own hands.'
    },
    a: {
        name:'Agreeableness',
        description: 'You are very compassionate and understand others well. You are very easy to talk to and love helping people. You are quick to trust others and others find it easy to trust you. You value respect and treat everyone as equals. You are laid back and easy to please. You are often someone who gives advice.'
    },
    c: {
        name: 'Conscientiousness',
        description: 'You tend to lead and take charge. You are great at balancing tasks and are always on top of things. You are well organized and thrive on productivity. You are capable of handling stress and can take on many responsibilities without a sweat. You take control and plan ahead for the future.'
    },
    n: {
        name:'Neuroticism',
        description: 'You tend to be emotionally volatile and proned to anxiety and depression. But this doesn\'t mean that that is your fate. Because of this you are careful and wary. You tend to make choices that keep you and others safe. You consider the option with the least risk. You are conservative and keep to yourself.'
    }
}

const answerTextStyle = {
    textAlign:'left', 
    width:'35vw', 
    paddingTop:'3%', 
    lineHeight:'30px'
}

const answerBoxStyle = {
    backgroundColor:'rgb(154, 75, 255)', 
    fontSize:'22px', 
    height:'40vh', 
    width:'40vw', 
    justifyContent:'center', 
    display:'flex'
}

const buttonStyle = {
    color:'white',
    backgroundColor: 'rgb(154, 75, 255)',
    '&:hover': {
    backgroundColor: 'indigo'
    },
    fontSize: '15px',
    fontFamily: 'Copperplate',
    textTransform: 'capitalize',
    width: '10vw',
    height: '9vh',
    position: 'relative',
    left: '85%'
    
}

const resultHeaderStyle = {
    display:'flex', 
    alignItems:'center', 
    justifyContent:'center', 
    flexDirection:'column', 
    height:'70vh', 
    gap:'40px',
    fontFamily:'Copperplate',
    fontSize:'40px'
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
    fontFamily: 'Papyrus',
    textTransform: 'capitalize',
    fontSize:'25px'
}

function Results (answers) {
    const [back, setBack] = React.useState(false)
    if (back === true) {
        return (
            <>
          <Landing />
        </>
      )
    }

    let final = []
    let maxValue = -1000;
    for (let key in answers.answers) {
      if (answers.answers[key] > maxValue) {
        final = [key];
        maxValue = answers.answers[key];
      } else if (answers.answers[key] === maxValue) {
        final.push(key);
      }
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
            <Box sx={resultHeaderStyle}>
                <Box>
                    You have the personality trait of {result[final[0]]['name']}!!
                </Box>
                <Box sx={answerBoxStyle}>
                    <Box sx={answerTextStyle}>
                        {result[final[0]]['description']}
                    </Box>
                </Box>
            </Box>
            <Button variant="contained" sx={buttonStyle} onClick={() => {setBack(true)}}>Back to home</Button>
        </>
    )
}

export default Results;