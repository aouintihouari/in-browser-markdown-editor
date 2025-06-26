import Document from "./Document";

const DocumentsList = ({ onSelectedDocument, documents, error }) => {
  return (
    <section>
      {error ? (
        <p className="text-red-500">Error : {error?.message}</p>
      ) : documents.length === 0 ? (
        <p>No document available!</p>
      ) : (
        documents.map((document) => (
          <Document
            key={document.id}
            document={document}
            onSelectedDocument={onSelectedDocument}
          />
        ))
      )}
    </section>
  );
};

export default DocumentsList;
