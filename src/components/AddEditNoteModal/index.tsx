import { Input } from "@nextui-org/input";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Props } from "./types";
import { addNote, editNote } from "../../api/notes";
import CategoriesDropdown from "../CategoriesDropdown";
import { categories } from "../../utils/constants";

const AddEditNoteModal = ({
  mode,
  note,
  isOpen,
  onOpenChange,
  onClose,
  refresh,
}: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (mode === "edit") {
      setTitle(note!.title);
      setDescription(note!.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [mode, note]);

  // HANDLERS
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleSelectCategory = (category: string) => {};

  const handleReset = () => {
    setTitle("");
    setDescription("");
  };

  const handleSubmit = async () => {
    setLoading(true);
    let response;
    if (mode === "add") {
      response = await addNote({ user_id: "1", title, description });
    } else {
      response = await editNote(note!.id, {
        user_id: note!.user_id,
        title,
        description,
      });
    }

    if (response.statusCode !== 0) {
      toast.success(response.message);
      refresh();
    } else {
      toast.error(response.message);
    }

    setLoading(false);
    onClose();
    handleReset();
  };

  // UI LOGIC
  const getModalTitle = () => (mode === "add" ? "Add a note" : "Edit note");

  const getSubmitButtonText = () => {
    switch (mode) {
      case "add":
        return loading ? "Adding" : "Add";
      case "edit":
        return loading ? "Updating" : "Update";
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onClose={handleReset}
      placement="top-center"
      backdrop="opaque">
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1">
            {getModalTitle()}
          </ModalHeader>
          <ModalBody>
            <Input
              autoFocus
              label="Title"
              variant="bordered"
              value={title}
              onChange={handleTitleChange}
            />
            <Input
              label="Description"
              variant="bordered"
              value={description}
              onChange={handleDescriptionChange}
            />

            <CategoriesDropdown
              label="Category"
              categories={categories}
              onItemClick={handleSelectCategory}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onPress={handleSubmit}
              isLoading={loading}
              disabled={loading}>
              {getSubmitButtonText()}
            </Button>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
};

export default AddEditNoteModal;
