const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <p>{props.part} {props.exercise}</p>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
       <Part part={props.part1} exercise={props.exercises1}/>
       <Part part={props.part2} exercise={props.exercises2}/>
       <Part part={props.part3} exercise={props.exercises3}/>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
       <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <h1>{course}</h1>
      <p>{part1.name} {part1.exercises}</p>
      <p>{part2.name} {part2.exercises}</p>
      <p>{part3.name} {part3.exercises}</p>
      <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
    </div>
  )
}

export default App