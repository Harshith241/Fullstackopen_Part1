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
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = (props) => {
  const parts = props.parts
  return(
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
      <Part name={parts[2].name} exercises={parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  const parts = props.parts
  return (
    <div>
      <p>Total number of exercises:- {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </div>
  )
}


//components for the parts are below
const Part = (props) => {
  return(
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}


export default App

//in 1.4 ex i learnt that props cannot be treated as an array like props[0], instead it should be treated as an object at all times.
