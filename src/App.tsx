import "./App.css";
import Filme from "./Filme";
import Filtro from "./Filtro";

function App() {
  return (
    <>
      <div className="grade" id="grade">
        <Filtro>
          <Filme
            titulo=""
            descricao="b"
            duracao={10}
            classificacao={18}
            genero={["comedia", "terror"]}
            imagem="https://a-static.mlcdn.com.br/1500x1500/poster-cartaz-moana-2-a-pop-arte-poster/poparteskins2/pos-03867-60x90cm/ed698c1aed8d6bee90cb3fb6fabd53ad.jpeg"
          ></Filme>
          <Filme
            titulo=""
            descricao="b"
            duracao={10}
            classificacao={18}
            genero={["comedia", "terror"]}
            imagem="https://a-static.mlcdn.com.br/1500x1500/poster-cartaz-moana-2-a-pop-arte-poster/poparteskins2/pos-03867-60x90cm/ed698c1aed8d6bee90cb3fb6fabd53ad.jpeg"
          ></Filme>
          <Filme
            titulo=""
            descricao="b"
            duracao={10}
            classificacao={18}
            genero={["comedia", "terror"]}
            imagem="https://a-static.mlcdn.com.br/1500x1500/poster-cartaz-moana-2-a-pop-arte-poster/poparteskins2/pos-03867-60x90cm/ed698c1aed8d6bee90cb3fb6fabd53ad.jpeg"
          ></Filme>
        </Filtro>
        <Filtro>
          <Filme
            titulo=""
            descricao="b"
            duracao={10}
            classificacao={18}
            genero={["comedia", "terror"]}
            imagem="https://a-static.mlcdn.com.br/1500x1500/poster-cartaz-moana-2-a-pop-arte-poster/poparteskins2/pos-03867-60x90cm/ed698c1aed8d6bee90cb3fb6fabd53ad.jpeg"
          ></Filme>
        </Filtro>
        </div>
    </>
  );
}
export default App;
