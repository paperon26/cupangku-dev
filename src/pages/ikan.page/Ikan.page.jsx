import React from 'react'
import CollectionFish from '../../components/collection-fish/CollectionFish.comp'
import IKAN_DATA from './ikan.data'

class IkanPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      collections: IKAN_DATA
    }
  }

  render() {
    const { collections } = this.state
    return (
      <div className="container grey lighten-2">
        {
          collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionFish key={id} {...otherCollectionProps} />
          ))
        }
      </div>
    )
  }
}


export default IkanPage