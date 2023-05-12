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
    user:"BD_411227",
    password:"st8735",
    connectionString:"(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = dbmanage.lab.ii.agh.edu.pl)(PORT = 1521))(CONNECT_DATA =(SID= DBMANAGE)))"
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

app.get("/seances/:id", async (req, res) => {
    const conn = await connect();
    const query = `select * from BD_411227.SEATS_PER_SEANCE_ID(${req.params.id})`;

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

const authRoute = require('./auth')
app.use("/auth", authRoute)

const userRoute = require('./user')
app.use("/user", userRoute)

app.listen(port, function () {
    console.log("Backend API listening on port " + port)
})