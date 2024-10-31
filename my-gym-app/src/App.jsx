import React , {useState} from 'react'
import Generator from './components/Generator.jsx'
import Workout from './components/Workout.jsx'
import Title from './components/Title.jsx'
import SectionWrapper from './components/SectionWrapper.jsx'

function App() {

  return (
    <>
      <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
        <Title />
        <Generator />
        <Workout />
      </main>
    </>
  )
}

export default App
