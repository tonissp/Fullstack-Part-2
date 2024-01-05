const HeaderOne = ({ course }) => <h1>{course}</h1>
const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ parts }) => {
  let initialValue = 0
  const partS = parts.map(pard => pard.exercises) 
  const sum = partS.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  )

  return <p><b>total of {sum} exercises</b></p>
}

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
  return parts.map(pard => <Part key={pard.id} part={pard}/>)
}
 
const Course = ({course}) => {
return (
    <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
    </div>
    )
}

const Coursess = ({courses}) => {
  return (
    courses.map(pard => <Course key={pard.id} course={pard}/>)
  )
}

const Courses = ({courses}) => {
    return (
        <div>
            <HeaderOne course='Web development curriculum' />
            <Coursess courses={courses} />
        </div>
    )
  }

export default Courses