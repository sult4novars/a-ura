import { NextUIProvider, useTheme } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { AppProps } from 'next/app'

import { Layout } from 'components/Layout'
import globalStyles from 'styles/globals'
import 'styles/sandPack.css'
import { lightTheme, darkTheme } from 'theme/shared'

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()

  const { theme } = useTheme()

  console.log(theme)

  return (
    <NextThemesProvider
      attribute='class'
      defaultTheme='dark'
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </NextThemesProvider>
  )
}
