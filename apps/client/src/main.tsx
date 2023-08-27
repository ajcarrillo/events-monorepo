import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider
} from 'react-router-dom'
import './index.css'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme.tsx'
import router from './Router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>
)
