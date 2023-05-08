import styled from 'styled-components'

const ProfileCardStyled = styled('article')`
  background-color: var(--Dark-blue);
  display: grid;
  grid-template-rows: 2fr 1fr;
  border-radius: 1.25rem;
  grid-row: 1 / 3;
`

const UserProfileStyled = styled('div')`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 2.5rem 2rem;
  background-color: var(--Blue);
  border-radius: 1.25rem;

  & img {
    width: 4rem;
    justify-content: flex-start;
  }

  @media (min-width: 56.25rem) {
    flex-direction: column;
    padding: 2rem 0;
  }
`
const ProfileTitleStyled = styled('div')`
  display: flex;
  flex-direction: column;
  & h2 {
    font-size: 1.5rem;
    font-weight: 400;
    @media (min-width: 56.25rem) {
      font-size: 2rem;
    }
  }

  & strong {
    font-weight: 300;
    font-size: 0.7rem;
  }
`

const ProfileNavegateStyled = styled('ul')`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem 0;
  background-color: var(--Dark-blue);
  border-radius: 0 0 1.25rem 1.25rem;

  @media (min-width: 56.25rem) {
    flex-direction: column;
  }
`

const ProfileNavigateItemStyled = styled('li')`
  font-size: 1rem;
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
