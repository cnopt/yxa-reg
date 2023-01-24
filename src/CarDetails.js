import React from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom/client';

var config = {
    method: 'post',
    url:'https://d1kz03n03qfa86.cloudfront.net/vehicle-enquiry/v1/vehicles',
    headers: {
      'x-api-key': 'TUfXa8r4YZ3kgZBAFxLbE5EYPp6ct2VN1yh9B8Pj'
    },
    data: {'registrationNumber': 'HY06ZVX' }
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
        <p>{post}</p>
      </div>
    );
  }