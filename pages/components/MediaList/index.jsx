import React from 'react';
import PropTypes from 'prop-types';
import { IconEdit, IconDelete } from '../Icons';

function MediaList({
  title,
  medias,
  removeMedia,
  updateMediaChecked,
}) {
  return (
    <div className="flex-1 mt-10 ml-14 max-w-xl">
      <h2 className="text-gray-800 font-bold text-4xl m-0">{title}</h2>
      <ul id="list-Media" className="p-0 m-0 mt-3">
        {
                medias.map((currentMedia) => (
                  <li className="flex items-center mt-3" key={currentMedia.id}>
                    <label className="flex-1 flex">
                      <input
                        type="checkbox"
                        checked={currentMedia.checked}
                        onChange={() => { updateMediaChecked(currentMedia); }}
                        className="tasks-section__item__checkbox mt-1 mr-1.5 w-4 h-4 border-2 relative cursor-pointer "
                      />
                      <span className="tasks-section__item__text flex-1 cursor-pointer justify-center">
                        {currentMedia.title}
                      </span>
                    </label>
                    <button type="button" className="flex min-w-3 min-h-3 text-green-800 mr-2 hover:bg-green-300 rounded-full " onClick="modalHandler(true)">
                      { IconEdit }
                    </button>
                    <button type="button" className="flex min-w-3 min-h-3 text-red-800 mr-4 hover:bg-red-300 rounded-full" onClick={() => { removeMedia(currentMedia); }}>
                      { IconDelete }
                    </button>
                  </li>
                ))
                }
      </ul>
    </div>
  );
}
MediaList.propTypes = {
  removeMedia: PropTypes.func.isRequired,
  updateMediaChecked: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  medias: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  })),
};

export default MediaList;
