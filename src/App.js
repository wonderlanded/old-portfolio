import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Page from './pages/Main'

function App() {
  const [Dark, setDark] = useState(localStorage.dark)
  const [DrawerVisable, setVisable] = useState(false)

  return (
    <div>
      <Navbar darkmode={Dark} setDark={setDark} drawerVisable={DrawerVisable} setVisable={setVisable} />
      <Page darkmode={Dark} setDark={setDark} drawerVisable={DrawerVisable} setVisable={setVisable}/>
    </div>
    
  )
}

export default App;
