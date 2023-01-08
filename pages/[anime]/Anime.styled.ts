import { styled } from '@nextui-org/react'

export const StyledImageBG = styled('div', {
  height: '100vh',
  width: '100%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50% -996%',
  backgroundImage: `linear-gradient(180deg, rgba(var(--nextui-colors-imageGradient),0.95) 35%, rgba(var(--nextui-colors-imageGradient), 0.8) 80%, rgba(0,0,0, 0) 100%), url(https://sportshub.cbsistatic.com/i/2021/03/18/54499c7e-f7c5-467c-a998-981ade5b5607/gintama-the-final-movie-anime-poster-key-visual-1240321.jpg)`,
  '@md': {
    backgroundPosition: 'right',
    backgroundImage: `
    linear-gradient(90deg, rgba($imageGradient, 0.95) 35%, rgba($imageGradient, 0.8) 70%, rgba(0,0,0, 0) 100%), url('https://sportshub.cbsistatic.com/i/2021/03/18/54499c7e-f7c5-467c-a998-981ade5b5607/gintama-the-final-movie-anime-poster-key-visual-1240321.jpg')`,
  },
})
