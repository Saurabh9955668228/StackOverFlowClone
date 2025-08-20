import React from 'react'

const TagsList = () => {
  // Example static data, replace with actual data fetching logic if needed
  const tags = [
    { tagName: 'JavaScript', tagDesc: 'Programming language' },
    { tagName: 'React', tagDesc: 'Frontend library' },
    // Add more tags as needed
  ];

  return (
    <div className='tags-list-container'>
      {tags.map((tag, index) => (
        <div key={index} className='Tag'>
          <h5>{tag.tagName}</h5>
          <p>{tag.tagDesc}</p>
        </div>
      ))}
    </div>
  )
}

export default TagsList; 