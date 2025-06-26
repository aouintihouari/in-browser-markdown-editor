import ToggleMenu from "./HeaderComponents/ToggleMenu";
import DocumentTab from "./HeaderComponents/DocumentTab";
import Logo from "./UI/Logo";
import DocumentActions from "./HeaderComponents/DocumentActions";

const Header = ({
  openMenu,
  onToggleMenu,
  selectedDocument,
  tempDocumentName,
  onDocumentNameChange,
  onOpenDeleteModal,
  onSaveChanges,
}) => {
  return (
    <header className="flex h-[72px] items-center overflow-hidden bg-gray-900">
      <ToggleMenu openMenu={openMenu} onToggleMenu={onToggleMenu} />
      <div className="flex w-full items-center justify-between">
        <div className="flex">
          <div className="hidden lg:flex">
            <div className="mx-6 items-center text-[15px] leading-[18px] font-bold tracking-[5px] text-white lg:flex">
              <Logo />
            </div>
            <div className="my-auto block h-10 w-0.5 bg-gray-500"></div>
          </div>
          {selectedDocument.id !== "" && (
            <DocumentTab
              name={tempDocumentName}
              onNameChange={onDocumentNameChange}
            />
          )}
        </div>
        <DocumentActions
          openMenu={openMenu}
          selectedDocument={selectedDocument}
          onOpenDeleteModal={onOpenDeleteModal}
          onSaveChanges={onSaveChanges}
        />
      </div>
    </header>
  );
};

export default Header;
