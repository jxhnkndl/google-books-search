// Import modules
import React from 'react';
import Button from 'react-bootstrap/Button';
import Image, { propTypes } from 'react-bootstrap/Image';

// Create and export Book component
export default function Book(props) {
  // Reduce authors array down to a single string
  const formatAuthors = () => {
    const { authors } = props;

    if (authors.length === 1) {
      return authors[0];
    }

    if (authors.length === 2) {
      return `${authors[0]} and ${authors[1]}`;
    }

    if (authors.length > 2) {
      let output = '';
      authors.forEach((author, index) => {
        if (index === authors.length - 1) {
          output += `and ${author}`;
        } else {
          output += `${author}, `;
        }
      });
      return output;
    }
  };

  // Returned component to render
  return (
    <div className="book bg-dark text-secondary rounded p-4 my-3">
      <div className="row">
        <div className="col-12 col-md-2">
          <Image src={props.image} rounded fluid />
        </div>
        <div className="col-12 col-md-10">
          <p className="h5 text-white">{props.title}</p>
          <p>{formatAuthors()}</p>
          <p>{props.description}</p>
          <Button className="py-2 px-4 mr-2" variant="primary">View</Button>
          <Button className="py-2 px-4 mr-2" variant="secondary">Save</Button>
        </div>
      </div>
    </div>
  );
}
