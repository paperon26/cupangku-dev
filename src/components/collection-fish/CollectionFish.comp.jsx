import React from 'react'
import CollectionItem from '../collection-item/CollectionItem.comp'

import './CollectionFish.style.css'

const CollectionFish = ({ ras, listIkan }) => (
  <div className="ras-blok">
    <h5 className="center">{ras.toUpperCase()}</h5>
    <div className="row">
      {
        listIkan
          .filter((ikan, idx) => idx < 4)
          .map(({id, ...otherItemProps}) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))
      }
    </div>
  </div>
)

export default CollectionFish