import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./styled";

export default function Repositories() {
  const [repositories, setRepositories] = useState([]);

  const Navigate = useNavigate();

  useEffect(() => {
    let repositoriesName = localStorage.getItem("repositoriesName");
    if (repositoriesName !== null) {
      repositoriesName = JSON.parse(repositoriesName);
      setRepositories(repositoriesName);
      localStorage.clear();
    } else {
      Navigate("/");
    }
  }, []);

  return (
    <S.Container>
      <S.Title>Repositórios</S.Title>
      <S.List>
        {repositories.map((repository) => {
          return (
            <S.LitItem key={repository}>Repositório: {repository}</S.LitItem>
          );
        })}
      </S.List>
      <S.LinkHome to="/">Voltar</S.LinkHome>
    </S.Container>
  );
}
