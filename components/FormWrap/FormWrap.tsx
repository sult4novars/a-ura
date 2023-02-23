import type { FC, ReactNode } from 'react'

import { Container, Card, Text } from '@nextui-org/react'

type FormWrapProps = {
  title: string
  children: ReactNode
}

export const FormWrap: FC<FormWrapProps> = ({ title, children }) => {
  return (
    <Container
      style={{ height: 'calc(100vh - 76px)' }}
      fluid
      display='flex'
      justify='center'
      alignItems='center'
      responsive={false}
    >
      <Card css={{ width: '420px' }}>
        <Card.Header css={{ justifyContent: 'center' }}>
          <Text b>{title}</Text>
        </Card.Header>
        <Card.Body>{children}</Card.Body>
      </Card>
    </Container>
  )
}
