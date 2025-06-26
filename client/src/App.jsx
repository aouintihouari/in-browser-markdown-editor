import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import BodyContainer from "./components/BodyContainer";
import Header from "./components/Header";
import DeleteBox from "./components/UI/DeleteBox";
import api from "./api";
import TabsContainer from "./components/BodyComponents/TabsContainer";
import ContentsContainer from "./components/BodyComponents/ContentsContainer";

function App() {
  const [tempDocumentName, setTempDocumentName] = useState("");
  const [tempDocumentContent, setTempDocumentContent] = useState("");
  const [openMenu, setOpenMenu] = useState(true);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [showMarkdown, setShowMarkdown] = useState(true);
  const [documentToDelete, setDocumentToDelete] = useState(null);
  const [error, setError] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState({
    id: "",
    name: "",
    content: "",
  });
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const res = await api.get("/documents/");
        setDocuments(res.data.documents);
        if (res.data.documents && res.data.documents.length > 0) {
          const firstDoc = res.data.documents[0];
          setSelectedDocument({
            id: firstDoc.id,
            name: firstDoc.name,
            content: firstDoc.content,
          });
          setTempDocumentName(firstDoc.name);
          setTempDocumentContent(firstDoc.content);
        }
      } catch (err) {
        setError(err);
      }
    };
    fetchDocuments();
  }, []);

  const handleToggleTheme = () => setIsDarkMode(!isDarkMode);
  const handleToggleMenu = () => setOpenMenu(!openMenu);
  const handleShowMarkdown = () => setShowMarkdown(!showMarkdown);
  const handleDocumentNameChange = (newName) => setTempDocumentName(newName);
  const handleDocumentContentChange = (newContent) =>
    setTempDocumentContent(newContent);

  const handleSelectedDocument = (document) => {
    setSelectedDocument(document);
    setTempDocumentName(document.name);
    setTempDocumentContent(document.content);
  };

  const handleCreateDocument = async () => {
    if (isCreating) return;

    setIsCreating(true);
    try {
      const newDocument = {
        name: "untitled-document.md",
        content: "# create your new markdown here!",
      };

      const res = await api.post("/documents/", newDocument);

      const createdDoc = {
        id: res.data.document.id,
        name: res.data.document.name,
        content: res.data.document.content,
        date: new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }),
      };

      setSelectedDocument(createdDoc);
      setTempDocumentName(createdDoc.name);
      setTempDocumentContent(createdDoc.content);
      setDocuments((prevDocs) => [createdDoc, ...prevDocs]);
      setError(null);
    } catch (err) {
      console.error("Error creating document:", err);
      setError({
        message: "Unable to create document",
        details: err.response?.data?.message || err.message,
      });
    } finally {
      setIsCreating(false);
    }
  };

  const handleSaveChanges = async () => {
    if (!selectedDocument.id) return;
    try {
      const updatedData = {
        name: tempDocumentName,
        content: tempDocumentContent,
      };
      const res = await api.patch(
        `/documents/${selectedDocument.id}`,
        updatedData,
      );
      const updatedDoc = {
        id: res.data.document.id,
        name: res.data.document.name,
        content: res.data.document.content,
      };
      setSelectedDocument(updatedDoc);
      setDocuments((prevDocs) =>
        prevDocs.map((doc) =>
          doc.id === selectedDocument.id
            ? {
                ...doc,
                name: res.data.document.name,
                date: res.data.document.updatedAt,
              }
            : doc,
        ),
      );
    } catch (err) {
      setError(err);
    }
  };

  const handleDeleteDocument = (idToDelete) => {
    setDocuments((prevDocs) => prevDocs.filter((doc) => doc.id !== idToDelete));
    setSelectedDocument({
      id: "",
      name: "",
      content: "",
    });
    setTempDocumentName("");
    setTempDocumentContent("");
  };

  const handleOpenDeleteModal = (document) => {
    setDocumentToDelete(document);
    setDeleteModalOpen(true);
  };

  const handleCancelDelete = () => {
    setDeleteModalOpen(false);
    setDocumentToDelete(null);
  };

  const handleConfirmDelete = async () => {
    try {
      await api.delete(`/documents/${documentToDelete.id}`);
      handleDeleteDocument(documentToDelete.id);
      setDeleteModalOpen(false);
      setDocumentToDelete(null);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <main className="relative flex h-screen overflow-hidden">
      <Sidebar
        onToggleTheme={handleToggleTheme}
        onSelectedDocument={handleSelectedDocument}
        onCreateDocument={handleCreateDocument}
        isDarkMode={isDarkMode}
        documents={documents}
        error={error}
        openMenu={openMenu}
        isCreating={isCreating}
      />
      <BodyContainer openMenu={openMenu}>
        <Header
          openMenu={openMenu}
          onToggleMenu={handleToggleMenu}
          selectedDocument={selectedDocument}
          tempDocumentName={tempDocumentName}
          onDocumentNameChange={handleDocumentNameChange}
          onOpenDeleteModal={handleOpenDeleteModal}
          onSaveChanges={handleSaveChanges}
        />
        <TabsContainer
          openMenu={openMenu}
          showMarkdown={showMarkdown}
          onShowMarkdown={handleShowMarkdown}
        />
        <ContentsContainer
          openMenu={openMenu}
          showMarkdown={showMarkdown}
          selectedDocument={selectedDocument}
          tempDocumentContent={tempDocumentContent}
          onContentChange={handleDocumentContentChange}
        />
      </BodyContainer>
      {deleteModalOpen && (
        <DeleteBox
          documentName={documentToDelete?.name}
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </main>
  );
}

export default App;
