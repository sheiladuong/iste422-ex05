import React from 'react';
import PeopleModal from './PeopleModal';

const PeopleGroup = ({title, data}) => {
    return(
        <>
      <h2 className="people-group-title">{title}</h2>
      <div 
        className="peopleList"
        style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
        }}
      >
        {data.map((p, index) => (
          <div
            className="peopleListItem"
            key={index}
            style={{
                width: 'calc(33.33% - 16px)',
                boxSizing: 'border-box',
                padding: '0',
                backgroundColor: '#141417',
                border: '0.5px solid #CCCCCC',
                borderRadius: '8px'
            }}
          >
            <PeopleModal {...p} />
            <p>{p.title}</p>
          </div>
        ))}
      </div>
    </>
    )
}

export default PeopleGroup;