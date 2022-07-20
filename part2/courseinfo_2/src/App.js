const Parts = ({ parts }) => {
  const list = parts.map(function(item) {
    return(
      <p key={item.id}>
        {item.name}: {item.exercises}
      </p>
    )
  })
  return list
}

const Total = ({ sum }) => {
  const total = sum.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue.exercises
  }, 0)
  return(
    <p>Total of {total} exercises</p>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return(
    <div>
      <h1>Web Development Curriculum</h1>
      <h2>{courses[0].name}</h2>
      <Parts parts={courses[0].parts}/>
      <Total sum={courses[0].parts} />
      <h2>{courses[1].name}</h2>
      <Parts parts={courses[1].parts}/>
      <Total sum={courses[1].parts} />
    </div>
  )
}
export default App