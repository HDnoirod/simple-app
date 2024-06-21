import "./App.css";
import axios from "axios";
import { Program } from "./entities/programs";
import { Resident } from "./entities/resident";
import React, { useEffect, useState } from "react";
import { ProgramCard } from "./component/program-card";
import { ProgramModal } from "./component/program-modal";
import { ResidentCard } from "./component/resident-card";
import { ResidentModal } from "./component/resident-modal";

//Move all the axios calls in a separate file
const getData = async (url: string) => {
  const data = "";
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: url,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
    },
    data: data,
  };
  try {
    return await axios.request(config);
  } catch (error) {
    console.error(error);
  }
};

function App() {
  const [residents, setResidents] = React.useState<Resident[]>([]);
  const [programs, setPrograms] = React.useState<Program[]>([]);
  const [isResidentModalOpen, setIsResidentModalOpen] =
    useState<boolean>(false);
  const [isProgramModalOpen, setIsProgramModalOpen] = useState<boolean>(false);

  const showResidentModal = () => setIsResidentModalOpen(true);
  const closeResidentModal = () => setIsResidentModalOpen(false);

  const showProgramModal = () => setIsProgramModalOpen(true);
  const closeProgramModal = () => setIsProgramModalOpen(false);

  useEffect(() => {
    async function fetchData() {
      const res = await getData("https://welbi.org/api/residents");
      setResidents(res?.data);

      const pro = await getData("https://welbi.org/api/programs");
      setPrograms(pro?.data);
    }
    fetchData();
  }, []);

  const addParticipant = (newParticipant: Resident) => {
    setResidents([...residents, newParticipant]);
  };

  const addProgram = (newProgram: Program) => {
    setPrograms([...programs, newProgram]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>Simple app for welbi</div>
      </header>
      <h1>Residents</h1>
      <button className="app-button" onClick={showResidentModal}>
        Create a resident
      </button>
      <ResidentModal
        isOpen={isResidentModalOpen}
        onClose={closeResidentModal}
        onAddResident={addParticipant}
      />
      <div className="cards-container">
        {residents.map((resident: Resident) => (
          <ResidentCard
            resident={resident}
            programs={programs}
            key={resident.id}
          />
        ))}
      </div>

      <h1>Programs</h1>
      <button className="app-button" onClick={showProgramModal}>
        Create a program
      </button>
      <ProgramModal
        isOpen={isProgramModalOpen}
        onClose={closeProgramModal}
        onAddProgram={addProgram}
      />
      <div className="cards-container">
        {programs.map((program: Program) => (
          <ProgramCard program={program} key={program.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
