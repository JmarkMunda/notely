import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { NoteType } from "../utils/types";
import { Divider } from "@nextui-org/divider";
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
};

const Note = ({ note }: Props) => {
  return (
    <Card className="w-[250px]">
      <CardHeader className="flex justify-between gap-3">
        <div className="flex flex-col">
          <p>{note.title}</p>
        </div>
        <Dropdown>
          <DropdownTrigger>
            <button className="outline-none">
              <HiDotsVertical className="cursor-pointer relative" />
            </button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="edit" startContent={<AiOutlineEdit />}>
              Edit Note
            </DropdownItem>
            <DropdownItem
              key="delete"
              className="text-danger"
              color="danger"
              startContent={<MdDelete />}>
              Delete Note
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="text-sm text-gray-500">{note.description}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <p className="text-xs text-gray-500">
          {moment(note.createdat).fromNow()}
        </p>
      </CardFooter>
    </Card>
  );
};

export default Note;
