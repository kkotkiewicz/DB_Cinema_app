const express = require("express");
const bodyParser = require('body-parser'); 
const cors = require('cors');
const port = 4000;

let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const oracledb = require("oracledb");
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const params = {
    user:"***",
    password:"***",
    connectionString:"***"
};
  
const connect = async () => {
    try {
      const connection = await oracledb.getConnection({ ...params });
      return connection;
    } catch (error) {
      console.error(`[ERROR] ${error}`);
    }
};

app.get("/movies", async (req, res) => {
    const conn = await connect();
    const query = "select * from MOVIES";

    conn?.execute(query, [], { autoCommit: true }, (error, result) => {
        if (error) {
          return res.status(500).json({
            message: error.message,
            error,
          });
        } else {
          return res.status(201).json(result.rows);
        }
    });
})

app.get("/movies/:id", async (req, res) => {
    const conn = await connect();
    const query = `select * from BD_411227.SEANCES_PER_MOVIE_ID(${req.params.id})`;

    conn?.execute(query, [], { autoCommit: true }, (error, result) => {
        if (error) {
          return res.status(500).json({
            message: error.message,
            error,
          });
        } else {
            return res.status(201).json(result.rows);
        }
    });
})

app.get("/seances/:id", (req, res) => {
    res.send({ seats: [{id: 0, taken:true}, {id: 1, taken:false}, {id: 2, taken:false}, {id: 3, taken:false}, {id: 4, taken:false}, {id: 5, taken:true}]})
})

const authRoute = require('./auth')
app.use("/auth", authRoute)

const userRoute = require('./user')
app.use("/user", userRoute)

app.listen(port, function () {
    console.log("Backend API listening on port " + port)
})