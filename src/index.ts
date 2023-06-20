import express from 'express';
import {DB_DATA} from "./db/db";
import userRouter from "./users/userRouter";

const PORT = 5001;

const app = express();

// app.use(express.json())

// Add here your routes
app.use('/users', userRouter)

app.get('/', (req, res) => {
  res.status(200).json('Server running')
})

async function startApp() {
  try {
    await DB_DATA.connect()
    console.log('Successful connection to the database')
    app.listen(PORT, () => console.log('Server started successfully'))
  } catch (e) {
    console.log(e)
  }
}

startApp();