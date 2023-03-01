import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className='item'>
        <div>
        <img src={this.props.item.image} onClick={()=> this.props.onShowItem(this.props.item)}/>
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.descr}</p>
          <b>{this.props.item.price}$</b>
          <div className='add-to-cart' onClick={() => this.props.onAddToOrder(this.props.item)}>+</div>
        </div>
      </div>
    )
  }
}

export default Item