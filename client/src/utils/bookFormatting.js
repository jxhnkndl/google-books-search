// Create and export function to reduce author arrays to a single string
export const formatAuthors = (authors) => {

  // If there is only one author
  if (authors.length === 1) {
    return authors[0];
  }

  // If there are two authors
  if (authors.length === 2) {
    return `${authors[0]} and ${authors[1]}`;
  }

  // If there are more than two authors
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

// Convert info link from http to https
export const formatLink = (link) => {
  if (link.charAt(4) === 's') {
    return link;
  }

  const linkArr = link.split(':');
  linkArr.splice(1, 0, 's:');
  return linkArr.join('');
}