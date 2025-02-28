import type { Request, Response } from 'express'

export const addUser = async (req: Request, res: Response): Promise<void> => {
  console.log('Received POST request to /api/users/add')
  res.send('User added successfully')
}

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  console.log('Received GET request to /api/users/all')
  res.send('All users retrieved')
}
