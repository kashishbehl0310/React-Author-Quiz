import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';

class AuthorForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            imageUrl: '',
            books: [],
            bookTemp: ''
        };
        this.onFieldChange = this.onFieldChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.addBooks = this.addBooks.bind(this)
    }

    onFieldChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addBooks(event){
         this.setState({
             books: this.state.books.concat([this.state.bookTemp]),
             bookTemp: ''
         })
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.onAddAuthor(this.state);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="name" />
                            <input placeholder="Author Name" type="text" value={this.state.name} onChange={this.onFieldChange} className="form-control" name="name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="imageUrl" />
                            <input placeholder="Author Url" type="text" value={this.state.imageUrl} onChange={this.onFieldChange} className="form-control" name="imageUrl" />
                        </div>
                        <div className="form-group">
                            {this.state.books.map((book) => <p key={book}>{book}</p>)}
                            <input type="text" className="form-control" name="bookTemp" value={this.state.bookTemp} onChange={this.onFieldChange} />
                            <input type="button" className="btn btn-success" value="+" onClick={this.addBooks} />
                        </div>
                        <input type="submit" className="btn btn-primary" value="Add" />
                    </div>
                </div>
            </form>
        )
    }
}

function  AddAuthor({match, onAddAuthor}){
    return(
      <div className="container">
        <h1>Add Author</h1>
        <div className="container">
            <AuthorForm onAddAuthor={onAddAuthor} />
        </div>
      </div>
    )
  }

  export default AddAuthor;
