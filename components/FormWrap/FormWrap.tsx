import type { FC, ReactNode } from 'react'

import { Grid, Card, Text } from '@nextui-org/react'
import Head from 'next/head'

type FormWrapProps = {
  title: string
  children: ReactNode
  formName: string
}

export const FormWrap: FC<FormWrapProps> = ({ title, children, formName }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
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
              <Text b>{formName}</Text>
            </Card.Header>
            <Grid.Container gap={3} css={{ width: '280px' }} justify='center' alignItems='center'>
              {children}
            </Grid.Container>
          </Card>
        </Grid>
      </Grid.Container>
    </>
  )
}
