const DocumentTab = ({ name, onNameChange }) => {
  const handleInputChange = (e) => onNameChange(e.target.value);
  return (
    <div className="m-6 flex cursor-pointer items-center gap-4">
      <img src="./assets/images/icon-document.svg" alt="document icon" />
      <form className="flex flex-col">
        <label className="body-m text-gray-400">Document name</label>
        <input
          type="text"
          className="heading-m caret-accent-primary cursor-pointer border-0 bg-transparent text-white outline-0 hover:border-b-2 hover:border-white"
          value={name}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default DocumentTab;
