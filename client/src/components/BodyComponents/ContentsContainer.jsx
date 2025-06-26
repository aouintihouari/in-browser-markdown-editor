import Preview from "./Preview";
import Markdown from "./Markdown";
import Separator from "./Separator";

const ContentsContainer = ({
  selectedDocument,
  openMenu,
  showMarkdown,
  tempDocumentContent,
  onContentChange,
}) => {
  return (
    <>
      <div className="hidden h-[calc(100%-100px)] flex-grow overflow-hidden md:flex">
        {showMarkdown && (
          <>
            <Markdown
              selectedDocument={selectedDocument}
              tempDocumentContent={tempDocumentContent}
              onContentChange={onContentChange}
            />
            <Separator openMenu={openMenu} />
          </>
        )}
        <Preview
          showMarkdown={showMarkdown}
          tempDocumentContent={tempDocumentContent}
        />
      </div>
      <div className="flex h-[calc(100%-100px)] flex-grow overflow-hidden md:hidden">
        {showMarkdown ? (
          <Markdown
            selectedDocument={selectedDocument}
            tempDocumentContent={tempDocumentContent}
            onContentChange={onContentChange}
          />
        ) : (
          <Preview tempDocumentContent={tempDocumentContent} />
        )}
      </div>
    </>
  );
};

export default ContentsContainer;
