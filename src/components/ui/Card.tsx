import logo from "../../assets/images/logo.png";
import { IBook } from "../../types/globalTypes";

interface CardProps {
  book: IBook;
}

export function Card({ book }: CardProps) {
  const { title, author, genre, publicationDate } = book;
  return (
    <div className="card w-auto bg-primary text-primary-content">
      <div className="card-body">
        <figure>
          <img src={logo} className="w-1/2" alt="Book" />
        </figure>
        <h2 className="card-title">{title}</h2>
        <p> Author : {author}</p>
        <p> Genre : {genre}</p>
        <p> Publication Date : {publicationDate}</p>
        <div className="card-actions justify-end">
          <button className="btn">{publicationDate}</button>
        </div>
      </div>
    </div>
  );
}

// <div className="card card-side bg-base-100 shadow-xl">
//   <figure>
//     <img src={logo} alt="Movie" />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">{title}</h2>
//     <p>{author}</p>
//     <p>{genre}</p>
//     <p>{publicationDate}</p>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">Watch</button>
//     </div>
//   </div>
// </div>
