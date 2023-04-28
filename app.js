express = require("express");
mongoose = require("mongoose");
routes = require("./controllers/routes.js");

mongoose.connect('mongodb://127.0.0.1:27017/').then(()=>{
    console.log('Connected to database');
}).catch(err =>{
    console.log("error in database connection", err.message);
});

const app = express();
app.use(express.json());
app.use(routes);

app.listen(8090, () => {
    console.log('server listening on port 8090');
})
