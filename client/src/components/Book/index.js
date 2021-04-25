// Import modules
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { formatAuthors } from '../../utils/bookFormatting';
import Button from 'react-bootstrap/Button';
import Image, { propTypes } from 'react-bootstrap/Image';
import API from '../../utils/API';

// Create and export Book component
export default function Book(props) {
  // Set this result's bookData state to the props passed in from the API response
  const [bookData, setBookData] = useState({
    title: props.title,
    authors: props.authors,
    description: props.description,
    image: props.image,
    link: props.link,
  });

  // Capture application location to use in button rendering
  const location = useLocation();

  // Redirect browser to Google Books info page
  const handleBtnView = () => {
    window.location.href = props.link;
  }

  // Save book to database
  const handleSaveBook = async () => {
    try {
      const response = await API.saveBook(bookData);
      console.log(response);
      console.log('Book saved.');
    } catch (err) {
      console.log(err);
    }
  }

  // Returned component to render
  return (
    <div id={props.id} className="book bg-light text-secondary rounded p-4 my-3">
      <div className="row">
        <div className="col-12 col-md-2">
          <Image src={props.image} rounded fluid />
        </div>
        <div className="col-12 col-md-10">
          <p className="h5 text-white">{props.title}</p>
          <p>{formatAuthors(props.authors)}</p>
          <p>{props.description}</p>
          <Button className="py-2 px-4 mr-2" variant="primary" onClick={handleBtnView}>
            View
          </Button>
          {location.pathname === '/search' ? (
            <Button className="py-2 px-4 mr-2" variant="secondary" onClick={() => handleSaveBook()}>
              Save
            </Button>
          ) : (
            <Button className="py-2 px-4 mr-2" variant="danger">
              Delete
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
