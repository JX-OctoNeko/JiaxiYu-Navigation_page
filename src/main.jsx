import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SpeedInsights } from '@vercel/speed-insights/react'
import {Analytics} from '@vercel/analytics/react'

import './index.css'
import CVHomeWrapper from './Combine'
// import CVHome from './NormalCV'
// import CVHome from './AcademicCV'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CVHomeWrapper />
    <SpeedInsights />
    <Analytics />
  </StrictMode>,
)
