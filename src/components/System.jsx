import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './System.module.css';
import Header from './Header';
import UpdateModal from './UpdateModal';
import DeleteModal from './DeleteModal';
import PostForm from './PostForm';

const System = () => {
  const [data, setData] = React.useState(null);
  const [title, setTitle] = React.useState('');
  const [titleUpdate, setTitleUpdate] = React.useState('');
  const [content, setContent] = React.useState('');
  const [contentUpdate, setContentUpdate] = React.useState('');
  const [update, setUpdate] = React.useState(false);
  const [deleteData, setDeleteData] = React.useState(false);
  const [tripPost, setTripPost] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você faria a chamada para a sua API usando fetch ou Axios
    fetch('http://localhost:3001/filmes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    })
      .then((response) => response.json())
      .then(() => {
        setDeleteData((prev) => !prev);
        setTripPost(true);
        setTimeout(() => {
          setTripPost(false);
        }, 2500);
      })
      .catch((error) => {
        console.error('Erro ao criar post:', error);
      });
  };
  const handleUpdate = async (id) => {
    console.log(id);
    try {
      const response = await fetch(`http://localhost:3001/filmes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: titleUpdate, content: contentUpdate }),
      });

      if (response.ok) {
        {
          console.log(`_${id}`);
        }
        setUpdate((prev) => !prev);
      } else {
        console.error('Erro ao atualizar filme:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao atualizar filme:', error);
    }
  };
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3001/filmes/${id}`, {
        method: 'DELETE',
      });
      setDeleteData((prev) => !prev);
    } catch (error) {
      console.error('Erro ao excluir post:', error);
    }
  };
  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3001/');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }

    fetchData();
  }, [deleteData, update]);

  return (
    <>
      <section className={styles.section}>
        <PostForm
          handleSubmit={handleSubmit}
          title={title}
          setTitle={setTitle}
          content={content}
          setContent={setContent}
          tripPost={tripPost}
        />
        {/* LISTA DAS TRIPS */}
        <div className="mt-5 ms-5">
          <h1 className="mb-5">Trips anunciadas</h1>
          <ul className="list-group">
            {data?.map((c) => (
              <div key={c._id}>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{c.title}</div>
                    {c.content}
                  </div>
                  <button
                    className="btn btn-warning me-2"
                    data-bs-toggle="modal"
                    data-bs-target={`#_${c._id}`}
                  >
                    Atualizar
                  </button>
                  <button
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target={`#_${c._id}-delete`}
                  >
                    Excluir
                  </button>
                </li>
                {/* Update Modal */}
                <UpdateModal
                  titleValue={titleUpdate}
                  contentValue={contentUpdate}
                  setTitleUpdate={setTitleUpdate}
                  setContentUpdate={setContentUpdate}
                  c={c}
                  handleUpdate={handleUpdate}
                />
                {/* Delete Modal */}
                <DeleteModal c={c} handleDelete={handleDelete} />
              </div>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default System;
