import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { NoteType } from "../utils/types";
import { HiDotsVertical } from "react-icons/hi";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { MdDelete } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import moment from "moment";

type Props = {
  note: NoteType;
  handleEditNote: (id: NoteType) => void;
  handleDeleteNote: (id: string) => void;
};

const Note = ({ note, handleEditNote, handleDeleteNote }: Props) => {
  return (
    <Card className="w-[250px]">
      <CardHeader className="flex justify-between">
        <div className="bg-green-200 px-4 py-1 rounded-full">
          <p className="text-xs font-semibold">Work</p>
        </div>
        <Dropdown>
          <DropdownTrigger>
            <button className="outline-none">
              <HiDotsVertical className="cursor-pointer relative" />
            </button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem
              key="edit"
              startContent={<AiOutlineEdit />}
              onClick={() => handleEditNote(note)}>
              Edit Note
            </DropdownItem>
            <DropdownItem
              key="delete"
              className="text-danger"
              color="danger"
              startContent={<MdDelete />}
              onClick={() => handleDeleteNote(note.id)}>
              Delete Note
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </CardHeader>

      <CardBody>
        <p className="font-bold">{note.title}</p>

        <p className="text-sm text-gray-500">{note.description}</p>
      </CardBody>

      <CardFooter className="justify-end px-4">
        <p className="text-xs text-gray-500">
          {moment(note.created_at).format("lll")}
        </p>
      </CardFooter>
    </Card>
  );
};

export default Note;
