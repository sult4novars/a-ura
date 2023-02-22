import { object, string, ref, type ObjectSchema } from 'yup'

import { type SignUpFormType } from './SignUp'

const defaultStringSchema = string().min(1).max(100).defined()

export const schemaSignUp: ObjectSchema<SignUpFormType> = object({
  login: defaultStringSchema,
  password: defaultStringSchema,
  cpassword: defaultStringSchema.oneOf([ref('password')], 'Пароли должны совпадать'),
})
