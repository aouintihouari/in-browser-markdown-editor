const BodyContainer = ({ children, openMenu }) => {
  return (
    <div
      className={`min-w-0 flex-grow transition-all duration-300 ease-in-out ${
        openMenu ? "w-4/12 sm:w-6/12 md:w-8/12 lg:w-10/12" : "w-full"
      } `}
    >
      {children}
    </div>
  );
};

export default BodyContainer;
