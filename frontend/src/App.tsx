import { Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import { GeneralAppProvider } from "./Contexts/GeneralAppContext"

function App() {

  return (
    <GeneralAppProvider>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />}/>
        </Routes>
      </div>
    </GeneralAppProvider>
  )
}

export default App
