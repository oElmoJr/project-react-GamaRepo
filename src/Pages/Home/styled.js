import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  margin: auto auto;
  width: 50%;
  height: 100vh;
`;

export const InputContainer = styled.div`
  display: flex;
`;

export const Input = styled.input`
  background: none;
  color: #ede7bf;

  font-size: 30px;

  height: 50px;
  width: 500px;

  padding: 0 15px;

  border: none;
  border-bottom: 3px solid #b56740;
  border-radius: 5px;

  :active,
  :focus {
    outline: none;
    background-color: #cf9577;
  }

  &::placeholder {
    color: #ede7bf;
    opacity: 1;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: none;
  color: #ede7bf;

  font-size: 30px;

  height: 50px;
  width: 50px;

  margin-left: 5px;

  border: none;
  border-radius: 10px;

  :hover {
    cursor: pointer;
    color: #b56740;
  }
`;

export const ErrorMsg = styled.span`
  margin-top: 20px;

  font-size: 20px;

  color: #ede7bf;
`;
