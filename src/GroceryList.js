import { Component } from 'react';
import imageThree from './cart.png';


export class GroceryList extends Component {
   state = {
        userInput: '',
        groceryList: []

        }

        onChangeEvent(event){
            this.setState({userInput: event})
        }

        addItem(input){
            if (input === ''){
                alert("Please enter an item")
            } else {
            let listArray = this.state.groceryList;
            listArray.push(input);
            this.setState({groceryList: listArray, userInput: ''})
            }
        }
        
        deleteItem(){
            let listArray = this.state.groceryList;
            listArray = [];
            this.setState({groceryList: listArray});
        }

        crossedWord (event){
            const list = event.target;
            list.classList.toggle('crossed');
        }

        onFormSubmit(e){
            e.preventDefault();
        }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className='container'>
                    <input type="text" 
                            placeholder="What do you want to buy?"
                            onChange={(event) => {this.onChangeEvent(event.target.value)}}
                            value={this.state.userInput}/>
                </div>
                <div className='container'>
                    <button onClick={()=> this.addItem(this.state.userInput)} className="btn add" >Add</button>
                </div>

                <ul>
                    {this.state.groceryList.map((item, index) => (
                        <li onClick={this.crossedWord} key={index}>
                        <img src={ imageThree} width="30px" alt="cart" />
                        {item}</li>
                    ))}
                </ul>
                <div className='container'>
                <button onClick={() => this.deleteItem()} className="btn delete" >Delete</button>
                </div>
                </form>
            </div>

        )  
    }
}