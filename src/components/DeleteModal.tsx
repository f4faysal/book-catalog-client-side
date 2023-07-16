const DeleteModal = ({ handleDeleteBook, data }: any) => {
  return (
    <>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Confrom to Delete</h3>
          <p>Book Title : {data?.data?.title}</p>
          <div className="modal-action">
            <label
              htmlFor="my_modal_6"
              onClick={() => handleDeleteBook(data?.data?._id)}
              className="btn btn-warning"
            >
              Detete!
            </label>

            <label htmlFor="my_modal_6" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
