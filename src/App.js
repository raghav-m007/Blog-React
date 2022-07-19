import TopBar from "./components/topbar/TopBar";
import Home from "./components/pages/home/Home";
import Write from "./components/pages/write/Write";
import Setting from "./components/pages/settings/Settings";
import Single from "./components/pages/single/Single";
import Login from "./components/pages/login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/register/Register";


function App() {
  const currentUser = false;

  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/posts" element={<Home/>}/>
        <Route path="/register" element = {currentUser ? <Home/>:<Register/>}/>
        <Route path="/login" element = {currentUser ? <Home/>:<Login/>}/>

        <Route path="/post/:id" element={<Single/>}/>
        <Route path="/write" element = {currentUser ? <Write/>:<Login/>}/>
        <Route path="/settings" element = {currentUser ? <Setting/>:<Login/>}/>

      </Routes>
    </Router>
  );
}

export default App;
