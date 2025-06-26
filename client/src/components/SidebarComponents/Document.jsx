const Document = ({ document, onSelectedDocument }) => {
  return (
    <div
      onClick={() => onSelectedDocument(document)}
      className="my-2 flex cursor-pointer items-center gap-4"
    >
      <img
        className="h-[16px] w-[13.71px]"
        src="./assets/images/icon-document.svg"
        alt="document icon"
      />
      <ul className="flex list-none flex-col gap-1">
        <li className="body-s text-gray-400">{document.date}</li>
        <li className="heading-m hover:text-accent-primary text-white duration-500">
          {document.name}
        </li>
      </ul>
    </div>
  );
};

export default Document;
