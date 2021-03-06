import { useState } from 'react'

//1.6
/*
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>
        Good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        Neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        Bad
      </button>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  )
}
*/

//1.7
/*
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>
        Good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        Neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        Bad
      </button>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {good + neutral + bad}</p>
      <p>Average: {(good + neutral + bad) / 3}</p>
      <p>Positive: {((good + neutral) / (good + neutral + bad))*100} %</p>
    </div>
  )
}
*/

//1.8
/*
// Statistics Component
const Statistics = (props) => {
  return (
    <div>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>All: {props.all}</p>
      <p>Average: {props.average}</p>
      <p>Positive: {props.positive}</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>
        Good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        Neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        Bad
      </button>
      <h2>Statistics</h2>
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        all={good + neutral + bad}
        average={(good + neutral + bad) / 3}
        positive={((good + neutral) / (good + neutral + bad))*100} 

      />
    </div>
  )
}
*/ 

//1.9
/*
// Statistics Component
const Statistics = (props) => {
  console.log(typeof props.feedback)
  if (props.good === 0 && props.neutral === 0 && props.bad === 0)
  return (
    <div><p>No feedback given {props.feedback}</p></div>
  )
  if (props.good !== 0 || props.neutral !== 0 || props.bad !== 0) 
  return (
    <div>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>All: {props.all}</p>
      <p>Average: {props.average}</p>
      <p>Positive: {props.positive}</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>
        Good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        Neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        Bad
      </button>
      <h2>Statistics</h2>
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        all={good + neutral + bad}
        average={(good + neutral + bad) / 3}
        positive={((good + neutral) / (good + neutral + bad))*100} 
        feedback=""
      />
    </div>
  )
}
*/

//1.10
/*
const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)
  
const StatisticLine = (props) => (
  <p>{props.text} {props.value}</p>
)
 
const Statistics = (props) => {
  console.log(typeof props.feedback)
  if (props.good === 0 && props.neutral === 0 && props.bad === 0)
  return (
    <div><p>No feedback given {props.feedback}</p></div>
  )
  if (props.good !== 0 || props.neutral !== 0 || props.bad !== 0)
  return (
    <div>
    <StatisticLine text="Good:" value={props.good} />
    <StatisticLine text="Neutral:" value={props.neutral} />
    <StatisticLine text="Bad:" value={props.bad} />
    <StatisticLine text="All:" value={props.all} />
    <StatisticLine text="Average:" value={props.average} />
    <StatisticLine text="Positive:" value={props.positive} />
    </div>
  )
} 

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text="Bad"/>
      <h2>Statistics</h2>
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        all={good + neutral + bad}
        average={(good + neutral + bad) / 3}
        positive={((good + neutral) / (good + neutral + bad))*100} 
        feedback=""
      />
    </div>
  )
}
*/ 

//1.11
/*
const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)
  
const StatisticLine = (props) => (
  <p>{props.text} {props.value}</p>
)
 
const Statistics = (props) => {
  console.log(typeof props.feedback)
  if (props.good === 0 && props.neutral === 0 && props.bad === 0)
  return (
    <div><p>No feedback given {props.feedback}</p></div>
  )
  if (props.good !== 0 || props.neutral !== 0 || props.bad !== 0)
  return (
    <div>
      <tr>
        <td><StatisticLine text="Good:" value={props.good} /></td>
      </tr>
      <tr>
        <td><StatisticLine text="Neutral:" value={props.neutral} /></td>
      </tr>
      <tr>
        <td><StatisticLine text="Bad:" value={props.bad} /></td>
      </tr>
      <tr>
        <td><StatisticLine text="All:" value={props.all} /></td>
      </tr>
      <tr>
        <td> <StatisticLine text="Average:" value={props.average} /></td>
      </tr>
      <tr>
        <td><StatisticLine text="Positive:" value={props.positive} /></td>
      </tr>
    </div>
  )
} 

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text="Bad"/>
      <h2>Statistics</h2>
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        all={good + neutral + bad}
        average={(good + neutral + bad) / 3}
        positive={((good + neutral) / (good + neutral + bad))*100} 
        feedback=""
      />
    </div>
  )
}
*/ 

//1.12
/*
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
  };

  return (
    <div>
      {anecdotes[selected]}
      <br></br><br></br>
      <button onClick={handleCLick}>Next Anecdote</button>
    </div>
  )
}
*/ 

//1.13

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