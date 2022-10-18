import React from "react";

export interface StepItemProps {
  field1: string;
  field2: string;
  field3: string;
  name: string;
  artist: string;
  text: string;
  changeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeArtist: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeText: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
