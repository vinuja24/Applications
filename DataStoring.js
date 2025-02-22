
// // const express = require('express');
// // const app = express();


// // app.get('/', (req, res) => {
// //     res.sendFile(__dirname + '/index.html');
// // });


// // app.post('/submit', (req, res) => {
// //     res.send('Form submitted successfully!');
// // });

// // // Start server
// // const port = 3000;
// // app.listen(port, () => console.log(`Server running on port ${port}`));



// const express = require('express');
// const bodyParser = require('body-parser');

// const axios=require('axios');
// const app = express();
// const port = 5000;


// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static('public'));
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });
// app.post('/submit', (req, res) => {
//     const { username, password, mobile, email } = req.body;
//     const userdata={
//         username,
//         password,
//         mobile,
//         email
//     }
    
// axios.post("http://localhost:3000/users",userdata).then(data=>{
//     res.send("user data saved success")
// }).catch(err=>console.log("error saving the data",err))
// });
// //axios.post().then().catch()

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is listening at http://localhost:${port}`);
// });



// const express = require('express');
// const bodyParser = require('body-parser');

// const axios=require('axios');
// const app = express();
// const port = 5000;


// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static('public'));
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });
// app.post('/submit', (req, res) => {
//     const { username, password, mobile, email } = req.body;
//     const userdata={
//         username,
//         password,
//         mobile,
//         email
//     }
   
// axios.post("http://localhost:3000/users",userdata).then(data=>{
//     res.send("user data saved success")
// }).catch(err=>console.log("error saving the data",err))
// });

// app.get("/getuser",(req,res)=>{

//     axios.get("http://localhost:3000/users").then(dbresponse=>{
//         res.json(dbresponse.data)
//     }).catch(err=>{
//         console.log(err)
//     })
// })

// app.post("/changePassword",(req,res)=>{

// const{id,pass}=req.body;
// const password={
//     pass
// }

// console.log(password);

// axios.patch(`http://localhost:3000/users/${id}`,password).then(dbresponse=>{
//     res.send("password updated")
// }).catch(err=>console.log(err))


// })


// //axios.post().then().catch()

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is listening at http://localhost:${port}`);
// });

// app.post("/changePassword",(req,res)=>{

// const{id,pass}=req.body;
// const password={
//     pass
// }

// console.log(password);

// axios.patch(`http://localhost:3000/users/${id}`,password).then(dbresponse=>{
//     res.send("password updated")
// }).catch(err=>console.log(err))


// })


// //axios.post().then().catch()

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is listening at http://localhost:${port}`);
// });




// const express = require('express');
// const bodyParser = require('body-parser');
// const axios = require('axios');
// const app = express();
// const port = 5000;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

// app.post('/submit', (req, res) => {
//     const { username, password, mobile, email } = req.body;
//     const userdata = {
//         username,
//         password,
//         mobile,
//         email
//     };

//     axios.post("http://localhost:3000/users", userdata)
//         .then(data => {
//             res.send("User data saved successfully");
//         })
//         .catch(err => {
//             console.log("Error saving the data", err);
//         });
// });

// app.get("/getuser", (req, res) => {
//     axios.get("http://localhost:3000/users")
//         .then(dbresponse => {
//             res.json(dbresponse.data);
//         })
//         .catch(err => {
//             console.log(err);
//         });
// });

// app.post("/changeUserData", (req, res) => {
//     const { id, password, email } = req.body;
//     const dataToUpdate = {};

//     if (password) {
//         dataToUpdate.password = password;
//     }

//     if (email) {
//         dataToUpdate.email = email;
//     }

//     axios.patch(`http://localhost:3000/users/${id}`, dataToUpdate)
//         .then(dbresponse => {
//             res.send("Password and/or email updated");
//         })
//         .catch(err => {
//             console.log(err);
//         });
// });


// // Start the server
// app.listen(port, () => {
//     console.log(`Server is listening at http://localhost:${port}`);
// });




const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
    const { username, password, mobile, email } = req.body;
    const userdata = {
        username,
        password,
        mobile,
        email
    };

    axios.post("http://localhost:3000/users", userdata)
        .then(data => {
            res.send("User data saved successfully");
        })
        .catch(err => {
            console.log("Error saving the data", err);
        });
});

app.get("/getuser", (req, res) => {
    axios.get("http://localhost:3000/users")
        .then(dbresponse => {
            res.json(dbresponse.data);
        })
        .catch(err => {
            console.log(err);
        });
});

app.post("/changeUserData", (req, res) => {
    const { id, password, email } = req.body;
    const dataToUpdate = {};

    if (password) {
        dataToUpdate.password = password;
    }

    if (email) {
        dataToUpdate.email = email;
    }

    axios.patch(`http://localhost:3000/users/${id}`, dataToUpdate)
        .then(dbresponse => {
            res.send("Password and/or email updated");
        })
        .catch(err => {
            console.log(err);
        });
});

app.delete("/deleteMobile", (req, res) => {
    const { id } = req.body;

    axios.get(`http://localhost:3000/users/${id}`)
        .then(response => {
            const userData = response.data;
            // Delete the mobile number from the user data
            delete userData.mobile;

            // Update the user data with the deleted mobile number
            axios.put(`http://localhost:3000/users/${id}`, userData)
                .then(() => {
                    res.send("Mobile number deleted successfully");
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).send("Error deleting mobile number");
                });
        })
        .catch(err => {
            console.log(err);
            res.status(404).send("User not found");
        });
});


// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
