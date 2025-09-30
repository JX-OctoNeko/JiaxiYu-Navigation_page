import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import CVHomeWrapper from './Combine'
// import CVHome from './NormalCV'
// import CVHome from './AcademicCV'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CVHomeWrapper />
  </StrictMode>,
)
