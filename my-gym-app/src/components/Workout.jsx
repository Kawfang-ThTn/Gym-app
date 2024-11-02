import React from 'react'
import SectionWrapper from './SectionWrapper.jsx'
import ExerciseCard from './ExerciseCard.jsx'

function Workout(props) {

  const {workout} = props

  return (
    <SectionWrapper id={'workout'}
        header={"Welcome to"}
        title={["The", "Danger", "zone"]}>
          <div className='flex flex-col gap-4'>
            {workout.map((exercise , i) => {
              return (
                <ExerciseCard i={i} exercise={exercise} key={i} />
              )
            })}
          </div>
    </SectionWrapper>
  )
}

export default Workout
