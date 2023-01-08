import type { FC } from 'react'

import { Card as NextUiCard, Text, Row, Col } from '@nextui-org/react'

import {
  StyledCard,
  StyledCardBody,
  StyledCardFooter,
  StyledCardDescriptionWrap,
} from './Card.styled'

const cardFooteCss = {
  bgBlur: '$backgroundAlpha',
  backdropFilter: 'saturate(180%) blur(5px)',
}

type CarProps = {
  src: string
  alt: string
  title: string
  description: string
}

export const Card: FC<CarProps> = ({ src, alt, title, description }) => (
  <StyledCard isPressable>
    <StyledCardBody>
      <NextUiCard.Image src={src} width='100%' height='100%' objectFit='cover' alt={alt} />
    </StyledCardBody>
    <StyledCardFooter css={cardFooteCss}>
      <Row>
        <Col>
          <Text h3>{title}</Text>
          <StyledCardDescriptionWrap>
            <Text>{description}</Text>
          </StyledCardDescriptionWrap>
        </Col>
      </Row>
    </StyledCardFooter>
  </StyledCard>
)
