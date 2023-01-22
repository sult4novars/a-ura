import { Text, Card, Grid, Button, Spacer } from '@nextui-org/react'
import Head from 'next/head'
// import { useRouter } from 'next/router'

const data = {
  src: 'https://m.media-amazon.com/images/I/712sDu2sccL._AC_SL1500_.jpg',
  alt: 'Card example background',
  title: 'Клинок рассекающий демонов',
  description: `Замки, самураи, культура и красивые девушки, теперь это все отошло на второй план,
  после того, как пришельцы Аманто захватили землю. Правительство сдалось, ведь
  сопротивление ручной силы против мощного оружия было бы бессмысленно. Теперь в Стране
  Самураев запрещено ношение мечей, дух воинов понемногу угас. Но везде найдется тот,
  чью веру не сломать, чей истинно японский дух живет и бурлит в крови. Таким оказался
  Гинтоки Саката, который верит в силу меча и «сладости» (кто сказал, что их поедание
  занятие не мужское?). К нему присоединяется его ученик Симпати, и красивая девушка
  Кагура – наследница самой сильной во всем мире семьи Ятудзоку, которая повсюду с собой
  таскает своего мега огромного пса Садахару. Ребята не особо перебирают работой, но
  делают ее весьма не плохо и деньги тоже просят (в такие времена не до
  благотворительности). Кроме них и инопланетян, в аниме много бандитов, самураев (по
  названию, а не по делу) и неких Синсэнгуми – организация молодых парней, которые
  выглядят как европейцы, а по уму отстают от питекантропов. Поэтому компания там
  подобралась то, что надо – смотри и ухахатывайся. Так что отличное настроение, колкие
  и острые шутки , много высмеивания штампов и современных глупостей зрителям
  обеспечено.`,
}

export const Anime = () => {
  // const router = useRouter()
  // const { anime } = router.query

  return (
    <>
      <Head>
        <title>Anime-ura (A-URA): {data.title}</title>
      </Head>
      <Grid.Container gap={4} justify='flex-start' direction='row'>
        <Grid xs={12} sm={12} md={4} direction='column'>
          <Card variant='flat'>
            <Card.Image
              src='https://m.media-amazon.com/images/I/712sDu2sccL._AC_SL1500_.jpg'
              width='100%'
              height='100%'
              objectFit='cover'
            />
          </Card>
        </Grid>

        <Grid xs={12} sm={12} md={8} direction='column'>
          <Text h1>{data.title}</Text>
          <Text css={{ textAlign: 'justify' }}>{data.description}</Text>
          <Spacer />
          <Button css={{ width: '200px' }}>Смотреть</Button>
        </Grid>
      </Grid.Container>
    </>
  )
}
