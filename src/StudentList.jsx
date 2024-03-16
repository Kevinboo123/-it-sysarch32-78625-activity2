import React from "react";
import Student from "./Student";
import "./index.css";

const studentsData = [
  { 
    photo: "", 
    name: "", 
    email: "" 
  },
  { 
    photo: "", 
    name: "", 
    email: "" 
  },
  { 
    photo: "", 
    name: "", 
    email: "" 
  },
  { 
    photo: "", 
    name: "", 
    email: "" 
  },
  { 
    photo: "", 
    name: "", 
    email: "" 
  },
  { 
    photo: "", 
    name: "", 
    email: "" 
  },
  { 
    photo: "", 
    name: "", 
    email: "" 
  },
  { 
    photo: "", 
    name: "", 
    email: "" 
  }
];

const StudentList = () => {
  return (
    <div className="student-list">
      {studentsData.map((student, index) => (
        <Student key={index} photo={student.photo} name={student.name} email={student.email} />
      ))}
    </div>
  );
};

export default StudentList;
