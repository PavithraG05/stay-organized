
import NavBar from './components/NavBar'
import Test from './components/Test'
import Register from './components/Register'
import AddTodo from './components/AddTodo'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import ToastMsg from './components/ToastMsg'
import ViewTodo from './components/ViewTodo'
import Home from './components/Home'
import PageNotFound from './components/PageNotFound'


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        
        <NavBar/>
        
          <Routes>
            <Route path="/" element ={<Home/>}/>
            <Route path="/addtodo" element ={<AddTodo/>}/>
            <Route path="/viewtodo" element ={<ViewTodo/>}/>
            <Route path="/register" element ={<Register/>}/>
            <Route path="*" element={<PageNotFound/>}/>
          </Routes>

        <ToastMsg/>
        {/* <Test/> */}
      </BrowserRouter>
    </div>
  )
}

export default App
