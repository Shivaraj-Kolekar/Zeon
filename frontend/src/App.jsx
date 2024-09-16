import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'

function App () {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>
          Assest Management is <span className='line-through'>Hard</span>{' '}
          <span className='underline-offset-8 underline text-blue-400'>
            Easy
          </span>
        </h1>

        <Button>Yodh </Button>
      </div>
    </>
  )
}

export default App
