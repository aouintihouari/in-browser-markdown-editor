import DarkModeSwitch from "./SidebarComponents/DarkModeSwitch";
import DocumentsList from "./SidebarComponents/DocumentsList";
import NewDocumentButton from "./SidebarComponents/NewDocumentButton";
import Logo from "./UI/Logo";

const Sidebar = ({
  onToggleTheme,
  onSelectedDocument,
  onCreateDocument,
  isDarkMode,
  documents,
  error,
  openMenu,
  isCreating,
}) => {
  return (
    <nav
      className={`flex min-h-full flex-col justify-between bg-gray-800 transition-all duration-300 ease-in-out ${
        openMenu
          ? "w-8/12 translate-x-0 p-6 sm:w-6/12 md:w-4/12 lg:w-2/12"
          : "w-0 -translate-x-full p-0"
      } flex-shrink-0 overflow-hidden`}
    >
      <aside
        className={`transition-opacity duration-300 ${openMenu ? "opacity-100" : "opacity-0"}`}
      >
        <div className="my-4 block text-[15px] leading-[18px] font-bold tracking-[5px] text-white lg:hidden">
          <Logo />
        </div>
        <p className="heading-s text-gray-400">MY DOCUMENTS</p>
        <NewDocumentButton
          onCreateDocument={onCreateDocument}
          isCreating={isCreating}
        />
        <DocumentsList
          onSelectedDocument={onSelectedDocument}
          documents={documents}
          error={error}
        />
      </aside>
      <div
        className={`transition-opacity duration-300 ${openMenu ? "opacity-100" : "opacity-0"}`}
      >
        <DarkModeSwitch onToggleTheme={onToggleTheme} isDarkMode={isDarkMode} />
      </div>
    </nav>
  );
};

export default Sidebar;
