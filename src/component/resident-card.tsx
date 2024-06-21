import axios from "axios";
import "../styles/resident-card.css";
import { Program } from "../entities/programs";
import { Resident } from "../entities/resident";
import { FormEvent, ReactElement, useState } from "react";

interface CardProps {
  resident: Resident;
  programs: Program[];
}

export function ResidentCard({ resident, programs }: CardProps): ReactElement {
  const [selectedProgram, setSelectedProgram] = useState<string>("");

  const addResidentToProgram = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedProgram) {
      alert("Please select a program");
      return;
    }

    try {
      const response = await axios.post(
        `https://welbi.org/api/programs/${selectedProgram}/attend`,
        {
          residentId: resident.id,
          status: "Active",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
          },
        }
      );
      console.log("Resident added to program successfully:", response.data);
    } catch (error) {
      console.error("Error adding resident to program:", error);
    }
  };

  return (
    <div
      className={
        "resident-card " +
        (resident.status === "HERE"
          ? "resident-available"
          : "resident-not-available")
      }
    >
      <p className="resident-name">{resident.name}</p>
      <p className="resident-room">{resident.room}</p>
      {resident.preferredName != null ? (
        <p className="resident-preferred-name">
          Prefered Name: {resident.preferredName}
        </p>
      ) : (
        resident.firstName
      )}

      <p className="resident-status">Status: {resident.status}</p>
      {/* {resident.attendance?.map((attend: any) => {
        const program = programs.find(
          (program) => program.id === attend.programId
        );
        return program ? <p key={attend.programId}>{program.name}</p> : null;
      })} */}
      <form className="resident-card-form" onSubmit={addResidentToProgram}>
        <select
          className="resident-card-select"
          value={selectedProgram}
          onChange={(e) => setSelectedProgram(e.target.value)}
        >
          {programs.map((program) => (
            <option key={program.id} value={program.id}>
              {program.name}
            </option>
          ))}
        </select>
        <button type="submit">Add to a program</button>
      </form>
    </div>
  );
}
