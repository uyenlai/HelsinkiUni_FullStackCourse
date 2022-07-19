const Header = ( {name} ) => <h1>{name}</h1>

const Part = ( {part} ) => 
<p>
  {part.name} {part.exercises}
</p>

const Content = ({ parts }) => {
  const list = parts.map(function(item, index) {
    return (
      <div key = {index}>
        <Part part={item}/>
      </div>
    )
  })
  return list
}

const Total = ({ sum }) => <p>Total of {sum} exercises</p>

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts} />
      <Total sum={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>  
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
      }
    ]
  }

  return(
    <div>
      <Course course={course}/>
    </div>
  )
}
export default App