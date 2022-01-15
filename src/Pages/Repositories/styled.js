import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 80%;
  height: 100vh;
  margin: 0 auto;
`;

export const Title = styled.h1`
  display: flex;
  margin-top: 20px;

  justify-content: center;
  align-items: center;

  font-size: 3rem;
  text-transform: uppercase;

  color: #ede7bf;
`;

export const ListBox = styled.div`
  width: 100%;
  overflow: auto;
  height: 70vh;
  scrollbar-width: none;
  margin: auto auto 25px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const LinkItem = styled.a`
  text-decoration: none;
`;

export const List = styled.ul`
  list-style: none;

  margin: 0;
  padding: 10px;
`;

export const LitItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  height: 50px;

  background-color: #ede7bf;
  color: #2c2926;

  margin: 1rem 0;
  padding: 0.5rem 1rem;
  font-size: 20px;

  :hover {
    background-color: #e9e0af;
  }
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
  margin: auto auto 25px auto;
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
