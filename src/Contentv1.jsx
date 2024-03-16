import React from "react";
import Student from './Student';
const students = [
  { photo: "https://i.pinimg.com/236x/b3/90/5a/b3905a7d640a16790cca9c0b418b821b.jpg", name: "Tzuyu", email: "tzuyu@email.com" },
  { photo: "https://i.pinimg.com/736x/ff/94/c1/ff94c1d1c918f71ddfa6057bffd13508.jpg", name: "Sana", email: "sana@email.com" },
  { photo: "https://i.pinimg.com/564x/90/d4/ce/90d4cebef84cc07df008f1d50a91492a.jpg", name: "Jihyo", email: "jihyo@email.com" },
  { photo: "https://i.pinimg.com/736x/09/14/07/0914079a18541e72902bf8113dbe61fc.jpg", name: "Dahyun", email: "dahyun@email.com" },
  { photo: "https://i.pinimg.com/736x/a2/bb/2c/a2bb2ca724849a949d9da69f14f8a684.jpg", name: "Chaeyoung", email: "chaeyoung@email.com" },
  { photo: "https://i.pinimg.com/564x/8c/d0/a1/8cd0a1acf7342324d5736517bbfab212.jpg", name: "Momo", email: "momo@email.com" },
  { photo: "https://i.pinimg.com/236x/86/ef/38/86ef38991242205a8cdc0609fba24116.jpg", name: "Mina", email: "minag@email.com" },
  { photo: "https://i.pinimg.com/736x/6c/7e/b0/6c7eb014dc917072c4e05006e588780b.jpg", name: "Nayeon", email: "nayeon@email.com" },
  { photo: "https://i.pinimg.com/236x/fe/70/6e/fe706e03b6d38af6fbf70a433c3cda69.jpg", name: "Jeongyeon", email: "Jeongyeon@email.com" }
];

const Contentv1 = () => {
    const studentComponents = [];
    
    for (let i = 0; i < students.length; i++) {
      const student = students[i];
      studentComponents.push(<Student key={i} photo={student.photo} name={student.name} email={student.email} />);
    }
  
    return <div>{studentComponents}</div>;
};

export default Contentv1