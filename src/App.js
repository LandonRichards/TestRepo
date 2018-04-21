import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Create from "./components/Create.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      upvotes: 0,
      downvotes: 0
    };
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/book')
      .then(res => {
        this.setState({ books: res.data });
        console.log(this.state.books);
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.props.history.push("/login");
        }
      });
  }

  logout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }

  // const myData = [upvotes, downvotes].concat(this.state.data)
  //   .sort((a, b) => a.itemupM > b.itemM)
  //   .map((item, i) => 
  //       <div key={i}> {item.matchID} {item.timeM}{item.description}</div>
  //   );


  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Game Guide Catalog! &nbsp;
              {localStorage.getItem('jwtToken') &&
                <button class="btn btn-primary" onClick={this.logout}>Logout</button>
              }
             <Link to="/create">
     <button class="btn btn-primary" type="button">
          Create a New post!
     </button>
 </Link>
            </h3>
          </div>
          <div class="panel-body">
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Guide Raiting</th>
                  <th>Game Name</th>
                  <th>Title</th>
                  <th>Difficulty</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                {this.state.books.map(book =>
                  <tr>
        
                  <td>

        <a className="upvote" onClick={() => {
            this.setState({ups: this.state.upvotes + 1})
          }}><img src={"images/wednesday.png"} id="upvote" /> {this.state.ups}</a>
        
        <a className="downvote" onClick={() => {
            this.setState({downs: this.state.downvotes + 1})
          }}><img src={"images/tuesday.png"} id="downvote"/> {this.state.downs}</a>
          </td>
                    <td><Link to={`/show/${book._id}`}>{book.origin}</Link></td>
                    <td>{book.name}</td>
                    <td>{book.difficulty}</td>
                    <td>{book.guide}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
