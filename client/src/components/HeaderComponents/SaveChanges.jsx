const SaveChanges = ({ onSave }) => {
  const handleSave = (e) => {
    e.preventDefault();
    onSave();
  };
  return (
    <button
      onClick={handleSave}
      className="bg-accent-primary heading-m hover:bg-accent-secondary cursor-pointer items-center justify-center gap-2 rounded-[4px] text-white duration-300 md:flex md:h-[40px] md:w-[140px]"
    >
      <div className="flex h-[40px] w-[40px] items-center justify-center md:h-auto md:w-auto">
        <img src="./assets/images/icon-save.svg" alt="save icon" />
      </div>
      <p className="hidden md:block">Save Changes</p>
    </button>
  );
};

export default SaveChanges;
