import React from 'react';

const UpdateModal = ({
  titleValue,
  contentValue,
  setTitleUpdate,
  setContentUpdate,
  handleUpdate,
  c,
}) => {
  return (
    <div
      className="modal fade"
      id={`_${c._id}`}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Atualizar Trip
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="campo1" className="form-label label">
                  Título
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="campo1"
                  value={titleValue}
                  onChange={(e) => setTitleUpdate(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="campo2" className="form-label label">
                  Descrição
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="campo2"
                  value={contentValue}
                  onChange={(e) => setContentUpdate(e.target.value)}
                  required
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="submit"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Fechar
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                handleUpdate(c._id);
              }}
              data-bs-dismiss="modal"
            >
              Atualizar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
