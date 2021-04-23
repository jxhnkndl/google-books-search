// Import dependencies
import React from 'react';
import Button from 'react-bootstrap/Button';

// Create and export Button component
export default function Button(props) {
  return (
    <Button variant={props.color}>
      {props.children}
    </Button>
  );
}