import Home from './Components/Home/Home.jsx';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Restriction from './Components/Restriction.jsx';
import Aboutus from './Components/About/Aboutus.jsx';
import Signin from './Components/Acount/Signin.jsx';
import Signup from './Components/Acount/Signup.jsx';
import Post from './Components/Create/Post.jsx';
import Profile from './Components/Create/Profile.jsx';
import Blog from './Components/Display/Blog.jsx';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Signin' element={<Signin/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Restriction' element={<Restriction/>}/>
      <Route path='/About' element={<Aboutus/>}/>
      <Route path='/Contribute' element={<Post/>}/>
      <Route path='/Profile' element={<Profile/>}/>
      <Route path='/Explore' element={<Blog/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;
