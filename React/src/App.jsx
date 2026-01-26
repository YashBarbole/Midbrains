import { BrowserRouter, Routes,Route, useNavigate } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Landing from "./pages/Landing"

function App() {
  return (
    
    <div>

    <BrowserRouter>

    <Appbar></Appbar>

    <Routes>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/" element={<Landing/>}></Route>
    </Routes>

    </BrowserRouter>

       </div>
  )


function Appbar(){
  
const navigate= useNavigate();

return <div>
       <div>  <button onClick={()=>{
        navigate("/");
        }}> Landing</button>

        <button onClick={()=>{
         navigate("/dashboard");
        }}> Dashboard</button>
        </div>
      </div>
  }
}

export default App
