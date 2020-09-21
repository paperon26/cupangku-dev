import React from 'react'
import MenuItem from '../menu-item/MenuItem.comp'

class Directory extends React.Component {
  constructor() {
    super()

    this.state = {
      sections: [
        {
          id: 1,
          title: 'Ikan',
          subtitle: 'List Ikan',
          imageUrl: '',
          color: 'purple',
          linkUrl: 'ikan'
        },
        {
          title: 'Toko',
          subtitle: 'List Toko',
          id: 2,
          imageUrl: '',
          color: 'teal',
          linkUrl: 'toko'
        },
        {
          id: 3,
          title: 'Stok',
          subtitle: 'List Stok',
          imageUrl: '',
          color: 'red',
          linkUrl: 'stok'
        },
        {
          id: 4, 
          title: 'Lokasi',
          subtitle: 'List Lokasi',
          imageUrl: '',
          color: 'indigo',
          linkUrl: 'lokasi'
        },
        {
          id: 5, imageUrl: '', 
          title: 'Warna',
          subtitle: 'List Warna', 
          color: 'blue',
          linkUrl: 'warna'
        },
      ]
    }
  }

  render() {
    return (
      <div className="row">
        {
          this.state.sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
          ))
        }
      </div>
    )
  }
}

export default Directory