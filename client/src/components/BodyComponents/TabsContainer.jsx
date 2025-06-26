import MarkdownTab from "./MarkdownTab";
import Separator from "./Separator";
import PreviewTab from "./PreviewTab";

const TabsContainer = ({ openMenu, showMarkdown, onShowMarkdown }) => {
  return (
    <>
      <div className="hidden md:flex">
        {showMarkdown && (
          <>
            <MarkdownTab />
            <Separator />
          </>
        )}
        <PreviewTab
          openMenu={openMenu}
          showMarkdown={showMarkdown}
          onShowMarkdown={onShowMarkdown}
        />
      </div>
      <div className="flex md:hidden">
        {showMarkdown ? (
          <MarkdownTab openMenu={openMenu} onShowMarkdown={onShowMarkdown} />
        ) : (
          <PreviewTab
            showMarkdown={showMarkdown}
            onShowMarkdown={onShowMarkdown}
          />
        )}
      </div>
    </>
  );
};

export default TabsContainer;
