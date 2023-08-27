import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'
import TheHeader from '../components/TheHeader.tsx'

const AnonymousLayout: React.FC = () => {
  return (
    <div>
      <TheHeader/>
      <Container maxWidth="lg">
        <main>
          <Outlet/>
        </main>
        <footer>
          Este es el pie de página para visitantes.
        </footer>
      </Container>
    </div>
  )
}

export default AnonymousLayout
