import React from 'react'
import MenuItem from '../menu-item/MenuItem.comp'

class Directory extends React.Component {
  constructor(){
    super()

    this.state = {
      sections : [
        {title: 'Ikan', subtitle: 'List Ikan', id : 1, imageUrl : '', color : 'purple'},
        {title: 'Toko', subtitle: 'List Toko', id : 2, imageUrl : '', color : 'teal'},
        {title: 'Stok', subtitle: 'List Stok', id : 3, imageUrl : '', color : 'red'},
        {title: 'Lokasi', subtitle: 'List Lokasi', id : 4, imageUrl : '', color : 'indigo'},
        {title: 'Warna', subtitle: 'List Warna', id : 5, imageUrl : '', color : 'blue'},
      ]
    }
  }

  render() {
    return(
      <div className="row">
        {
          this.state.sections.map(({title, subtitle, id, color}) => (
            <MenuItem key={id} title={title} subtitle={subtitle} color={color} />
          ))
        }
      </div>
    )
  }
}

export default Directory