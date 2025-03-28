import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Portofolio from "./Pages/Portofolio";
import ChatBot from "./Pages/ChatBot";
import Notfound from "./Pages/Notfound";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/Portofolio" element={<Portofolio/>}></Route>
        <Route path="/ChatBot" element={<ChatBot/>}></Route>
        <Route path="*" element={<Notfound/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;