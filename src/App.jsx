import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Form from './register.jsx';
import Next from './login.jsx';
import Navbar from './nav';
import Home from './home.jsx';

function App() {

  return (
    <>
      <Router>
       <Navbar></Navbar>
        <Routes>
        <Route path='/' element={<Home></Home>}/>
          <Route path='/form' element={<Form></Form>}/>
          <Route path='/next' element={<Next></Next>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
