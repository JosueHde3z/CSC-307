// // backend.js
// import express from "express";

// const app = express();
// const port = 8000;

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(
//     `Example app listening at http://localhost:${port}`
//   );
// });
// /////////////////////////////////////////////////////////
// // backend.js
// import express from "express";

// const app = express();
// const port = 8000;
// const users = {
//     users_list: [
//       {
//         id: "xyz789",
//         name: "Charlie",
//         job: "Janitor"
//       },
//       {
//         id: "abc123",
//         name: "Mac",
//         job: "Bouncer"
//       },
//       {
//         id: "ppp222",
//         name: "Mac",
//         job: "Professor"
//       },
//       {
//         id: "yat999",
//         name: "Dee",
//         job: "Aspring actress"
//       },
//       {
//         id: "zap555",
//         name: "Dennis",
//         job: "Bartender"
//       }
//     ]
//   };
// app.use(express.json());

// // app.get("/", (req, res) => {
// //   res.send("Hello World!");
// // });
// app.get("/users", (req, res) => {
//     res.send(users);
//   });
// app.listen(port, () => {
//   console.log(
//     `Example app listening at http://localhost:${port}/users"`
//   );
// });
// /////////////////////////////////////////////////////////
// // backend.js
// import express from "express";

// const app = express();
// const port = 8000;
// const users = {
//     users_list: [
//       {
//         id: "xyz789",
//         name: "Charlie",
//         job: "Janitor"
//       },
//       {
//         id: "abc123",
//         name: "Mac",
//         job: "Bouncer"
//       },
//       {
//         id: "ppp222",
//         name: "Mac",
//         job: "Professor"
//       },
//       {
//         id: "yat999",
//         name: "Dee",
//         job: "Aspring actress"
//       },
//       {
//         id: "zap555",
//         name: "Dennis",
//         job: "Bartender"
//       }
//     ]
//   };

// const findUserByName = (name) => {
//     return users["users_list"].filter(
//         (user) => user["name"] === name
//     );
// };
// app.use(express.json());
  
// app.get("/users", (req, res) => {
// const name = req.query.name;
// if (name != undefined) {
//     let result = findUserByName(name);
//     result = { users_list: result };
//     res.send(result);
// } else {
//     res.send(users);
// }
// });

// app.listen(port, () => {
//   console.log(
//     `Example app listening at http://localhost:${port}/users"`
//   );
// });
// /////////////////////////////////////////////////////////
// // backend.js
// import express from "express";

// const app = express();
// const port = 8000;
// const users = {
//     users_list: [
//       {
//         id: "xyz789",
//         name: "Charlie",
//         job: "Janitor"
//       },
//       {
//         id: "abc123",
//         name: "Mac",
//         job: "Bouncer"
//       },
//       {
//         id: "ppp222",
//         name: "Mac",
//         job: "Professor"
//       },
//       {
//         id: "yat999",
//         name: "Dee",
//         job: "Aspring actress"
//       },
//       {
//         id: "zap555",
//         name: "Dennis",
//         job: "Bartender"
//       }
//     ]
//   };

// const findUserByName = (name) => {
//     return users["users_list"].filter(
//         (user) => user["name"] === name
//     );
// };
  
// const findUserById = (id) =>
//   users["users_list"].find((user) => user["id"] === id);

// app.use(express.json());

// app.get("/users/:id", (req, res) => {
//   const id = req.params["id"]; //or req.params.id
//   let result = findUserById(id);
//   if (result === undefined) {
//     res.status(404).send("Resource not found.");
//   } else {
//     res.send(result);
//   }
// });

// app.listen(port, () => {
//   console.log(
//     `Example app listening at http://localhost:${port}/users"`
//   );
// });
// /////////////////////////////////////////////////////////
// // backend.js
// import express from "express";
// import cors from "cors";

// const app = express();
// const port = 8000;
// const users = {
//     users_list: [
//       {
//         id: "xyz789",
//         name: "Charlie",
//         job: "Janitor"
//       },
//       {
//         id: "abc123",
//         name: "Mac",
//         job: "Bouncer"
//       },
//       {
//         id: "ppp222",
//         name: "Mac",
//         job: "Professor"
//       },
//       {
//         id: "yat999",
//         name: "Dee",
//         job: "Aspring actress"
//       },
//       {
//         id: "zap555",
//         name: "Dennis",
//         job: "Bartender"
//       }
//     ]
//   };

// const findUserByName = (name) => {
//     return users["users_list"].filter(
//         (user) => user["name"] === name
//     );
// };
  
// const findUserById = (id) =>
//   users["users_list"].find((user) => user["id"] === id);

// const addUser = (user) => {
//     users["users_list"].push(user);
//     return user;
// };

// const delUser = (id) => {
//   // Find the user index by ID
//   const index = users["users_list"].findIndex((user) => user.id === id);
  
//   // If the user exists, remove it from the array
//   if (index !== -1) {
//     const deletedUser = users["users_list"].splice(index, 1)[0]; // Remove the user and get the deleted user
//     return deletedUser;
//   } else {
//     return null; // User not found
//   }
// };

// //Adding search all for matching job/name
// const findUsersByNameAndJob = (name, job) => {
//   return users["users_list"].filter(
//     (user) => user.name === name && user.job === job
//   );
// }

// app.post("/users", (req, res) => {
//     const userToAdd = req.body;
//     addUser(userToAdd);
//     res.status(201).send(); //setting the response status code to 201
// });

// app.use(cors());

// app.use(express.json());
// //Delete function
// app.delete("/users/:id", (req, res) => {
//   const id = req.params.id;
//   const deletedUser = delUser(id);
//   if (deletedUser !== null) {
//     res.send(`User with ID ${id} has been deleted.`);
//   } else {
//     res.status(404).send("User not found.");
//   }
// });

// app.get("/", (req, res) => {
//     res.send("Hello World!");
//   });

// // app.get("/users", (req, res) => {
// //     const name = req.query.name;
// //     if (name != undefined) {
// //         let result = findUserByName(name);
// //         result = { users_list: result };
// //         res.send(result);
// //     } else {
// //         res.send(users);
// //     }
// // });

// app.get("/users", (req, res) => {
//   const name = req.query.name;
//   const job = req.query.job;

//   if (name !== undefined && job !== undefined) {
//     let result = findUsersByNameAndJob(name, job);
//     result = { users_list: result };
//     res.send(result);
//   } else if (name !== undefined) {
//     let result = findUserByName(name);
//     result = { users_list: result };
//     res.send(result);
//   } else {
//     res.send(users);
//   }
// });

// app.get("/users/:id", (req, res) => {
//   const id = req.params["id"]; //or req.params.id
//   let result = findUserById(id);
//   if (result === undefined) {
//     res.status(404).send("Resource not found.");
//   } else {
//     res.send(result);
//   }
// });

// app.listen(port, () => {
//   console.log(
//     `Example app listening at http://localhost:${port}"`
//   );
// });
// /////////////////////////////////////////////////////////
// backend.js
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

const port = 8000;
const users = {
  users_list: [
    {
      id: "xyz789",
      name: "Charlie",
      job: "Janitor",
    },
    {
      id: "abc123",
      name: "Mac",
      job: "Bouncer",
    },
    {
      id: "ppp222",
      name: "Mac",
      job: "Professor",
    },
    {
      id: "yat999",
      name: "Dee",
      job: "Aspring actress",
    },
    {
      id: "zap555",
      name: "Dennis",
      job: "Bartender",
    },
  ],
};

const findUserByName = (name) => 
{
  return users["users_list"].filter((user) => user["name"] === name);
};

const findUserById = (id) => 
{
  users["users_list"].find((user) => user["id"] === id);
};

const addUser = (user) => 
{
  const newUser = 
  {
    id: generateId(), // Generate random ID
    ...user,
  };
  users["users_list"].push(newUser);
  return newUser;
};

const delUser = (id) => 
{
  // Find the user index by ID
  const index = users["users_list"].findIndex((user) => user.id === id);

  // If the user exists, remove it from the array
  if (index !== -1) //-1 means no user found so if it find something delete it
  {
    const deletedUser = users["users_list"].splice(index, 1)[0]; // Remove the user and get the deleted user
    // const deletedUser = users["users_list"].splice(index, 1); // Remove the user and get the deleted user
    return deletedUser;
  } 
  else 
  {
    return null; // User not found
  }
};

// ID generator function
const generateId = () => 
{
  return Math.random().toString(36).substr(2, 9); // Generate random alphanumeric ID
};

// Adding search all for matching job/name
const findUsersByNameAndJob = (name, job) => 
{
  return users["users_list"].filter((user) => user.name === name && user.job === job);
};

app.post("/users", (req, res) => 
{
  const userToAdd = req.body;
  const newUser = addUser(userToAdd);
  res.status(201).send(newUser); // Setting the response status code to 201 and sending the newly created user
});



app.delete("/users/:id", (req, res) => 
{
  const id = req.params.id;
  const deletedUser = delUser(id);
  if (deletedUser !== null) 
  {
    res.status(204).send(`User with ID ${id} has been deleted.`);
  } 
  else 
  {
    res.status(404).send("User not found.");
  }
});

app.get("/", (req, res) => 
{
  res.send("Hello World!");
});

app.get("/users", (req, res) => 
{
  const name = req.query.name;
  const job = req.query.job;

  if (name !== undefined && job !== undefined) 
  {
    let result = findUsersByNameAndJob(name, job);
    result = { users_list: result };
    res.send(result);
  } 
  else if (name !== undefined) 
  {
    let result = findUserByName(name);
    result = { users_list: result };
    res.send(result);
  } 
  else 
  {
    res.send(users);
  }
});

app.get("/users/:id", (req, res) => 
{
  const id = req.params["id"]; //or req.params.id
  let result = findUserById(id);
  if (result === undefined) 
  {
    res.status(404).send("Resource not found.");
  } 
  else 
  {
    res.send(result);
  }
});

app.listen(port, () => 
{
  console.log(`Example app listening at http://localhost:${port}`);
});
/////////////////////////////////////////////////////////