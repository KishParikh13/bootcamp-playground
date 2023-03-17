import React from 'react';
import { Link } from 'react-router-dom';

class Item extends React.Component {
	render() {
  	return <li>
        
        {
          this.props.path.includes('disabled') ?
              <span className='text-slate-500 cursor-not-allowed'>
                  { this.props.name }
              </span>
          :
            <Link to={this.props.path} className='' >
              { this.props.name }
            </Link>
        }
        { this.props.children }
    </li>
  }
}

class List extends React.Component {
	constructor() {
  	super();
  }
  
  list(data) {
  	const children = (items) => {
    	if (items) {
      	return <ul className="list-disc list-inside ml-2">{ this.list(items) }</ul>
      }
    }
    
    return data.map((node, index) => {
      return <Item key={ node.id } path={ node.path } name={ node.name }>
        { children(node.items) }
      </Item>
    })
  }
  
  render() {
  	return <ul className='list-none leading-8'>
    	{ this.list(this.props.data) }
    </ul>
  }
}
export default List;