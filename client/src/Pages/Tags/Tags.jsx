import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './tagsList.jsx';
import './Tags.css';

const Tags = ({ slidein }) => {
  return (
    <div className='home-container-1'>
        <LeftSidebar slidein={slidein}/>
        <div className='home-container-2'>
            <h1 className='Tags-h1'>
                Tags
            </h1>
            <p className='tags-p'>A tag is a keyword or label that categorise your question with othersimilar question .</p>
            <p className='tags-p'>
                Using right  tags makes it easier for others to find  and answers  your questions .
            </p>
            <div className='Tags-list-container'>
                <TagsList />
            </div>
        </div>
    </div>
  )
}

export default Tags;
