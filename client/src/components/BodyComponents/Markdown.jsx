const Markdown = ({
  selectedDocument,
  tempDocumentContent,
  onContentChange,
}) => {
  return (
    <textarea
      className="h-full w-full resize-none overflow-auto overflow-y-auto bg-white p-4 text-gray-600 duration-300 md:w-[calc(50%-1.5px)] dark:bg-gray-900 dark:text-gray-300"
      value={tempDocumentContent || selectedDocument.content}
      onChange={(e) => onContentChange && onContentChange(e.target.value)}
    />
  );
};

export default Markdown;
