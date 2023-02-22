import { object, string } from 'zod'

export const createUserSchema = object({
  body: object({
    email: string({
      required_error: 'Email is required',
    }).email({
      message: 'Email is invalid',
    }),
    name: string({
      required_error: 'Name is required',
    }),
    password: string({
      required_error: 'Password is required'
    }).min(6, {
      message: 'Password must be at least 6 characters',
    }),
    passwordConfirmation: string({
      required_error: 'Password confirmation is required'
    }),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: 'Password confirmation does not match password',
    path: ['passwordConfirmation'],
  }),
})
