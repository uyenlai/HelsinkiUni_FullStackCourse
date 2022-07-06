import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  const [selected, setSelected] = useState(0)

  function randomNumInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const handleCLick = () => {
    setSelected(randomNumInRange(0, 6))
  }

  const [voted, setVoted] = useState([0,0,0,0,0,0,0])

  const updateVotes = () => {
    const copy = [...voted]
    copy[selected] += 1
    setVoted(copy)
  }

  const handleVote = () => {
    setVoted(voted + 1)
  }

  return (
    <div>
      {anecdotes[selected]}
      <p>has {voted[selected]} votes</p>
      <button onClick={updateVotes}>Vote</button>
      <button onClick={handleCLick}>Next Anecdote</button>
    </div>
  )
}

export default App