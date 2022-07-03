import { useState } from 'react'

// Statistics Component
const Statistics = (props) => {
  console.log(props);
  if (props.good === 0 && props.neutral === 0 && props.bad === 0)
  return (
    <div>{props.feedback}</div>
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
        feedback="No feedback given"
      />
    </div>
  )
}

export default App