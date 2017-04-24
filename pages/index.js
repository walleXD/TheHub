import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import Navbar from '../components/Navbar'

const Index = () => (
  <DefaultLayout>
  	<Navbar />
    <h1>Its working</h1>
    <p>Hurrah!</p>
    <h2>DO this!</h2>
    <style jsx>{`
      div{
      	background-color: #121212;
      	height: 20
      }
    `}</style>
  </DefaultLayout>
)

export default Index
