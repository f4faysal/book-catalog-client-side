const DeleteModal = ({ handleDeleteBook, data }) => {
  return (
    <dialog id="my_modal_1" className="modal">
      <form method="dialog" className="modal-box">
        <h3 className="font-bold text-lg">Confrom to Delete</h3>
        <p>Book Title : {data?.data?.title}</p>
        <div className="modal-action">
          <button
            onClick={() => handleDeleteBook(data?.data?._id)}
            className="btn btn-warning"
          >
            Detete
          </button>
          <button className="btn btn-accent">Close</button>
        </div>
      </form>
    </dialog>
  );
};

export default DeleteModal;
