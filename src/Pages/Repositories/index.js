import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./styled";

export default function Repositories() {
  const [repositories, setRepositories] = useState([]);

  const Navigate = useNavigate();

  useEffect(() => {
    let repositoriesInfo = localStorage.getItem("repositoriesInfo");
    if (repositoriesInfo !== null) {
      repositoriesInfo = JSON.parse(repositoriesInfo);
      setRepositories(repositoriesInfo);
      localStorage.clear();
    } else {
      Navigate("/");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <S.Container>
      <S.Title>Repositórios</S.Title>
      <S.ListBox>
        <S.List>
          {repositories.map((repository) => {
            return (
              <S.LinkItem
                key={repository.id}
                href={repository.html_url}
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <S.LitItem>
                  <span>{repository.name}</span>
                  <span>{repository.language}</span>
                </S.LitItem>
              </S.LinkItem>
            );
          })}
        </S.List>
      </S.ListBox>
      <S.LinkHome to="/">Voltar</S.LinkHome>
    </S.Container>
  );
}
