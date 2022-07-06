//Exercise 1.5
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  const listItems = props.course.parts.map(function(element) {
    return (
      <div>
        <p>{element.name}: {element.exercises}</p>
      </div>
      )
  })
  return listItems
}

const Total = (props) => {
  var sum = 0
  const listItems = props.course.parts.map(function(element) {
    return (
      sum = sum + element.exercises
    )
  })
  return (
    <div>
       <p>Number of exercises: {sum}</p>
    </div>
  )
}

export default App