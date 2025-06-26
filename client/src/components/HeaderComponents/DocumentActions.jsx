import DeleteDocument from "./DeleteDocument";
import SaveChanges from "./SaveChanges";

const DocumentActions = ({
  openMenu,
  selectedDocument,
  onOpenDeleteModal,
  onSaveChanges,
}) => {
  const baseClasses = "flex gap-5 duration-300";
  const positionClass = openMenu ? "translate-x-60" : "translate-x-6 mr-12";
  return (
    <div className={`${baseClasses} ${positionClass}`}>
      <DeleteDocument
        selectedDocument={selectedDocument}
        onOpenDeleteModal={onOpenDeleteModal}
      />
      <SaveChanges onSave={onSaveChanges} />
    </div>
  );
};

export default DocumentActions;
