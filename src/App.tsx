// import { useState } from 'react'
import { Container, Stack, Typography } from '@mui/material'
import './App.css'
import { Logo } from './Logo'
import { Start } from './Start'
import { useQuestionsStore } from './store/questions'
import { Game } from './Game'

function App() {
  const questions = useQuestionsStore(state => state.questions)
  console.log(questions)

  return (
    <main>
       <Container maxWidth='sm' style={{backgroundColor:'#11a63d'}}>

          <Stack direction='row' gap={2} alignItems='center' justifyContent='center' marginBottom={2}>
            <Logo />
            <Typography variant='h2' component='h1'>
              Geography Quiz
            </Typography>
          </Stack>

{questions.length === 0 && <Start />}
{questions.length > 0 && <Game />}
          
      </Container>
       
    </main>
  )
}

export default App
