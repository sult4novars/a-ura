import { Grid } from '@nextui-org/react'
import Head from 'next/head'
import Link from 'next/link'

import { Card } from 'components'

const data = {
  src: 'https://m.media-amazon.com/images/I/712sDu2sccL._AC_SL1500_.jpg',
  alt: 'Card example background',
  title: 'Клинок рассекающий демонов',
  description: `Тандзиро Камадо — старший сын в семье, потерявший своего отца и взявший на себя заботу
  о своих родных.`,
}

const a = new Array(51).fill(data)

const Main = () => (
  <>
    <Head>
      <title>Anime-ura (A-URA)</title>
    </Head>
    <Grid.Container gap={4} justify='flex-start'>
      {a.map((item, index) => (
        <Grid xs={12} sm={6} md={3} key={index}>
          <Link href={`/${index}`}>
            <Card {...item} />
          </Link>
        </Grid>
      ))}
    </Grid.Container>
  </>
)

export default Main
