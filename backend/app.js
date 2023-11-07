const express = require('express');
const  cors=require("cors")
const app = express();
// const PORT = process.env.PORT || 3000;
const details=require("./routers/routing")
// const loginid=require ("./routers/login")
const corsOption=require("./middleware/corscontroler")
// const value=require("../frontend/app/src/sample")



app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(cors(corsOption))

app.use("/subdir",details)







app.listen(4000, () => {
 console.log('Server is running on PORT:',4000);
});

