import { ReactElement } from "react";
import { Program } from "../entities/programs";
import "../styles/resident-card.css";

interface ProgramCardProps {
  program: Program;
}

const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

export function ProgramCard({ program }: ProgramCardProps): ReactElement {
  return (
    <div className="resident-card">
      <p className="resident-name">{program.name}</p>
      {/* {program.attendance?.map((attend: any) => (
        <div>{attend.residentId}</div>
      ))} */}
      <p> {formatDate(program.start)}</p>
    </div>
  );
}
