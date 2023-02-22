import { yupResolver } from '@hookform/resolvers/yup'
import { Grid, Button, Card, Text } from '@nextui-org/react'
import Head from 'next/head'
import { useForm, FormProvider } from 'react-hook-form'

import { Input } from 'components/Input'

import { schemaSignIn } from './schemaSignIn'

export type SignInFormType = {
  login: string
  password: string
}

const data = {
  title: 'SignIn',
}

export const SignIn = () => {
  const methods = useForm<SignInFormType>({ resolver: yupResolver(schemaSignIn) })
  const onSubmit = (data: any) => console.log(data)

  return (
    <>
      <Head>
        <title>Anime-ura (A-URA): {data.title}</title>
      </Head>
      <Grid.Container
        css={{ height: 'calc(100vh - 76px)' }}
        justify='center'
        alignItems='center'
        direction='row'
      >
        <Grid>
          <Card>
            <Card.Header css={{ justifyContent: 'center' }}>
              <Text b>Вход</Text>
            </Card.Header>
            <Grid.Container gap={3} css={{ width: '280px' }} justify='center' alignItems='center'>
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
            </Grid.Container>
          </Card>
        </Grid>
      </Grid.Container>
    </>
  )
}
