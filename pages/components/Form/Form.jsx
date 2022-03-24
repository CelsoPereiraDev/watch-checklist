import React from 'react';

function Form() {
  return (
    <div>
      <form className=" m-2 flex  justify-center" id="form-midia" >
          <input
          required type="text"
          name="title"
          className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-400 bg-white h-1 outline-none"
          placeholder="Insira um filme ou série"
          />
          <button
          type="submit"
          className="form__button px-8 rounded-r-lg bg-purple-400  text-gray-800 font-bold  uppercase border-purple-500 border-t border-b border-r ">
          Add
          </button>
      </form>
      <div className="text-gray-800 flex items-center justify-center  ">
      <input type="radio" name="ChoseMedia" id="Filme" />
      <span className="mr-5 ml-2">Filme</span>
      <input type="radio" name="ChoseMedia" id="Serie" />
      <span className="mr-2 ml-2">Série</span>
      </div>
    </div>
  );
}  




export default Form;
