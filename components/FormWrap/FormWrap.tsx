import type { FC, ReactNode } from 'react'

import { Container, Card, Text, Link as NextUiLink } from '@nextui-org/react'
import Link from 'next/link'

type FormWrapProps = {
  title: string
  children: ReactNode
  footerText: string
  footerTextLink: string
}

export const FormWrap: FC<FormWrapProps> = ({ title, children, footerText, footerTextLink }) => {
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
          <Text size='$2xl' weight='bold'>
            {title}
          </Text>
        </Card.Header>
        <Card.Body>{children}</Card.Body>
        <Card.Footer css={{ justifyContent: 'center' }}>
          <Text>
            {footerText} &nbsp;&nbsp;&nbsp;&nbsp; -&gt; &nbsp;&nbsp;&nbsp;&nbsp;
            <NextUiLink as={Link} href={footerTextLink}>
              {title}
            </NextUiLink>
          </Text>
        </Card.Footer>
      </Card>
    </Container>
  )
}
