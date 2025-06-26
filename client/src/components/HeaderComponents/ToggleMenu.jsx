const ToggleMenu = ({ openMenu, onToggleMenu }) => {
  return (
    <div
      className="hover:bg-accent-primary flex min-h-[72px] min-w-[72px] cursor-pointer items-center justify-center bg-gray-600 duration-500"
      onClick={onToggleMenu}
    >
      <img
        src={
          openMenu
            ? "./assets/images/icon-close.svg"
            : "./assets/images/icon-menu.svg"
        }
      />
    </div>
  );
};

export default ToggleMenu;
