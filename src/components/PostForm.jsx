import React from 'react';

const PostForm = ({
  handleSubmit,
  title,
  setTitle,
  content,
  setContent,
  tripPost,
}) => {
  return (
    <div className="w-50 ms-5">
      <h1 className="mb-5">Adicionar Trip</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="campo1" className="form-label label">
            Título Trip
          </label>
          <input
            type="text"
            className="form-control"
            id="campo1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="campo2" className="form-label label">
            Descrição Trip
          </label>
          <textarea
            type="textarea"
            className="form-control"
            id="campo2"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Criar
        </button>
        <div
          className={`${
            tripPost ? 'alert alert-success fade show' : 'invisible'
          }`}
          role="alert"
        >
          Trip Adicionada com sucesso!
        </div>
      </form>
    </div>
  );
};

export default PostForm;
