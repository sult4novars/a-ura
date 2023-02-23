import { object, string, type ObjectSchema } from 'yup'

import { type SignInFormType } from './SignIn'

const defaultStringSchema = string().min(1).max(100).defined()

export const schemaSignIn: ObjectSchema<SignInFormType> = object({
  login: defaultStringSchema,
  password: defaultStringSchema,
})
