import { useState } from 'react'
import ContainerPrincipal from './containers/ConntainerPrincipal'


function App() {
  const [count, setCount] = useState(0)

  return (
    <><ContainerPrincipal></ContainerPrincipal></>
  )
}

export default App
