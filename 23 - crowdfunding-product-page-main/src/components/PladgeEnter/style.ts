import styled from 'styled-components'

interface PladgeEnterTypes {
  checked: boolean
}

export const PladgeEnter = styled.form<PladgeEnterTypes>`
  margin-top: ${(props) => {return props.checked ? '1rem' : '0rem'}};
  border-top: ${(props) => {return props.checked ? '1px solid hsl(0, 0%, 90%);' : ''}};
  height: ${(props) => {return props.checked ? 'auto' : '0rem'}};
  overflow: hidden;

  h2 {
    text-align: center;
    color: grey;
    font-size: 0.8rem;
    margin: 1.2rem 0rem;
  }

  .input_box {
    display: flex;
    align-items: center;
    justify-content: space-around;

    .dollar_box {
      padding: 0.7rem;
      border-radius: 1.5rem;
      width: 40%;
      display: flex;
      align-items: center;
      border: 1px solid hsl(0, 0%, 90%);
      p {
        font-size: 0.8rem;
        font-weight: 700;
        color: grey;
        margin-left: 0.2rem;
      }
      input {
        margin-left: 0.5rem;
        width: 100%;
        font-size: 0.8rem;
        font-weight: 700;
      }
    }

    button {
      border: 1px solid hsl(0, 0%, 90%);
      border-radius: 1.5rem;
      width: 50%;
      padding: 0.7rem;
      cursor: pointer;
      background-color: hsl(176, 50%, 47%);
      color: white;
      font-weight: 500;
      font-size: 0.8rem;
    }
  }
`
