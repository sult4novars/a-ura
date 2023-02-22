import { yupResolver } from '@hookform/resolvers/yup'
import { Grid, Button, Card, Text } from '@nextui-org/react'
import Head from 'next/head'
import { useForm, FormProvider } from 'react-hook-form'

import { Input } from 'components/Input'

import { schemaSignUp } from './schemaSignUp'

const data = {
  title: 'SignUp',
}

export const SignUp = () => {
  const methods = useForm<SignUpFormType>({ resolver: yupResolver(schemaSignUp) })
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
            <Grid.Container gap={3} css={{ width: '360px' }} justify='center' alignItems='center'>
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
            </Grid.Container>
          </Card>
        </Grid>
      </Grid.Container>
    </>
  )
}

export type SignUpFormType = {
  login: string
  password: string
  cpassword: string
}
