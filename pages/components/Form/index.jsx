import propTypes from 'prop-types';
import React from 'react';

function Form({ addMedia }) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const $form = event.target;
    const formData = new FormData($form);
    const title = formData.get('title');
    const chosemedia = formData.get('ChoseMedia');
    const media = {
      title,
      checked: false,
      id: Date.now(),
      chosemedia,
    };

    addMedia(media);
    $form.reset();
  };

  return (
    <div>
      <form id="form-midia" onSubmit={handleFormSubmit}>
        <div className=" m-2 flex  justify-center">
          <input
            required
            type="text"
            name="title"
            className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-400 bg-white h-1 outline-none w-96"
            placeholder="Insira um filme ou série"
          />
          <button
            type="submit"
            className="form__button px-8 rounded-r-lg bg-purple-400  text-gray-800 font-bold  uppercase border-purple-500 border-t border-b border-r "
          >
            Adicionar
          </button>
        </div>
        <div className="block">
          <div className="text-gray-800 flex items-center justify-center  ">
            <input type="radio" name="ChoseMedia" value="Filme" required />
            <span className="mr-5 ml-2">Filme</span>
            <input type="radio" name="ChoseMedia" value="Serie" required />
            <span className="mr-2 ml-2">Série</span>
          </div>
        </div>
      </form>

    </div>
  );
}

Form.propTypes = {
  addMedia: propTypes.func.isRequired,
};

export default Form;
