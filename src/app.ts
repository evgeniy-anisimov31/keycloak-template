import express from 'express';
import {keycloak} from './keycloak/keycloak';
import {DB_DATA} from "./db/db";
import userRouter from "./entities/users/userRouter";

const PORT = 5001;

const app = express();

app.set( 'trust proxy', true );
app.use( keycloak.middleware() );

app.use(express.json())

// Add here your routes
app.use('/users', userRouter)

app.get('/', (req, res) => {
  res.status(200).json('Server running')
})

async function startApp() {
  try {
    await DB_DATA.connect()
    console.log('Successful connection to the DB')
    app.listen(PORT, () => console.log('Server started'))
  } catch (e) {
    console.log(e)
  }
}

startApp();