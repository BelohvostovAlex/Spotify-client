import { ITrack } from "../../types/track";

type onClickType = (() => void) | ((e) => void);

export interface PlayPauseBtnProps {
  pause?: boolean;
  active?: boolean;
  onClick: onClickType;
}
