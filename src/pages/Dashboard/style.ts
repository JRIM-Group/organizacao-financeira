import styled, { css } from 'styled-components';

import { Link as LinkReact } from 'react-router-dom';

interface LinkProps{
  status?: string | boolean;
}

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #3d3d4d;
    transition: 0.3s;

    &:hover {
      color: #666;
      transform: translateX(10px);
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;

  margin: 40px 0;
`;

export const Aviso = styled.div`
  background: #fff;

  border-radius: 8px;
  padding: 8px;
  margin: 40px 0;


  font-size: 32px;
  color: #3a3a3a;
  width: 100%;
  line-height: 42px;
  text-align: center;

  a {
    color: #008ffb;
    transition: all 0.3s;

    &:hover{
      color: #0063ae;
    }

  }
`;

export const Contas = styled.div`
  margin-top: 80px;
  max-width: 700px;
`;

export const Link = styled(LinkReact)<LinkProps>`
  background: #fff;

  border-radius: 8px;
  width: 100%;
  padding: 24px;
  display: block;
  text-decoration: none;

  display: flex;
  align-items: center;
  transition: transform 0.2s;

  & + a {
    margin-top: 16px;
  }

  ${(props) => !props.status && css`
    background: #f0f0f5;
  `}

  &:hover {
    transform: translateX(10px);
  }

  > span{
    min-width: 44px;
    min-height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    padding: 4px;
    border-radius: 50%;
    color: #fff;
    background-color: #3d3d4d;
    font-size: 18px;
  }

  p {
    font-size: 18px;
    color: #a8a8b3;
  }

  div {
    margin: 0 16px;
    flex: 1;
    text-align: center;

    strong {
      font-size: 20px;
      color: #3d3d4d;
    }
  }

  svg {
    margin-left: auto;
    color: #cbcbd6;
  }
`;

export const Main = styled.main`
  max-width: 1200px;
  width: 100%;

  display: flex;
  justify-content: space-between;

  @media (max-width: 760px){
    flex-direction: column;
    align-items: center;
    justify-content: center;

    aside {
      margin: 0;
      margin-top: 25px;

    }
  }

`;

export const Aside = styled.aside`
  background: #fff;

  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  height: fit-content;
  padding: 8px;
  margin-left: 24px;

`;

export const Section = styled.section`
  background: #fff;
  border-radius: 8px;
  width: 100%;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;

  font-family: 'Roboto';
  font-size: 20px;
  line-height: 30px;

  &+&{
    margin-top: 24px;
  }

  header {
    display: flex;
    justify-content: space-between;
    font-size: 22px;
    font-weight: 700;
    line-height: 32px;
    padding: 8px 0;
    border-bottom: 2px solid #3a3a3a;

    /* background: #F6E645; */

    input {
      background-color: #d6d6d6;
      border: none;
      margin: 0 4px;
      max-width: 150px;
      font-size: 20px;
      font-family: 'Roboto';
      line-height: 30px;
      padding: 0 8px;
    }
  }

  > div {
    /* margin: 8px 0; */
    /* border: 2px solid #3a3a3a; */
    border-radius: 8px;

    div {
      display: flex;
      /* margin: 4px 0; */
      flex-direction: column;
      background-color: #d6d6d6;
      color: #5e5e5e;
      /* padding: 4px 0; */
      /* border: 0.5px solid #3a3a3a; */
      /* border-radius: 4px; */

      p{
        border: none;
        background: transparent;
        margin: 0 8px;
        font-size: 20px;
        font-family: 'Roboto';
        display: flex;
      }

        &:nth-child(even){
          background: #5e5e5e;
          color: #fff;
        }


    }

    header {
      border-top: 2px solid #3a3a3a;
    }
  }

`;
