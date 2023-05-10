import styled from 'styled-components'
import { ProfileCard } from '../profile-card/ProfileCard'
import { TimeCard } from '../cards/TimeCard'
import { CardData } from '../../data/CartData'

const SectionStyled = styled('div')`
  display: grid;
  color: var(--White-color);
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  gap: 4rem;
  padding: clamp(2rem, 5vw, 3rem);
  @media (min-width: 93.75rem) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
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
