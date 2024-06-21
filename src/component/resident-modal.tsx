import axios from "axios";
import "../styles/modal.css";
import { Resident } from "../entities/resident";
import React, { ChangeEvent, FC, FormEvent, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddResident: (resident: Resident) => void;
}

export const ResidentModal: FC<ModalProps> = ({
  isOpen,
  onClose,
  onAddResident,
}) => {
  const [formData, setFormData] = useState<Resident>({
    name: "",
    firstName: "",
    lastName: "",
    preferredName: "",
    status: "",
    room: "",
    levelOfCare: "",
    ambulation: "",
    birthDate: "",
    moveInDate: "",
  });

  if (!isOpen) return null;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://welbi.org/api/residents",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
          },
        }
      );
      onAddResident(response.data);
      onClose();
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-content">
          <span className="close-button" onClick={onClose}>
            &times;
          </span>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="preferredName">Preferred Name</label>
              <input
                type="text"
                id="preferredName"
                name="preferredName"
                value={formData.preferredName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="status">Status</label>
              <select
                id="status"
                name="status"
                value={formData.status || ""}
                onChange={handleChange}
                required
              >
                <option value="">Select Status</option>
                <option value="HERE">HERE</option>
                <option value="ISOLATION">ISOLATION</option>
                <option value="LOA">LOA</option>
                <option value="HOSPITAL">HOSPITAL</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="room">Room</label>
              <input
                type="text"
                id="room"
                name="room"
                value={formData.room}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="levelOfCare">Level of Care</label>
              <select
                id="levelOfCare"
                name="levelOfCare"
                value={formData.levelOfCare || ""}
                onChange={handleChange}
                required
              >
                <option value="">Select the level of care</option>
                <option value="INDEPENDENT">INDEPENDENT</option>
                <option value="MEMORY">MEMORY</option>
                <option value="ASSISTED">ASSISTED</option>
                <option value="LONGTERM">LONGTERM</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="ambulation">Ambulation</label>
              <select
                id="ambulation"
                name="ambulation"
                value={formData.ambulation}
                onChange={handleChange}
                required
              >
                <option value="">Select ambulation</option>
                <option value="WHEELCHAIR">WHEELCHAIR</option>
                <option value="NOLIMITATIONS">NOLIMITATIONS</option>
                <option value="CANE">CANE</option>
                <option value="WALKER">WALKER</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="birthDate">Birth Date</label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="moveInDate">Move-In Date</label>
              <input
                type="date"
                id="moveInDate"
                name="moveInDate"
                value={formData.moveInDate}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};
