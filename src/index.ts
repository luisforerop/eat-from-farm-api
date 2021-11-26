import Server from "./models/Server";
import { config } from 'dotenv'
config()
const app = new Server()
app.excecute()