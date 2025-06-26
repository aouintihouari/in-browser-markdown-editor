const NewDocumentButton = ({ onCreateDocument, isCreating = false }) => {
  return (
    <button
      onClick={onCreateDocument}
      disabled={isCreating}
      className={`heading-m my-4 flex w-11/12 items-center justify-center rounded-[4px] p-3 text-white duration-300 ${
        isCreating
          ? "cursor-not-allowed bg-gray-500"
          : "bg-accent-primary hover:bg-accent-secondary hover:cursor-pointer"
      }`}
    >
      {isCreating ? "Creating..." : "+ New Document"}
    </button>
  );
};

export default NewDocumentButton;
