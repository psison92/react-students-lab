import ScoreList from "./ScoreList";

const StudentCard = ({student}) => {
  return (  
    <div className="student-card">
      <h2>{student.name}</h2>
      <p>{student.bio}</p>
      <ScoreList scores={student.scores}/>
    </div>
  )
}
 
export default StudentCard;