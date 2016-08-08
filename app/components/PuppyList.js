import React from 'react'

const PuppyList = ({ puppies }) => (
  <div id="puppy-list">
    <h2>Our Puppies</h2>
    <ul>
      {puppies.map(puppy => (
        <li key={puppy.id}>{puppy.name}</li>
      ))}
    </ul>
  </div>
)

export default PuppyList
