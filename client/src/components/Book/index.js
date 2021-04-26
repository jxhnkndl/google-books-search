// Import modules
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { formatAuthors, formatLink } from '../../utils/bookFormatting';
import Button from 'react-bootstrap/Button';
import Image, { propTypes } from 'react-bootstrap/Image';
import { toast } from 'react-toastify';
import API from '../../utils/API';

// Create and export Book component
export default function Book(props) {
  // Set this result's bookData state to the props passed in from the API response
  const [bookData, setBookData] = useState({
    id: props._id,
    title: props.title,
    authors: props.authors,
    description: props.description,
    image: props.image,
    link: formatLink(props.link),
  });

  // Capture application location to use in button rendering
  const location = useLocation();

  // Redirect browser to Google Books info page
  const handleBtnView = () => {
    window.location.href = props.link;
  };

  // Save book to database
  const handleSaveBook = async () => {
    try {
      const response = await API.saveBook(bookData);
      toast.success('Book saved! 🍎');
    } catch (err) {
      toast.error('Uh oh! Looks like something went wrong. Can you try again? 🧐');
      console.log(err);
    }
  };

  // Delete book from database and update savedBooks state
  const handleDeleteBook = async (id) => {
    try {
      const response = await API.deleteBook(id);
      toast.success('Book deleted! 🍎');
      props.loadBooks();
    } catch (err) {
      toast.error('Uh oh! Looks like something went wrong. Can you try again? 🧐');
      console.log(err);
    }
  };

  // Returned component to render
  return (
    <div
      id={props.id}
      className="book bg-light text-secondary rounded p-4 my-3"
    >
      <div className="row">
        <div className="col-12 col-md-2 mb-3">
          <Image src={props.image} rounded fluid />
        </div>
        <div className="col-12 col-md-10">
          <p className="h5 text-white">{props.title}</p>
          <p>{formatAuthors(props.authors)}</p>
          <p>{props.description}</p>
          <a
            href={formatLink(props.link)}
            className="btn btn-primary py-2 px-4 mr-2 my-2"
            target="_blank"
            rel='noopener noreferrer'
          >
            <i class="fas fa-external-link-alt mr-2"></i>
            View
          </a>

          {/* Conditionally render a Save button or Delete button based on route location */}
          {location.pathname === '/search' || location.pathname === '/' ? (
            <Button
              className="py-2 px-4 mr-2 my-2"
              variant="secondary"
              onClick={() => handleSaveBook()}
            >
              <i class="fas fa-bookmark mr-2"></i>
              Save
            </Button>
          ) : (
            <Button
              className="py-2 px-4 mr-2 my-2"
              variant="danger"
              onClick={() => handleDeleteBook(props.id)}
            >
              <i class="far fa-trash-alt mr-2 "></i>
              Delete
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
