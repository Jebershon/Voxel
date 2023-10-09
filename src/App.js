import 'bootstrap/dist/css/bootstrap.min.css';
import Bloggenerate from './Components/Bloggenerate.jsx';
import Contact from './Components/Contact.jsx';
import Head from './Components/Header';
import Search from './Components/Search.jsx';
function App() {
  return (
    <>
       <Head/>
       <Bloggenerate/>
       <Search/>
       <br/>
       <Contact/>
    </>
  )
}
export default App;
