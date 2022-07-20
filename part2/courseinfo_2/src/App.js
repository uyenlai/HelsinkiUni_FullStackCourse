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

const App = (props) => {
  const { courses } = props 
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