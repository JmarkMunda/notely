import { InputProps } from "@nextui-org/input";
import React from "react";

export type Props = {
  searchValue: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
} & InputProps;
