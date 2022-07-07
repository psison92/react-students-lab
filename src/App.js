import './App.css';
import { useState } from 'react';
import { studentList } from './data';
import StudentList from './StudentList';

function App() {
  // initialize state 
  const [students, setStudents] = useState(studentList)
  return (
      // passing state down as props
    <div>
      <StudentList students={students} />
    </div>
  );
}

export default App;
