import React from 'react'
import Puppy from './Puppy'

const PuppyList = ({ puppies }) => (
  <div id="puppy-list">
    <h2>Our Puppies</h2>
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
