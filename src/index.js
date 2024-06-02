// imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {books} from './books';
import Book from './Book';

// BookList Component
const BookList = () => {
    
    return (
        <section>
        <h1 className='title'>AMAZON BESTSELLERS</h1>
        <section className='booklist'>
            
            {books.map((book) => {
                //const {image, title, author, bookurl, id} = book;
                return <Book  book = {book} key = {book.id}></Book>
            })}
        </section>
        </section>
    );
}





// ReactDOM.render(<Greeting />, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);