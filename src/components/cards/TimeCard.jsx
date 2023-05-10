import styled from 'styled-components'

const TimeCardWrapper = styled('article')`
  border-radius: 1.25rem;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: -20%;
    inset-inline: 0;
    height: clamp(3.125rem, 6.25vw, 12.5rem);
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
  padding: clamp(1.3rem, 2.6vw, 5rem);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
  z-index: 2;
  width: 100%;
  position: relative;
`
const TimeActivityTitle = styled('h2')`
  font-size: clamp(0.75rem, 1.5vw, 3rem);
  align-self: center;
`
const TimeCurrentHours = styled('h3')`
  font-size: clamp(1.6rem, 3.2vw, 6.4rem);
`
const LastTimeStyled = styled('p')`
  justify-self: end;
  align-self: center;
  font-size: clamp(0.8rem, 1.2vw, 2.3rem);
`

const ElipsisIconContainer = styled('button')`
  background-color: transparent;
  border: none;
  place-self: end;
  align-self: center;
  cursor: pointer;
  width: clamp(1rem, 2vw, 4rem);
  fill: var(--White-color);
`

const TimeCard = ({ headerColor, activity, currentTime, lastTime, svgAddress }) => {
  return (
    <TimeCardWrapper headerColor={headerColor} svgAddress={svgAddress}>
      <TimeCardContent>
        <TimeActivityTitle>{activity}</TimeActivityTitle>
        <ElipsisIconContainer>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 96 960 960'>
            <path d='M207.858 624Q188 624 174 609.858q-14-14.141-14-34Q160 556 174.142 542q14.141-14 34-14Q228 528 242 542.142q14 14.141 14 34Q256 596 241.858 610q-14.141 14-34 14Zm272 0Q460 624 446 609.858q-14-14.141-14-34Q432 556 446.142 542q14.141-14 34-14Q500 528 514 542.142q14 14.141 14 34Q528 596 513.858 610q-14.141 14-34 14Zm272 0Q732 624 718 609.858q-14-14.141-14-34Q704 556 718.142 542q14.141-14 34-14Q772 528 786 542.142q14 14.141 14 34Q800 596 785.858 610q-14.141 14-34 14Z' />
          </svg>
        </ElipsisIconContainer>
        <TimeCurrentHours>{currentTime}hrs</TimeCurrentHours>
        <LastTimeStyled>Last Week - {lastTime}hrs</LastTimeStyled>
      </TimeCardContent>
    </TimeCardWrapper>
  )
}

export { TimeCard }
