import styled from 'styled-components'

export const Button = styled.button`
  background: #000000;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  border: none;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  color: #ffffff;

  min-width: 140px;
  height: 36px;

  cursor: pointer;

  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  :hover {
    background: rgba(0, 0, 0, 0.5);
  }
`

export const StrechedButton = styled(Button)`
  width: 264px;
  @media only screen and (min-width: 1024px) {
    width: 280px;
  }
`

export const Title = styled.h4`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  margin: 0px;
  padding: 0px;

  ${props => {
    if (props.primary) return `color: #000000;`
    if (props.secondary) return `color: #7C7C7C;`
    else return `color: #000000;`
  }};
`

export const DefaultScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  overflow: auto;
  margin: 24px;
  padding: 24px;
  height: 448px;
  @media only screen and (min-width: 1024px) {
    margin: 32px;
    margin-top: 24px;
  }
`
