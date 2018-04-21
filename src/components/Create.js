import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      origin: '',
      name: '',
      difficulty: '',
      guide: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { origin, name, difficulty, guide} = this.state;

    axios.post('/api/book', { origin, name, difficulty, guide})
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { origin, name, difficulty, guide } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Tonberry Create
            </h3>
          </div>
          <div class="panel-body">
            <h4 id="enemyCreator"><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Enemy Creator</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="origin">Origin of Enemy:</label>
                <input type="text" class="form-control" name="origin" value={origin} onChange={this.onChange} placeholder="Origin" />
              </div>
              <div class="form-group">
                <label for="name">Name of Enemy:</label>
                <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
              <label class="addPage" for="difficulty">Rate the Difficulty of the Enemy:</label>
              <select class="form-control" id="difficulty">
                <option value="Adds">Adds</option>
                <option value="Mini-boss">Mini-boss</option>
                <option value="Mid-boss">Mid-boss</option>
                <option value="Final Boss">Final Boss</option>
              </select>
              </div>
              <div class="form-group">
                <label for="guide">Guide:</label>
                <textArea class="form-control" name="guide" onChange={this.onChange} placeholder="Guide to success" cols="80" rows="3">{guide}</textArea>
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;