import { Input } from "@nextui-org/input";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { addNote } from "../api/notes";
import { toast } from "react-toastify";

type Props = {
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
  refresh: () => void;
};

const AddEditNoteModal = ({
  isOpen,
  onOpenChange,
  onClose,
  refresh,
}: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleReset = () => {
    setTitle("");
    setDescription("");
  };

  const handleSubmit = async () => {
    const res = await addNote({ user_id: "1", title, description });

    if (res.statusCode !== 0) {
      toast.success(res.message);
      refresh();
    } else {
      toast.error(res.message);
    }

    onClose();
    handleReset();
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
          <ModalHeader className="flex flex-col gap-1">Add a note</ModalHeader>
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
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onPress={handleSubmit}>
              Submit
            </Button>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
};

export default AddEditNoteModal;
