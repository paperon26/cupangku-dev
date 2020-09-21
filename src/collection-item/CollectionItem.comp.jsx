import React from 'react'

const CollectionItem = ({ id, name, gender, age, imageUrl }) => (
  <div className="col s12 m3 l3">
    <div className="card">
      <div className="card-image">
        <img src={imageUrl} alt="gambar ikan"/>
        <span className="card-title">{name}</span>
      </div>
      <div className="card-content">
        <p>{gender}</p>
        <p>{age}</p>
      </div>
    </div>
  </div>
)

export default CollectionItem