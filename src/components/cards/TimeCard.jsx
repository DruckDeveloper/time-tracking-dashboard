import styled from 'styled-components'

const TimeCardWrapper = styled('article')`
  border-radius: 1.25rem;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    inset-block-start: -2.6rem;
    inset-inline: 0;
    height: 100px;
    border-radius: 1.25rem;
    background-color: ${({ headerColor }) => headerColor};
    z-index: 1;
    background-image: url('${(props) => props.svgAddress}');
    background-repeat: no-repeat;
    background-position: calc(100% + -1rem) -0.7rem;
  }
`
const TimeCardContent = styled('div')`
  border-radius: 1.25rem;
  background-color: var(--Dark-blue);
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
  z-index: 2;
  width: 100%;
  position: relative;

  & > svg {
    place-self: end;
    align-self: center;
    cursor: pointer;
  }
`
const TimeActivityTitle = styled('h2')`
  font-size: 1.2rem;
  align-self: center;
`
const TimeCurrentHours = styled('h3')`
  font-size: clamp(1.7rem, 5vw, 2.5rem);
`
const LastTimeStyled = styled('p')`
  justify-self: end;
`

const TimeCard = ({ headerColor, activity, currentTime, lastTime, svgAddress }) => {
  return (
    <TimeCardWrapper headerColor={headerColor} svgAddress={svgAddress}>
      <TimeCardContent>
        <TimeActivityTitle>{activity}</TimeActivityTitle>
        <svg width='21' height='5' xmlns='http://www.w3.org/2000/svg'>
          <path d='M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z' fill='#BBC0FF' fillRule='evenodd' />
        </svg>
        <TimeCurrentHours>{currentTime}hrs</TimeCurrentHours>
        <LastTimeStyled>Last Week - {lastTime}hrs</LastTimeStyled>
      </TimeCardContent>
    </TimeCardWrapper>
  )
}

export { TimeCard }
