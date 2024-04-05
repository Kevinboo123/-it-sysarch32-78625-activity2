import React from "react";
import Student from "./student";
import "./index.css";

const studentsData = [
  { 
    photo: "https://imgs.search.brave.com/mITpIZLywNGTye5UEq22mvlVOB9LMGy8B6yDft9Z31s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy84/LzhkL0pha2VfUGF1/bF8yMDE5LmpwZw", 
    name: "WALDO", 
    email: "waldo@gmail.com" 
  },
  { 
    photo: "https://imgs.search.brave.com/6XuZyKnYwrcQ6K-ozGjtoyFJiOVyzMLMh7NC8n56oYs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wZW9w/bGUuY29tL3RobWIv/alE3U1otYWRxQkNt/Vk0zY2lpWW5xX0VZ/SzJBPS8xNTAweDAv/ZmlsdGVyczpub191/cHNjYWxlKCk6bWF4/X2J5dGVzKDE1MDAw/MCk6c3RyaXBfaWNj/KCk6Zm9jYWwoNzk5/eDA6ODAxeDIpL2ph/a2UtZnJvbS1zdGF0/ZS1mYXJtLTItZmVj/MWQyNTMxM2U0NGQ4/MzhiMDJhYjEyNWRj/MGRjYWEuanBn", 
    name: "bornok", 
    email: "bornakels@gmail.com" 
  },
  { 
    photo: "https://imgs.search.brave.com/ONqvABYG0VZVdto3HoHBTrY8tNt_3pbEkzgJPinV_aU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzEzLzU0LzYw/LzM2MF9GXzEzNTQ2/MDMyX0dHQ1VPZEk3/dXVrWEZGSEIyZkdt/c1pKZ2RoeW14TXo0/LmpwZw", 
    name: "washingsi", 
    email: "wash@gmail.com" 
  },
  { 
    photo: "https://imgs.search.brave.com/V4H35XkK4meB19ShDg_Teaq41X_3tH51bJtwCrhIt_I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODYx/MTI2NDc4L3Bob3Rv/L2Jyb3duLXN1Z2Fy/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz10dmoydG5XdmJf/ZkJVcF9WRjRmRjhV/MEx6RjdOb1ZWNXEy/LUNHWnA5ZFBrPQ", 
    name: "sugar", 
    email: "sugar@gmail.com" 
  },
 
  { 
    photo: "https://imgs.search.brave.com/zgfekW77eR0mbe3AmeZCm-ESr0we0nayWyJaxr1CtNI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI4/ODk1MDI4OS9waG90/by9ncmVlbi1wYXBh/eWEtZnJ1aXQtYXQt/cGFwYXlhLWZpZWxk/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1qWEtrOEZXakJ1/aVNMU3ZBZVRvRmRU/dEJmbXQ4SFZ3amJn/amhacHRWX1lNPQ", 
    name: "kapayas", 
    email: "kap@gmail.com" 
  },
  { 
    photo: "https://imgs.search.brave.com/rGuH1WEcKxMJwdX2Xwf2rDnTPV7vt_s-ylDxz-BogYU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9sYXlv/dXQtYmFja2dyb3Vu/ZC1qYXZhLWFwcGxl/LWZydWl0LXRhbWJp/cy1sYXlvdXQtYmFj/a2dyb3VuZC1qYXZh/LWFwcGxlLWZydWl0/LXRhbWJpcy0xNzgy/NDI1NDYuanBn", 
    name: "tambis   ", 
    email: "tam@gmail.com" 
  },
  { 
    photo: "https://imgs.search.brave.com/hQZYTtdNaYJlFoHIkDDAjIxRiLiOKFN0kKyF-VPbasg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDU4/NjE3NzE3L3Bob3Rv/L2FwcGxlLWluYy1s/b2dvLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1sVTd5SWZQ/OUM0RlRzbmRlQWxu/em5raFowUjhsc1Ni/ODZtd3V0U2M2UmU0/PQ", 
    name: "apple", 
    email: "app@gmail.com" 
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
