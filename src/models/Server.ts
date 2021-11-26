import express, { Express } from 'express'
import cors from 'cors'
import recipesRouter from '../recipes/recipes.routes'

class Server {
  port: string
  app: Express
  constructor() {
    this.port = process.env.PORT || '8080'
    this.app = express()
    this.endPoints()
  }

  middlewares() {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }

  endPoints() {
    this.app.use('/api/recipes', recipesRouter)
  }

  excecute() {
    this.middlewares()
    this.app.listen(this.port, () => {
      console.log(`Server on port ${this.port}`);      
    })
  }

}

export default Server