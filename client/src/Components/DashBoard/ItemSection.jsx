import React from 'react';
import { Link } from 'react-router-dom';

// Component for rendering the item section
const ItemSection = ({ selectedItem, itemType, addButtonLabel, data, handleDelete }) => {
  return (
    <>
    <div className='w-50 mx-auto mt-4 text-center'>
      {selectedItem === itemType && (
        <>
          <Link to={`addform/${selectedItem}`}>
            <button className='btn btn-success'>Add {addButtonLabel}</button>
          </Link>
          {data.map((res, index) => (
            <div key={res.id} className='rounded-2 shadow my-4 text-center'>
              <h5>Name: {res.name}</h5>
              <Link to={`updateform/${selectedItem}/${res.id}`}>
                <button className='btn btn-primary mx-5'>update</button>
              </Link>
              <button className='btn btn-danger mx-5' onClick={() => { handleDelete(res.id) }}>
                delete
              </button>
            </div>
          ))}
        </>
      )}
      </div>
    </>
  );
};
export default ItemSection;