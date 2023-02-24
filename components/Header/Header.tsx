import { useTheme, Navbar, Button, Text } from '@nextui-org/react'
import { useTheme as useNextTheme } from 'next-themes'
import Link from 'next/link'

import { SunIcon, MoonIcon } from 'components/icons'

export const Header = () => {
  const { setTheme } = useNextTheme()
  const { isDark } = useTheme()

  return (
    <Navbar
      isBordered
      variant='sticky'
      as='header'
      maxWidth='fluid'
      containerCss={{ padding: '0 $10' }}
    >
      <Navbar.Content>
        <Navbar.Link color='inherit' href='/' as={Link}>
          <Navbar.Brand>
            <Text
              size='$4xl'
              css={{
                textGradient: '45deg, $blue600 -20%, $pink600 50%',
              }}
              weight='bold'
            >
              A - URA
            </Text>
          </Navbar.Brand>
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Button
          light
          auto
          animated={false}
          icon={isDark ? <SunIcon filled /> : <MoonIcon filled />}
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
        />
        <Navbar.Link color='inherit' href='sign-in'>
          Войти
        </Navbar.Link>
      </Navbar.Content>
    </Navbar>
  )
}
