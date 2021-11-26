import { Request, Response, } from 'express'

type controllerType = (req: Request, res: Response) => any

const testRecipes = {
  recipes: [
    {
      title: 'Papitas al horno',
      preparation: 'alsfdjlasjfwerj',
      ingredients: [
        'papas', 'cebolla', 'agua'
      ],
      video: 'www.youtube.com'
    },
    {
      title: 'Papitas al horno',
      preparation: 'alsfdjlasjfwerj',
      ingredients: [
        'papas', 'cebolla', 'agua'
      ],
      video: 'www.youtube.com'
    },
    {
      title: 'Papitas al horno',
      preparation: 'alsfdjlasjfwerj',
      ingredients: [
        'papas', 'cebolla', 'agua'
      ],
      video: 'www.youtube.com'
    }
  ]
}


export const randomRecipes: controllerType = (req, res) => {
  res.status(200).json(testRecipes)
}

export const newRandomRecipes: controllerType = (req, res) => {
  res.status(200).json(testRecipes)
}