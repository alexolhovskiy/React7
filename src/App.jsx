import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home/home';
import { UserItem } from './components/UserItem/userItem';
import {About} from './components/About/about';
import {Registration} from './components/Registration/registration'

function App() {

    return (
      <BrowserRouter>
        <Routes>
          <>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/registration' element={<Registration/>}/>
            <Route path='/item/:id' element={<UserItem/>}/>
          </>
        </Routes>
      </BrowserRouter>
    )
}

export default App
