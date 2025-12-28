import React from 'react'
import TransportHero from './TransportHero'
import TransportServices from './TransportService'
import TransportNavbar from './TransportNavbar'
import TransportLocation from './TransportLocation'
import TransportFAQs from './TransportFAQs'
import TransportContactForm from './TransportContactForm'
import TransportFooter from './TransportFooter'

const Transport = () => {
  return (
    <div>
      <TransportNavbar />
      <TransportHero />
      <TransportServices />
      <TransportFAQs />
      <TransportLocation />
      <TransportContactForm />
      <TransportFooter />

    </div>
  )
}

export default Transport
