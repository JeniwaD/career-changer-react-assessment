import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './vite.svg'
import './App.css'
import Navbar from "./Navbar"
// import HomeAdmin from "./HomeAdmin"
// import HomeUser from "./HomeUser"

function App() {
  const [currentPage, setCurrentPage] = useState('homeuser');


  return(
    <>
    <Navbar />
    </>
  );
}

export default App;