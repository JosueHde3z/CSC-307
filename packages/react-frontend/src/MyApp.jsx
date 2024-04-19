// // src/MyApp.jsx
// import React from "react";

// function MyApp() {
//   return (
//     <div>
//       <h1>Hello, React!</h1>
//     </div>
//   );
// }
// export default MyApp;
///////////////////////////////////////////////////////////////////////////////
// src/MyApp.jsx
// import React from "react";
// import Table from "./Table";

// function MyApp() {
//   return (
//     <div className="container">
//       <Table />
//     </div>
//   );
// }
///////////////////////////////////////////////////////////////////////////////
// src/MyApp.jsx
// import React from "react";
// import Table from "./Table";

// const characters = [
//     {
//       name: "Charlie",
//       job: "Janitor"
//     },
//     {
//       name: "Mac",
//       job: "Bouncer"
//     },
//     {
//       name: "Dee",
//       job: "Aspring actress"
//     },
//     {
//       name: "Dennis",
//       job: "Bartender"
//     }
//   ];
  
//   function MyApp() {
//     return (
//         <div className="container">
//             <Table characterData={characters} />
//         </div>
//         );
//     }
// export default MyApp;
///////////////////////////////////////////////////////////////////////////////
// import React, { useState } from "react";
// import Table from "./Table";

// function MyApp() {
//   const [characters, setCharacters] = useState([
//     {
//       name: "Charlie",
//       job: "Janitor"
//     } // the rest of the data
//   ]);

//   return (
//     <div className="container">
//       <Table characterData={characters} />
//     </div>
//   );
// }
// export default MyApp;
// ///////////////////////////////////////////////////////////////////////////////
// import React, { useState } from "react";
// import Table from "./Table";

// function MyApp() {
//   const [characters, setCharacters] = useState([
//     {
//       name: "Charlie",
//       job: "Janitor" // the rest of the data
//     }
//   ]);

//   function removeOneCharacter(index) {
//     const updated = characters.filter((character, i) => {
//       return i !== index;
//     });
//     setCharacters(updated);
    
//   }
//   return (
//     <div className="container">
//       <Table
//         characterData={characters}
//         removeCharacter={removeOneCharacter}
//       />
//     </div>
//   );
// }
// export default MyApp;
// ///////////////////////////////////////////////////////////////////////////////
// import React, { useState } from "react";
// import Table from "./Table";

// function MyApp() {
//   const [characters, setCharacters] = useState([]);

//   function removeOneCharacter(index) {
//     const updated = characters.filter((character, i) => {
//       return i !== index;
//     });
//     setCharacters(updated);
    
//   }
//   return (
//     <div className="container">
//       <Table
//         characterData={characters}
//         removeCharacter={removeOneCharacter}
//       />
//     </div>
//   );
// }
// export default MyApp;
// ///////////////////////////////////////////////////////////////////////////////
// import React, { useState } from "react";
// import Table from "./Table";
// import Form from "./Form";

// function MyApp() {
//   const [characters, setCharacters] = useState([]);

//   function removeOneCharacter(index) {
//     const updated = characters.filter((character, i) => {
//       return i !== index;
//     });
//     setCharacters(updated);
    
//   }
//   return (
//     <div className="container">
//       <Table
//         characterData={characters}
//         removeCharacter={removeOneCharacter}
//       />
//       <Form />
//     </div>
//   );
// }
// export default MyApp;
// ///////////////////////////////////////////////////////////////////////////////
// import React, { useState } from "react";
// import Table from "./Table";
// import Form from "./Form";

// function MyApp() {
//   const [characters, setCharacters] = useState([]);

//   function removeOneCharacter(index) {
//     const updated = characters.filter((character, i) => {
//       return i !== index;
//     });
//     setCharacters(updated);
    
//   }
//   function updateList(person) {
//     setCharacters([...characters, person]);
//   }
//   return (
//     <div className="container">
//       <Table
//         characterData={characters}
//         removeCharacter={removeOneCharacter}
//       />
//       <Form handleSubmit={updateList} />
//     </div>
//   );
// }
// export default MyApp;
///////////////////////////////////////////////////////////////////////////////
// import React, { useState } from "react";
import React, {useState, useEffect} from 'react';
import Table from "./Table";
import Form from "./Form";

function MyApp() {
  const [characters, setCharacters] = useState([]);

  function removeOneCharacter(index) {
    const updated = characters.filter((character, i) => {
      return i !== index;
    });
    setCharacters(updated);
    
  }
  function updateList(person) {
    setCharacters([...characters, person]);
  }

  function fetchUsers() {
    const promise = fetch("http://localhost:8000/users");
    return promise;
  }
  
  useEffect(() => {
    fetchUsers()
      .then((res) => res.json())
      .then((json) => setCharacters(json["users_list"]))
      .catch((error) => { console.log(error); });
  }, [] );

  return (
    <div className="container">
      <Table
        characterData={characters}
        removeCharacter={removeOneCharacter}
      />
      <Form handleSubmit={updateList} />
    </div>
  );
}
export default MyApp;