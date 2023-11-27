import React from 'react';

const DeleteModal = ({ c, handleDelete }) => {
  return (
    <div
      className="modal fade"
      id={`_${c._id}-delete`}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Excluir Trip
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            Tem certeza que deseja excluir essa trip?
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Fechar
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleDelete(c._id)}
              data-bs-dismiss="modal"
            >
              Excluir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
