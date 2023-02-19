import { yupResolver } from '@hookform/resolvers/yup'
import { Grid, Button, Card, Text } from '@nextui-org/react'
import Head from 'next/head'
import { useForm, FormProvider } from 'react-hook-form'
import { object, string, number, date, InferType, type ObjectSchema } from 'yup'

import { Input } from 'components/Input'

const schema = object({
  login: string().required('обязательное поле'),
  password: string().required('обязательное поле'),
})

type AuthentificationProps = {
  schema: ObjectSchema
  title: string
  fields: Array<{ name: string; name: string }>
  submitButtonLabel: string
}

export const Authentification: React.FC<AuthentificationProps> = ({ schema, title, fields }) => {
  // const router = useRouter()
  // const { anime } = router.query

  const methods = useForm({ resolver: yupResolver(schema) })
  const onSubmit = (data: any) => console.log(data)

  return (
    <>
      <Head>
        <title>Anime-ura (A-URA): Вход</title>
      </Head>
      <Grid.Container
        gap={4}
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
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Grid>
                  <Input name='login' placeholder='Логин' bordered />
                </Grid>
                <Grid>
                  <Input name='password' placeholder='Пароль' bordered />
                </Grid>
                <Grid>
                  <Button style={{ width: '100%' }} type='submit'>
                    Войти
                  </Button>
                </Grid>
              </form>
            </FormProvider>
          </Card>
        </Grid>
      </Grid.Container>
    </>
  )
}
