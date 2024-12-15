import { useState } from 'react'
import CommentList from './CommentList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CommentList />
    </div>
  )
}

export default App
