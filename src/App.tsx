import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>E Spy System V7.0.0</h1>
      <p>This is New Products Page For Version 3.0.0</p>

      <p>A Add Spy-Bird</p>

      <p>MAM Add Spy</p>

      <p>Man Test Move to Progress.</p>
      <div className="card">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm-12.293-2.707a1 1 0 0 1-.207-1.09l2-7A1 1 0 0 1 7.414 7H19a1 1 0 0 1 .97 1.243l-2 7A1 1 0 0 1 17 16H7a1 1 0 0 1-.707-.293zM7.82 9l-1.6 5.6h9.56l1.6-5.6H7.82z"/>
          </svg>
          Cart
        </button>
        <button  onClick={() => setCount((count) => count + 1)}>
          + new agents : {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className='read-the-docs'>
        Bugs Here. <br />
        V6.0.0 here <br />
        V6.0.1 here
      </p>
      <p className='read-the-docs'>
        Test Github Workflows Here. <br />
        Add Jobs Build to Workflows. <br />
        Add needs lint to build.
      </p>
    </>
  )
}

export default App
