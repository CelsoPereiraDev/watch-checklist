import useLocalStorage from 'use-local-storage-state';
import React from 'react';
import Logo from './components/Logo';
import Form from './components/Form';
import MediaList from './components/MediaList';

export default function Home() {
  const [medias, setMedias] = useLocalStorage('medias', {
    defaultValue: [],
  });

  const mediasFilmes = medias.filter((media) => media.checked === false && media.chosemedia === 'Filme');
  const mediasFilmesAssistidos = medias.filter((media) => media.checked === true && media.chosemedia === 'Filme');
  const mediasSeries = medias.filter((media) => media.checked === false && media.chosemedia === 'Serie');
  const mediasSeriesAssistidas = medias.filter((media) => media.checked === true && media.chosemedia === 'Serie');

  const addMedia = (media) => {
    const newMedias = [...medias];
    newMedias.push(media);
    setMedias(newMedias);
  };

  const removeMedia = (media) => {
    const newMedias = [...medias];
    const mediasToRemove = medias.findIndex((item) => item.id === media.id);
    newMedias.splice(mediasToRemove, 1);
    setMedias(newMedias);
  };

  const updateMediaChecked = (media) => {
    const newMedias = [...medias];
    const mediasToUpdate = newMedias.findIndex((item) => item.id === media.id);
    newMedias[mediasToUpdate].checked = !newMedias[mediasToUpdate].checked;
    setMedias(newMedias);
  };

  return (
    <div>
      <Logo />
      <Form addMedia={addMedia} />
      <div className="flex flex-wrap gap-10 justify-center">
        <MediaList title="Filmes" medias={mediasFilmes} removeMedia={removeMedia} updateMediaChecked={updateMediaChecked} />
        <MediaList title="Series" medias={mediasSeries} removeMedia={removeMedia} updateMediaChecked={updateMediaChecked} />
      </div>
      <hr className=" bord-2 border-purple-500 mt-14" />
      <div className="flex flex-wrap gap-10 justify-center ">
        <MediaList title="Filmes Assistidos" medias={mediasFilmesAssistidos} removeMedia={removeMedia} updateMediaChecked={updateMediaChecked} />
        <MediaList title="Series Assistidas" medias={mediasSeriesAssistidas} removeMedia={removeMedia} updateMediaChecked={updateMediaChecked} />
      </div>

    </div>
  );
}
