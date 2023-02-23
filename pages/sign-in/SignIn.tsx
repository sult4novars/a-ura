import { yupResolver } from '@hookform/resolvers/yup'
import { Grid, Button } from '@nextui-org/react'
import { useForm, FormProvider } from 'react-hook-form'

import { FormWrap, Input, PageWrap } from 'components'

import { schemaSignIn } from './schemaSignIn'

export type SignInFormType = {
  login: string
  password: string
}

export const SignIn = () => {
  const methods = useForm<SignInFormType>({ resolver: yupResolver(schemaSignIn) })
  const onClick = (data: any) => console.log(data)

  return (
    <PageWrap textAfterTitleColon='Вход'>
      <FormWrap title='Вход'>
        <FormProvider {...methods}>
          <Grid>
            <Input<SignInFormType> fullWidth name='login' placeholder='Логин' bordered />
          </Grid>
          <Grid>
            <Input<SignInFormType> fullWidth name='password' placeholder='Пароль' bordered />
          </Grid>
          <Grid>
            <Button style={{ width: '100%' }} type='submit' onClick={methods.handleSubmit(onClick)}>
              Войти
            </Button>
          </Grid>
        </FormProvider>
      </FormWrap>
    </PageWrap>
  )
}
