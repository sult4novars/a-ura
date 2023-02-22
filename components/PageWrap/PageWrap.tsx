import type { FC, ReactNode } from 'react'

import Head from 'next/head'

type PageWrapProps = {
  textAfterTitleColon: string
  children: ReactNode
}

export const PageWrap: FC<PageWrapProps> = ({ textAfterTitleColon, children }) => {
  return (
    <>
      <Head>
        <title>Anime-ura (A-URA): {textAfterTitleColon}</title>
      </Head>
      {children}
    </>
  )
}
