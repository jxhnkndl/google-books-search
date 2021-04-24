// Import modules
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { formatAuthors } from '../../utils/bookFormatting';
import Button from 'react-bootstrap/Button';
import Image, { propTypes } from 'react-bootstrap/Image';

// Create and export Book component
export default function Book(props) {
  const location = useLocation();

  const handleBtnView = () => {
    window.location.href = props.link;
  }

  // Returned component to render
  return (
    <div className="book bg-light text-secondary rounded p-4 my-3">
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
            <Button className="py-2 px-4 mr-2" variant="secondary">
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
