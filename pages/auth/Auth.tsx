import { Grid } from '@nextui-org/react'
import Head from 'next/head'

import { Authentification } from '../../components/Authentification'
// import { useRouter } from 'next/router'

const data = {
  title: 'Authentification',
}

export const Auth = () => {
  // const router = useRouter()
  // const { anime } = router.query

  return (
    <>
      <Head>
        <title>Anime-ura (A-URA): {data.title}</title>
      </Head>
      <Grid.Container gap={4} justify='flex-start' direction='row'>
        <Authentification />
      </Grid.Container>
    </>
  )
}
