import React from 'react'

const Puppy = ({ name, breed, created_at}) => {
  const createdAt = new Date(created_at)

  return (
    <li>
      <strong>{name}</strong> ({breed.name}), checked in on {createdAt.toLocaleDateString()} at {createdAt.toLocaleTimeString()}
    </li>
  )
}

export default Puppy
