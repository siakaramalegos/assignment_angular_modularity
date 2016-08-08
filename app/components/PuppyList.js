import React from 'react'
import Puppy from './Puppy'

const PuppyList = ({ puppies }) => (
  <div id="puppy-list">
    <ul>
      {puppies.map(puppy => (
        <Puppy
          key={puppy.id}
          {...puppy} />
      ))}
    </ul>
  </div>
)

export default PuppyList
