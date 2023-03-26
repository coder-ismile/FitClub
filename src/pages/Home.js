import React,{useState} from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercise from '../components/SearchExercise'
import Exericise from '../components/Exericise'
const Home = () => {
  const[bodyPart, setBodyPart]= useState('all')
  const[exercises, setExercises]= useState([])

  return (
 <Box>
    <HeroBanner/>
    <SearchExercise 
            setExercises={setExercises} 
            bodyPart={bodyPart} 
            setbodyPart={setBodyPart} />

    <Exericise 
            setexercises={setExercises} 
            bodyPart={bodyPart} 
            setbodyPart={setBodyPart} />
 </Box>
  )
}

export default Home
