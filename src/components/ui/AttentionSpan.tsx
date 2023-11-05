import { FC } from "react";
import { AttentionSpanProps } from "src/types/components/ui";

export const AttentionSpan: FC<AttentionSpanProps> = (props) => {
  return (
    <span
      className={`text-xs font-bold px-1 text-primary-light ${
        props.onClick && "cursor-pointer"
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </span>
  );
};
