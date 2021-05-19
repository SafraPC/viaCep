import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  min-height: 50vh;
  margin-top: 2rem;
  border-bottom:1px solid silver;
  > section {
    width: 50%;
    display: flex;
    padding: 1.5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    :first-child {
      border-right: 1px solid silver;
    }
    > img {
      width: 100%;
    }
    > h4{
      color: var(--color-soft-blue);
      text-align:center;
      padding:1rem;
      margin-bottom:2rem;
    }
    > label {
      color: var(--color-blackPurple);
      margin-right: auto;
      width: 75% !important;
      margin: 0 auto;
      padding-bottom:1rem;
    }
    > input {
      border-radius: 0.3rem;
      width: 75%;
      padding: 0.3rem;
    }
    > button {
      border-radius: 0.3rem;
      width: 75%;
      background-color: var(--color-soft-blue);
      color: white;
      margin-top: 2rem;
      padding: 0.5rem;
    }
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    border-bottom:0 !important;
    > section {
      width: 100%;
      margin-top: 1rem;
      :first-child {
        border-right: 0 !important;
        border-bottom: 1px solid silver;
      }
      > img {
        width: 65%;
      }
    }
  }
`;
