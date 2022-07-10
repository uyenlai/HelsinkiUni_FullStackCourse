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
export default App