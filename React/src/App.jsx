import { BrowserRouter, Routes,Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Landing from "./pages/Landing"

function App() {
  
  
  return (
    <div>
      <div>
        <button onClick={()=>{
            window.location.href="/";
        }}> Landing</button>

        <button onClick={()=>{
          window.location.href="/dashboard";
        }}> Dashboard</button>


      </div>
 
    <BrowserRouter>
    <Routes>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/" element={<Landing/>}></Route>
    </Routes>
    </BrowserRouter>

       </div>
  )
}

export default App
