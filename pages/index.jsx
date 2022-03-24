import Logo from "./components/Logo/Logo";
import Form from "./components/Form/Form";
import MediaList from "./components/MediaList/MediaList.jsx";

const mediasFilmes =[
  {
    title: 'Filme1',
    checked:false,
    id:123,
  },
  {
    title: 'Filme2',
    checked:false,
    id:1234,
  }
]
const mediasSeries = [
  {
    title: 'Serie1',
    checked:false,
    id:12345,
  },
  {
    title: 'Serie2',
    checked:false,
    id:123456,
  }
]


export default function Home() {
      return (
    <div >
      <Logo />
      <Form />
      <div className="flex flex-wrap gap-10 justify-center">
        <MediaList  title="Filmes" medias={mediasFilmes}/>
        <MediaList title="Séries" medias={mediasSeries}/>
      </div>
      <hr className="mt-24 border-2" />
      <div className="flex flex-wrap gap-10 justify-center ">
        <MediaList  title="Filmes Assistidos" medias={mediasFilmes}/>
        <MediaList title="Séries Assitidas" medias={mediasSeries}/>
      </div>
 
      </div>
  );
}
