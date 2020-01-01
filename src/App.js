import React, { Component } from 'react';
import Input from './components/input';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import uuid from 'uuid';

class App extends Component {

  state={
    items: JSON.parse(localStorage.getItem('mytodo')) || [],
    id:0,
    item:'',
    editItem:false
  };


  handleChange = e => {
    this.setState({
      item: e.target.value
    })
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.item === '') {
      window.confirm('Please Enter Something');
    } else {
      const newItem = {
      id:this.state.id,
      title:this.state.item
    };

    const LSitems = [...this.state.items, newItem];
    
    this.setState({ 
      items: LSitems, 
      item: '',
      id: uuid(),
      editItem: false 
    });
    
    localStorage.setItem('mytodo', JSON.stringify(LSitems));

    }
  };
  
  clearList = () => {
    this.setState({
      items:[]
    });
    localStorage.clear();
  };
  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    });
    localStorage.setItem('mytodo', JSON.stringify(filteredItems));
  };

  handleEdit = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id:id
    })
  }
  render() {
    const { item, editItem, items } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
              <h3 className="text-capitalize text-center">
                To Do App
              </h3>
                <div className="col">
                    <Input 
                      item={item} 
                      handleChange={this.handleChange} 
                      handleSubmit={this.handleSubmit}
                      editItem={editItem} 
                    />
                </div>
                <div className="col">
                    <TodoList 
                      items={items}
                      clearList={this.clearList}
                      handleDelete={this.handleDelete}
                      handleEdit={this.handleEdit} 
                    />
                </div>
          </div>
        </div>
      </div>
      
    );
  }
}
export default App;
