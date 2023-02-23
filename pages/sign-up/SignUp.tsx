import { yupResolver } from '@hookform/resolvers/yup'
import { Grid, Button } from '@nextui-org/react'
import { useForm, FormProvider } from 'react-hook-form'

import { FormWrap, Input, PageWrap } from 'components'

import { schemaSignUp } from './schemaSignUp'

export type SignUpFormType = {
  login: string
  password: string
  confirmPassword: string
}

export const SignUp = () => {
  const methods = useForm<SignUpFormType>({ resolver: yupResolver(schemaSignUp) })
  const onSubmit = (data: SignUpFormType) => console.log(data)

  return (
    <PageWrap textAfterTitleColon='Регистрация'>
      <FormWrap title='Регистрация'>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Grid.Container gap={1}>
              <Grid xs={12}>
                <Input<SignUpFormType> name='login' placeholder='Логин' bordered fullWidth />
              </Grid>
              <Grid xs={12}>
                <Input<SignUpFormType> name='password' placeholder='Пароль' bordered fullWidth />
              </Grid>
              <Grid xs={12}>
                <Input<SignUpFormType>
                  name='confirmPassword'
                  placeholder='Пароль'
                  bordered
                  fullWidth
                />
              </Grid>

              <Grid xs={12}>
                <Button style={{ width: '100%' }} type='submit'>
                  Войти
                </Button>
              </Grid>
            </Grid.Container>
          </form>
        </FormProvider>
      </FormWrap>
    </PageWrap>
  )
}
