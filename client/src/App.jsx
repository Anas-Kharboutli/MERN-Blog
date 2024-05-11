import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, About, Dashboard, SignIn, SignUp, Projects, Header, FooterComponent } from "./pages/exports";

const App = () => {
  return (
    <BrowserRouter>

    <Header />
    
    <Routes>

      <Route path='/'          element={<Home />} />
      <Route path='/about'     element={<About />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/signin'    element={<SignIn />} />
      <Route path='/signup'    element={<SignUp />} />
      <Route path='/projects'  element={<Projects />} />

    </Routes>

    <FooterComponent />
    
    </BrowserRouter>
  )
}

export default App
