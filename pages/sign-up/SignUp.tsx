import { yupResolver } from '@hookform/resolvers/yup'
import { Grid, Button } from '@nextui-org/react'
import { useForm, FormProvider } from 'react-hook-form'

import { FormWrap } from 'components/FormWrap'
import { Input } from 'components/Input'

import { schemaSignUp } from './schemaSignUp'

export type SignUpFormType = {
  login: string
  password: string
  cpassword: string
}

export const SignUp = () => {
  const methods = useForm<SignUpFormType>({ resolver: yupResolver(schemaSignUp) })
  const onSubmit = (data: any) => console.log(data)

  return (
    <FormWrap title='Регистрация' formName='Регистрация'>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Grid>
            <Input<SignUpFormType> name='login' placeholder='Логин' bordered />
          </Grid>
          <Grid>
            <Input<SignUpFormType> name='password' placeholder='Пароль' bordered />
          </Grid>
          <Grid>
            <Input<SignUpFormType> name='cpassword' placeholder='Пароль' bordered />
          </Grid>
          <Grid>
            <Button style={{ width: '100%' }} type='submit'>
              Войти
            </Button>
          </Grid>
        </form>
      </FormProvider>
    </FormWrap>
  )
}
