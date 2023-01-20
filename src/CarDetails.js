import React from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom/client';

var config = {
    method: 'post',
    url:'https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles',
    headers: {
      'x-api-key': 'TUfXa8r4YZ3kgZBAFxLbE5EYPp6ct2VN1yh9B8Pj',
      'Content-Type': 'application/json',
    },
    data: {registrationNumber: 'AA19AAA'}
  };


export default function CarDetails() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
      axios(config)
      .then((response) => {
        setPost(response.data);
      });
    }, []);
  
    if (!post) return null;
  
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
  }