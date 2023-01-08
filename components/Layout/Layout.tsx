import type { FC, ReactNode } from 'react'

import { Header } from 'components/Header'

import { Main } from './Layout.styled'

type LayoutProps = {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  )
}
