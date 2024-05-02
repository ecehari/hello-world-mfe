import { useEffect, useRef } from 'react'
import './App.css'
import mount from 'helloworld/HelloWorld';

function App() {
  const helloWorldDiv = useRef<HTMLDivElement|null>(null);

  useEffect(() => {
    mount(helloWorldDiv.current)
  })

  return (
    <>
     <p>This is the container</p>
     <div ref="helloWorldDiv"></div>
    </>
  )
}

export default App
