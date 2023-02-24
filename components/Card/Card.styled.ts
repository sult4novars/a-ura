import { styled, Card as NextUiCard } from '@nextui-org/react'

export const StyledCardDescriptionWrap = styled('div', {
  height: '0',
  overflow: 'hidden',
  visibility: 'hidden',
  transition: 'height 0.2s',
})

export const StyledCard = styled(NextUiCard, {
  width: '100%',
  height: '300px',
  [`&:hover ${StyledCardDescriptionWrap}`]: {
    height: '90px',
    visibility: 'visible',
  },
})

export const StyledCardBody = styled(NextUiCard.Body, {
  padding: 0,
})

export const StyledCardFooter = styled(NextUiCard.Footer, {
  position: 'absolute',
  // borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
  bottom: 0,
  zIndex: 1,
  borderRadius: 0,
})
