import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { LandingPage } from './pages/landingpage'
import { ProjectsPage } from './pages/projects'
import { ServicesPage } from './pages/Services'
import { PageNotFound } from './utilities/PageNotFound'

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:projectId" element={<ProjectsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceCategory" element={<ServicesPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App