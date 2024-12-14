import "./App.css";
import Filme from "./Filme";
import Filtro from "./Filtro";
import EXIBICAO, { FilmesTuplaType } from "./exibicoes"


interface ListaFilmes {filmes: Array<FilmesTuplaType> };

function App() {
  return (
    <div className='app'>
      {EXIBICAO.map((exibicao) => (
        <Filtro
          tipo={exibicao[0]}
        >
          <ListaFilmes filmes={exibicao[1]} />
        </Filtro>
      ))}
    </div>
  );
}

function ListaFilmes({filmes}:ListaFilmes) {
  return (
    <>
      {filmes.map((filme) => (
        <Filme
          titulo={filme[0]}
          descricao={filme[1]}
          duracao={filme[2]}
          classificacao={filme[3]}
          genero={filme[4]}
          imagem={filme[5]}
        />
      ))}
    </>
  );
}

export default App;
