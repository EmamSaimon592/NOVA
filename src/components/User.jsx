// pass Object

const User = ({ skills }) => {

  return (
    <>
      {
        skills.map((skill, index) => (
          <li key={index}>
              
            {skill}

          </li>
        ))
      }
    </>
  );
}

export default User; 


