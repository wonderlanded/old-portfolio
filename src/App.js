import React, {useState} from 'react';

import Page from './pages/Main'

function App() {
  const [Dark, setDark] = useState(localStorage.dark)
  const [DrawerVisable, setVisable] = useState(false)

  return (
    <div>
      <Page darkmode={Dark} setDark={setDark} drawerVisable={DrawerVisable} setVisable={setVisable}/>
    </div>  
    
  )
}

export default App;
