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
// ///////////////////////////////////////////////////////////////////////////////
// // import React, { useState } from "react";
// import React, {useState, useEffect} from 'react';
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

//   function fetchUsers() {
//     const promise = fetch("http://localhost:8000/users");
//     return promise;
//   }
  
//   useEffect(() => {
//     fetchUsers()
//       .then((res) => res.json())
//       .then((json) => setCharacters(json["users_list"]))
//       .catch((error) => { console.log(error); });
//   }, [] );

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
// ///////////////////////////////////////////////////////////////////////////////
// // import React, { useState } from "react";
// import React, { useState, useEffect } from 'react';
// import Table from "./Table";
// import Form from "./Form";

// function MyApp() {
//   const [characters, setCharacters] = useState([]);

//   function removeOneCharacter(index) {
//     const updated = characters.filter((character, i) => i !== index);
//     setCharacters(updated);
//   }

//   function updateList(person) {
//     postUser(person)
//       .then((response) => {
//         if (response.status === 201) {
//           // User created successfully, update the state
//           return response.json();
//         } else {
//           throw new Error('Failed to create user');
//         }
//       })
//       .then((json) => setCharacters([...characters, json]))
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   }

//   function fetchUsers() {
//     return fetch("http://localhost:8000/users")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch users');
//         }
//         return response.json();
//       });
//   }

//   function postUser(person) {
//     return fetch("http://localhost:8000/users", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(person),
//     });
//   }

//   useEffect(() => {
//     fetchUsers()
//       .then((json) => setCharacters(json["users_list"]))
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   }, []);

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
// ///////////////////////////////////////////////////////////////////////////////
// // import React, { useState } from "react";
// import React, { useState, useEffect } from 'react';
// import Table from "./Table";
// import Form from "./Form";

// function MyApp() {
//   const [characters, setCharacters] = useState([]);

//   function removeOneCharacter(index) {
//     const updated = characters.filter((character, i) => i !== index);
//     setCharacters(updated);
//   }

//   function updateList(person) {
//     postUser(person)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Failed to create user');
//         }
//         return response.json();
//       })
//       .then((json) => {
//         // Attach the newly added JSON object to the state
//         setCharacters([...characters, json]);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   }

//   function fetchUsers() {
//     return fetch("http://localhost:8000/users")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch users');
//         }
//         return response.json();
//       });
//   }

//   function postUser(person) {
//     return fetch("http://localhost:8000/users", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(person),
//     });
//   }

//   useEffect(() => {
//     fetchUsers()
//       .then((json) => setCharacters(json["users_list"]))
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   }, []);

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
// ///////////////////////////////////////////////////////////////////////////////
// // import React, { useState } from "react";
// import React, { useState, useEffect } from 'react';
// import Table from "./Table";
// import Form from "./Form";

// function MyApp() {
//   const [characters, setCharacters] = useState([]);

//   // function removeOneCharacter(index) {
//   //   const updated = characters.filter((character, i) => i !== index);
//   //   setCharacters(updated);
//   // }

//   function removeOneCharacter(id) {
//     // Make an HTTP DELETE request to the server
//     fetch(`http://localhost:8000/users/${id}`, {
//       method: 'DELETE'
//     })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error('Failed to delete user');
//       }
//       // Filter out the deleted character from the state
//       const updated = characters.filter((character) => character.id !== id);
//       setCharacters(updated);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
//   }

//   function updateList(person) {
//     postUser(person)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Failed to create user');
//         }
//         return response.json();
//       })
//       .then((json) => {
//         // Attach the newly added JSON object to the state
//         setCharacters([...characters, json]);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   }

//   function fetchUsers() {
//     return fetch("http://localhost:8000/users")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch users');
//         }
//         return response.json();
//       });
//   }

//   function postUser(person) {
//     return fetch("http://localhost:8000/users", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(person),
//     });
//   }

//   useEffect(() => {
//     fetchUsers()
//       .then((json) => setCharacters(json["users_list"]))
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   }, []);

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
// import React, { useState, useEffect } from 'react';
// import Table from "./Table";
// import Form from "./Form";

// function MyApp() {
//   const [characters, setCharacters] = useState([]);

//   function removeOneCharacter(id) 
//   {
//     // Make an HTTP DELETE request to the server
//     fetch(`http://localhost:8000/users/${id}`, {method: 'DELETE'})
//       .then((response) => 
//         {
//           if (response.status === 204) 
//           {
//             // Delete operation successful, filter out the deleted character from the state
//             const updated = characters.filter((character) => character.id !== id);
//             setCharacters(updated);
//           } 
//           else if (response.status === 404) 
//           {
//             console.log('User not found.');
//           } 
//           else 
//           {
//             throw new Error('Failed to delete user');
//           }
//         }
//       )
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   }

//   function updateList(person) 
//   {
//     postUser(person)
//       .then((response) => 
//       {
//         if (!response.ok) 
//         {
//           throw new Error('Failed to create user');
//         }
//         return response.json();
//       })
//       .then((json) => 
//       {
//         // Attach the newly added JSON object to the charater
//         setCharacters([...characters, json]);
//       })
//       .catch((error) => 
//       {
//         console.error('Error:', error);
//       });
//   }

//   function fetchUsers() 
//   {
//     return fetch("http://localhost:8000/users")
//       .then((response) => 
//       {
//         if (!response.ok) 
//         {
//           throw new Error('Failed to fetch users');
//         }
//         return response.json();
//       });
//   }

//   function postUser(person) 
//   {
//     return fetch("http://localhost:8000/users", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(person),
//     });
//   }

//   useEffect(() => {
//     fetchUsers()
//       .then((json) => setCharacters(json["users_list"]))
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   }, []);

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
////////////////////////////
// export default MyApp;
import React, { useState, useEffect } from 'react';
import Table from "./Table";
import Form from "./Form";

function MyApp() {
  const [characters, setCharacters] = useState([]);

  function removeOneCharacter(id) {
    // Make an HTTP DELETE request to the server
    fetch(`http://localhost:8000/users/${id}`, { method: 'DELETE' })
      .then((response) => {
        if (response.status === 204) {
          // Delete operation successful, filter out the deleted character from the state
          const updated = characters.filter((character) => character._id !== id);
          setCharacters(updated);
        } else if (response.status === 404) {
          console.log('User not found.');
        } else {
          throw new Error('Failed to delete user');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  function updateList(person) {
    postUser(person)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to create user');
        }
        return response.json();
      })
      .then((json) => {
        // Attach the newly added JSON object to the character
        setCharacters([...characters, json]);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  function fetchUsers() {
    return fetch("http://localhost:8000/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        return response.json();
      });
  }

  function postUser(person) {
    return fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(person),
    });
  }

  useEffect(() => {
    fetchUsers()
      .then((json) => setCharacters(json["users_list"]))
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

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
