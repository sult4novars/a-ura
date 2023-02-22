import { yupResolver } from '@hookform/resolvers/yup'
import { Grid, Button } from '@nextui-org/react'
import { useForm, FormProvider } from 'react-hook-form'

import { FormWrap } from 'components/FormWrap'
import { Input } from 'components/Input'

import { schemaSignIn } from './schemaSignIn'

export type SignInFormType = {
  login: string
  password: string
}

export const SignIn = () => {
  const methods = useForm<SignInFormType>({ resolver: yupResolver(schemaSignIn) })
  const onSubmit = (data: any) => console.log(data)

  return (
    <FormWrap title={'Anime-ura (A-URA): Вход'} formName={'Вход'}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Grid>
            <Input<SignInFormType> name='login' placeholder='Логин' bordered />
          </Grid>
          <Grid>
            <Input<SignInFormType> name='password' placeholder='Пароль' bordered />
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
