import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;

  padding: 1rem 2rem;
  border-radius: 0.3rem;

  > h1 {
    margin: 0 auto;
    color:var(--color-blackPurple);
    
  }
  > img {
    padding: 2rem;
    margin:0 auto;
    max-width:50%;
    max-height:75%;
    margin-top: 3rem;
    margin-bottom:1rem;
    @media(max-width:1000px){
        max-width:100%;
        max-height:100%;
    }
  }

  > button {
    margin: 0 auto;
    margin-top: 2rem;
    padding: 0.4rem;
    background-color:var(--color-soft-blue);
    width: 30%;
    color:white;
    border-radius: 0.3rem;
    transition: background-color 0.3s ease;

    :hover {
      border:0px solid white !important;
      background-color: var(--color-hover-blue);
    }
  }
`;
