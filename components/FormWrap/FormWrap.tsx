import type { FC, ReactNode } from 'react'

import { Grid, Card, Text } from '@nextui-org/react'

type FormWrapProps = {
  title: string
  children: ReactNode
}

export const FormWrap: FC<FormWrapProps> = ({ title, children }) => {
  return (
    <Grid.Container
      css={{ height: 'calc(100vh - 76px)' }}
      justify='center'
      alignItems='center'
      direction='row'
    >
      <Grid xs={12} justify='center' alignItems='center'>
        <Card css={{ width: '420px' }}>
          <Card.Header css={{ justifyContent: 'center' }}>
            <Text b>{title}</Text>
          </Card.Header>
          <Card.Body>{children}</Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  )
}
