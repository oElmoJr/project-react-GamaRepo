import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 80%;
  height: 100%;
  margin: 0 auto;
`;

export const Title = styled.h1`
  display: flex;
  margin-bottom: 0;

  justify-content: center;
  align-items: center;

  height: 90px;

  font-size: 3rem;
  text-transform: uppercase;

  color: #ede7bf;
`;

export const List = styled.ul`
  list-style: none;

  margin: 0;
  padding: 10px;
`;

export const LitItem = styled.li`
  display: flex;
  align-items: center;
  border-radius: 5px;
  height: 50px;

  background-color: #ede7bf;
  color: #2c2926;

  margin: 1rem 0;
  padding: 0.5rem 1rem;
  font-size: 20px;
`;

export const Button = styled.button`
  margin: 0 auto;
  border: none;

  font-family: "Cormorant Garamond", serif;
  font-size: 20px;

  background: none;
  color: #ede7bf;

  :hover {
    cursor: pointer;
  }
`;

export const LinkHome = styled(Link)`
  margin: 0 auto 30px;
  padding: 5px;
  border: none;
  border-radius: 5px;

  font-family: "Cormorant Garamond", serif;
  font-size: 25px;
  text-decoration: none;

  background: none;
  color: #ede7bf;

  :hover {
    cursor: pointer;
    background-color: #cf9577;
  }
`;
