import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import EditorPage from './components/EditorPage';
import { Toaster } from 'react-hot-toast';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div>
      <Toaster position='top-right'></Toaster>
    </div>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/editor/:roomId' element={<EditorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
