import { Button, Input } from "@nextui-org/react";
import { useState } from "react";

const AddNote = () => {
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleSubmit = () => {};

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 items-center justify-center">
      <Input
        label="Add a note"
        value={inputValue}
        onChange={handleOnChange}
        className="w-1/2"
      />
      <Button
        type="submit"
        size="lg"
        color={inputValue ? "primary" : "default"}
        variant={inputValue ? "shadow" : "solid"}
        disabled={!inputValue}>
        Add
      </Button>
    </form>
  );
};

export default AddNote;
