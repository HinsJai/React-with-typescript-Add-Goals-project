import { type ReactNode } from "react";

// type InfoBoxProps = {
//   mode: "hint" | "warning";
//   //serverity?: "low" | "medium" | "high"; //can be optional
//   children: ReactNode;
// };

type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};
type WarningBoxProps = {
  mode: "warning";
  serverity: "low" | "medium" | "high";
  children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

export default function InfoBox(props: InfoBoxProps) {
  //info, warning..
  if (props.mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{props.children}</p>
      </aside>
    );
  }
  return (
    <aside className={`infobox infobox-warning warning--${props.serverity}`}>
      <h2>Warning</h2>
      <p>{props.children}</p>
    </aside>
  );
}
