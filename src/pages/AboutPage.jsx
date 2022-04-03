import React from 'react'
import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This is a React app to leave feedback for a product and services</p>
        <p>Version:1.0.0</p>
        <p>
          <Link to="/">Back To Home</Link>
        </p>
        <h3> <small>&copy; Copyright 2022, KrishnaSagar</small></h3>
      </div>
    </Card>
  )
}

export default AboutPage