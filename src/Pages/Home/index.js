import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { VscSearch } from "@react-icons/all-files/vsc/VscSearch";

import * as S from "./styled";

function App() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [erro, setErro] = useState(false);

  function handlePesquisa() {
    axios
      .get(`https://api.github.com/users/${usuario}/repos `)
      .then((Response) => {
        const repositories = Response.data;
        const repositoriesName = [];
        repositories.map((repository) => {
          repositoriesName.push(repository.name);
          return "";
        });
        localStorage.setItem(
          "repositoriesName",
          JSON.stringify(repositoriesName)
        );
        setErro(false);
        navigate("/repositories ");
      })
      .catch((err) => {
        setErro(true);
      });
  }

  return (
    <S.Container>
      <S.InputContainer>
        <S.Input
          className="usuario"
          placeholder="Usuário do GitHub"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          required
        />
        <S.Button type="submit" onClick={handlePesquisa}>
          <VscSearch />
        </S.Button>
      </S.InputContainer>
      {erro ? (
        <S.ErrorMsg>;-; Ocorreu um erro, tente novamente</S.ErrorMsg>
      ) : (
        ""
      )}
    </S.Container>
  );
}

export default App;
