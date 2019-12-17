import React, { Component } from 'react';

class Input extends Component {

	render() {
		const { item, handleChange, handleSubmit, editItem } = this.props;
		return (
			<div className="card card-body my-3">
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<input 
							type="text" 
							className="form-control text-capitalize"
							placeholder="Add Something"
							value={item}
							onChange={handleChange} 
						/>
					</div>
					<button 
						type="submit" 
						className={editItem ? 'btn btn-success btn-block' : 'btn btn-primary btn-block'}>
						{editItem ? 'Edit Item' : 'Add Item'}
					</button>
				</form>
			</div>
		);
	}
}
export default Input;
