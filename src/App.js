import React from 'react'
import './App.css'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      items: props.items || [],
      value: '',
      
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange(event){
    this.setState({value: event.target.value})
  }


  handleSubmit(event){
    this.setState({
      // const items = state.items.concat(state.value)
      items: [this.state.value, ...this.state.items],
      value: ''
      
    })
    
    event.preventDefault()
  }




  // componentDidMount(){
  //   const {items} = this.state
  //   for (let i = 0; i < items.length; i++){
  //     if (items[i].status === "completed" )
  //   }
  // }

  // componentDidUnmount(){

  // }


  form(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="to do item..." value={this.state.value} onChange={this.handleChange}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }

  taskComplete(event){

    const strikethrough = {
      textDecoration: "line-through"
    }

    const element = event.target
    element.classList.toggle("crossed-line")

    console.log(event.target)

    


  }

  taskDelete(event){


  }


  numberList(){
    const {items} = this.state

    

    if(items){
      const listItems = items.map((item, index) =>
      <div>
        <li key={index} className="tasks" onClick={this.taskComplete}>{item} </li>
        
        <button onClick={this.taskDelete}>✖️</button>
      </div>
      
    )

    return (
      <ul>{listItems}</ul>
    )
    }
    


  }

  render(){
    const {items} = this.state

    const strikethrough = {
      textDecoration: "line-through"
    }

    // const items = [1, 2, 3, 4, 5]

    

    return(
      <div>
        <h1>To Do List</h1>
        
        {this.form()}

        {this.numberList()}

      </div>
    )
  }
}

export default App;
