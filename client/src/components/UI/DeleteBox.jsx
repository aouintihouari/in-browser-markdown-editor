const DeleteBox = ({ documentName, onConfirm, onCancel }) => {
  return (
    <section
      onClick={onCancel}
      className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-[rgba(0,0,0,.5)]"
    >
      <div className="w-11/12 rounded-lg bg-white p-6 md:w-6/12 lg:w-3/12">
        <h4 className="h4 my-4 text-gray-600">Delete this document?</h4>
        <p className="p text-gray-400">
          Are you sure you want to delete the ‘{documentName}’ document and its
          contents? This action cannot be reversed.
        </p>
        <div className="mt-6 flex flex-col gap-2 md:flex-row">
          <button
            onClick={onConfirm}
            className="bg-accent-primary hover:bg-accent-secondary w-full cursor-pointer rounded-lg p-2 text-white transition-colors"
          >
            Confirm & Delete
          </button>
        </div>
      </div>
    </section>
  );
};

export default DeleteBox;
