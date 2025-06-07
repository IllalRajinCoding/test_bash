import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portofolio from "./Pages/Portofolio";
import Notfound from "./Pages/Notfound";
import Blog from "./Pages/Blog";
import WriteBlog from "./components/WriteBlog";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portofolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:category" element={<WriteBlog />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
};

export default App;
