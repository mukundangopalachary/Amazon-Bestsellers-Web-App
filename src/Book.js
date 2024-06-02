// Book Component
const Book = (props) => {
    const {image, title, author, bookurl} = props.book;
    return (
        <article className='book'>
            <a target='_blank' href = {bookurl} rel="noreferrer">
            <img src = {image} alt = {title} ></img>
            </a>
            <h1>{title}</h1>
            <h4>{author}</h4>
        </article>
    );
};

export default Book;