import StudentCard from "./StudentCard";

const StudentList = (props) => {
  return ( 
    <>
      {props.students.map(student => 
        // setting the key and passing down student data
        <StudentCard key={student.name} student={student} />
      )}
    </>
  )
}
 
export default StudentList;