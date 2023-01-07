import React from 'react';
import '../styles/sectionHome.css';

const SectionHome = (props) => {
  return (
    <>
      <h3 className="text-uppercase px-3">{ props.title }</h3>
      <p className="text-justify p-3">{ props.description }</p>
    </>
  )
}

export default SectionHome;