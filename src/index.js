import React from "react";
import ReactDOM from "react-dom";

import './index.css';


const image = "https://images-eu.ssl-images-amazon.com/images/I/71GYH1FTilL._AC_UL200_SR200,200_.jpg ";
const title = "My Life in Full: Work, Family, and Our Future ";
const author = "Indra Nooyi";

const books = [
  {
    image : "https://images-eu.ssl-images-amazon.com/images/I/71GYH1FTilL._AC_UL200_SR200,200_.jpg ",
    title : "My Life in Full: Work, Family, and Our Future ",
    author : "Indra Nooyi"
  }
  ,
   {
    image : "https://images-eu.ssl-images-amazon.com/images/I/51u2E5fNq8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    title : "Rich Dad Poor Dad ",
    author : "Robert Kiyosaki"
  }
  ,
  {
    image : "https://images-eu.ssl-images-amazon.com/images/I/61MrRA4qE0L._AC_UL200_SR200,200_.jpg",
    title : "Polity for civil services",
    author : "M.Laxmikanth"
  }
]
 

function BookList(){
  return (
   <section className="bookList">
    
    {books.map((book) =>{
      return (
        <Book book={book}/> 
      );
    })}
   </section>
  );
}

const Book = (props) => {

  const {image,title,author} = props.book;
  return(
     <article className = "book">
         <img src={image} alt="Indra nooyi biography"/>
         <h1>{title}</h1>
         <h4>{author}</h4>
     </article>
  );
};


ReactDOM.render(<BookList/>,document.getElementById('root'));
