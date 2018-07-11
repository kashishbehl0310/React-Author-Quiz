import React from 'react';
import './App.css';
import './bootstrap.min.css'

const Hero = () => {
  return(
    <div className="row">
      <div className="jumbotron col-md-12">
        <h1>Author Quiz</h1>
        <p>Select the book written by author shown</p>
      </div>  
    </div>
  )
}

const Book = ({title}) => {
  return(
    <div className="answer">
      <h4>{title}</h4>
    </div>
  )
}

const Turn = ({author, books}) => {
  return(
     <div className="row turn">
        <div className="col-md-6">
          <img src={author.imageUrl} className="authorImage" alt="author" />
        </div>
        <div className="col-md-6">
          {books.map((title) => <Book title={title} key={title} /> )}
        </div>
     </div> 
  )
}

const Footer = () => {
  return (
    <div id="footer" className="row">
      <div className="col-md-12">
        <p>All images are from <a href="http://commons.wikimedia.org/wiki/Main_Page">Wikimedia Comons</a> and are in the public domain</p>
      </div>
    </div>
  )
}

const AuthorQuiz = ({turnData}) => {
  return (
    <div className="container">
        <Hero />
        <Turn {...turnData} />
        <Footer />
      </div>
  )
}

// class App extends Component {

//   render() {
//     return (
//       <div className="container">
//         <Hero />
//         <Footer />
//       </div>
//     );
//   }
// }

export default AuthorQuiz;
