import { useNavigate } from "react-router-dom";

const Modal = ({ getbookData, reset }: any) => {
  const navigate = useNavigate();
  const { user, title, author, genre, publicationDate } = getbookData;
  const uplodDb = () => {
    console.log(getbookData);
    reset();
  };
  return (
    <dialog id="conframModal" className="modal">
      <form method="dialog" className="modal-box text-left">
        <h3 className="font-bold text-lg">Add a new Book</h3>
        <p className="my-1">
          {" "}
          <span className="font-semibold text-white"> Usere mail : </span>{" "}
          {user}{" "}
        </p>
        <p className="my-1">
          {" "}
          <span className="font-semibold text-white"> Title : </span> {title}{" "}
        </p>
        <p className="my-1">
          {" "}
          <span className="font-semibold text-white"> Author : </span>
          {author}{" "}
        </p>
        <p className="my-1">
          {" "}
          <span className="font-semibold text-white"> Genre : </span> {genre}{" "}
        </p>
        <p className="my-1">
          {" "}
          <span className="font-semibold text-white">
            {" "}
            Publication Date :
          </span>{" "}
          {publicationDate}{" "}
        </p>
        <div className="modal-action">
          {/* if there is a button in form, it will close the modal */}
          <button onClick={uplodDb} className="btn">
            Done
          </button>
          <button className="btn">Close</button>
        </div>
      </form>
    </dialog>
  );
};

export default Modal;
