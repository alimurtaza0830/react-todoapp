import React, { Component } from 'react';
import Todoitem from './Todoitem';

class TodoList extends Component {
	render() {
		const { items, clearList, handleDelete, handleEdit } = this.props;
		return (
			<div>
				<ul className="list-group my-5">
					<h3 className="text-capitalize text-center"> todo list </h3>
					{
						items.map(item => {
							return (
								<Todoitem 
									key={item.id} 
									title={item.title}
									handleDelete={() => handleDelete(item.id)}
									handleEdit={() => handleEdit(item.id)} />
							)
						})
					}
					
					<button
						type="button" 
						className="btn btn-danger btn-block text-capitalize mt-5"
						onClick={clearList}
						>
						Clear List
					</button>
				</ul>

			</div>
			
		)
	}
}

export default TodoList;

