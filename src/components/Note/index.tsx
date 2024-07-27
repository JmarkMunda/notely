import moment from "moment";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { HiDotsVertical } from "react-icons/hi";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { MdDelete } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { categories } from "../../utils/constants";
import { useCallback } from "react";
import { Props } from "./types";

const Note = ({ note, handleEditNote, handleDeleteNote }: Props) => {
  const getBadgeColor = useCallback(() => {
    const index = categories.findIndex(({ key }) => key === note.category);
    return categories[index]?.color;
  }, [note.category]);

  return (
    <Card className="w-[250px]">
      <CardHeader className="flex justify-between">
        <div className={`${getBadgeColor()} px-4 py-1 rounded-full`}>
          <p className="text-xs font-semibold text-white">
            {note?.category[0]?.toUpperCase() + note?.category?.slice(1) ||
              "Others"}
          </p>
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
