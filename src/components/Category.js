import React, { Component } from 'react'

export class Category extends Component {
     constructor(props){
          super(props)
          this.state= {
               categories:[
                    {
                         id: 'all',
                         name:'всё'
                    },
                    {
                         id: 'chairs',
                         name:'стулья'
                    },
                    {
                         id: 'tables',
                         name:'стол'
                    },
                    {
                         id: 'sofa',
                         name:'диван'
                    },
                    {
                         id: 'light',
                         name:'свет'
                    },
               ]
          }
     }
  render() {
    return (
      <div className='categories'>
          {this.state.categories.map(el =>(
               <div key={el.id} onClick={()=>this.props.chooseCategory(el.id)}>{el.name }</div>
          ))}
      </div>
    )
  }
}

export default Category