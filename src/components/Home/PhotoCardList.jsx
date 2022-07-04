import React from 'react';
import { Link } from 'react-router-dom';

const PhotoCardList = (props) => {
  return (
    <React.Fragment>
      <ul>
        { props.arrayList.map((list, index) => (
            <li
              key={index}  
            ><Link to={list.location}>{list.name}</Link></li>
          ))}
      </ul>
    </React.Fragment>
  )
}

export default PhotoCardList
