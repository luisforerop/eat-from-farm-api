import  { Router } from 'express'
import { newRandomRecipes, randomRecipes } from './recipes.controller'

const recipesRouter = Router()

recipesRouter.route('/')
  .get(randomRecipes)

recipesRouter.route('/new')
  .get(newRandomRecipes)

export default recipesRouter
