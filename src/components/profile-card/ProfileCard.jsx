import styled from 'styled-components'

const ProfileCardStyled = styled('article')`
  background-color: var(--Dark-blue);
  display: grid;
  grid-template-rows: 2fr 1fr;
  border-radius: clamp(1.25rem, 2vw, 1.6rem);
  grid-row: 1 / 3;
`

const UserProfileStyled = styled('div')`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: clamp(2.5rem, 3vw, 5.2rem) clamp(2rem, 3vw, 3rem);
  background-color: var(--Blue);
  border-radius: clamp(1.25rem, 2vw, 1.6rem) clamp(1.25rem, 2vw, 1.5rem) 0 0;

  & img {
    width: clamp(4rem, 4vw, 8rem);
    justify-content: flex-start;
  }

  @media (min-width: 56.25rem) {
    flex-direction: column;
  }
`
const ProfileTitleStyled = styled('div')`
  display: flex;
  flex-direction: column;
  & h2 {
    font-size: clamp(1.3rem, 2vw, 2.8rem);
    font-weight: 400;
  }

  & strong {
    font-weight: 300;
    font-size: clamp(0.7rem, 1.3vw, 1.2rem);
  }
`

const ProfileNavegateStyled = styled('ul')`
  display: flex;
  justify-content: space-evenly;
  padding: clamp(1rem, 1vw, 2rem) 0;
  background-color: var(--Dark-blue);
  border-radius: 0 0 clamp(1.25rem, 2vw, 1.6rem) clamp(1.25rem, 2vw, 1.6rem);
  padding: clamp(1rem, 1vw, 3rem);

  @media (min-width: 56.25rem) {
    flex-direction: column;
  }
`

const ProfileNavigateItemStyled = styled('li')`
  font-size: clamp(1rem, 2vw, 4rem);
  cursor: pointer;
`

const ProfileCard = ({ userName }) => {
  return (
    <ProfileCardStyled>
      <UserProfileStyled>
        <img src='/public/img/image-jeremy.png' alt='profile image' />
        <ProfileTitleStyled>
          <strong>Report for:</strong>
          <h2>{userName}</h2>
        </ProfileTitleStyled>
      </UserProfileStyled>
      <ProfileNavegateStyled>
        <ProfileNavigateItemStyled>Dayli</ProfileNavigateItemStyled>
        <ProfileNavigateItemStyled>Weekly</ProfileNavigateItemStyled>
        <ProfileNavigateItemStyled>Monthly</ProfileNavigateItemStyled>
      </ProfileNavegateStyled>
    </ProfileCardStyled>
  )
}

export { ProfileCard }
