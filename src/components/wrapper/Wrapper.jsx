import styled from 'styled-components'
import { ProfileCard } from '../profile-card/ProfileCard'
import { TimeCard } from '../cards/TimeCard'
import { CardData } from '../../data/CartData'

const SectionStyled = styled('div')`
  display: grid;
  color: var(--White-color);
  gap: 4rem;
  grid-template-rows: repeat(6, 1fr);

  @media (min-width: 56.25rem) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);
  }
`

const Wrapper = () => {
  return (
    <SectionStyled>
      <ProfileCard userName='Jeremy Robson' />
      {CardData.map((card) => (
        <TimeCard key={card.title} svgAddress={card.icon} headerColor={card.color} activity={card.title} currentTime={card.timeframes.weekly.current} lastTime={card.timeframes.weekly.previous} />
      ))}
    </SectionStyled>
  )
}

export { Wrapper }
