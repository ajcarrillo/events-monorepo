import React from 'react'
import { AppBar, Box, Button, Container, Toolbar } from '@mui/material'

const pages = ['Inicio', 'Eventos']
const TheHeader: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <header>
      <AppBar>
        <Container maxWidth="xl">
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  variant="text"
                  fullWidth={false}
                  color="secondary"
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  )
}

export default TheHeader
