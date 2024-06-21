import axios from "axios";
import "../styles/modal.css";
import { Program } from "../entities/programs";
import React, { ChangeEvent, FC, FormEvent, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProgram: (program: Program) => void;
}

export const ProgramModal: FC<ModalProps> = ({
  isOpen,
  onClose,
  onAddProgram,
}) => {
  const [formData, setFormData] = useState<Program>({
    name: "",
    location: "",
    allDay: false,
    start: "",
    end: "",
    dimension: "",
    hobbies: [],
    recurrence: {
      type: "",
    },
    isRepeated: false,
    levelOfCare: [],
    facilitators: [],
    tags: [],
  });

  if (!isOpen) return null;

  //This function should be refactored
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    //This should be refactored to fit the new structure of the form data
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
        recurrence:
          name === "isRepeated" && !checked
            ? { type: "" }
            : prevData.recurrence,
      }));
    } else if (name === "hobbies") {
      const hobbiesArray = value.split(",").map((hobby) => hobby.trim());
      setFormData((prevData) => ({
        ...prevData,
        hobbies: hobbiesArray,
      }));
    } else if (name === "recurrence") {
      setFormData((prevData) => ({
        ...prevData,
        recurrence: {
          ...prevData.recurrence,
          type: value,
        },
      }));
    } else if (name === "levelOfCare") {
      const selectedValues = Array.from(
        (e.target as HTMLSelectElement).selectedOptions,
        (option) => option.value
      );
      setFormData((prevData) => ({
        ...prevData,
        levelOfCare: selectedValues,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://welbi.org/api/programs",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
          },
        }
      );
      console.log("Form submitted successfully:", response.data);
      onAddProgram(response.data);
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
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="start">Start</label>
              <input
                type="datetime-local"
                id="start"
                name="start"
                value={formData.start}
                onChange={handleChange}
                required={!formData.allDay}
              />
            </div>
            <div className="form-group">
              <label htmlFor="end">End</label>
              <input
                type="datetime-local"
                id="end"
                name="end"
                value={formData.end}
                onChange={handleChange}
                required={!formData.allDay}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dimension">Dimension</label>
              <input
                type="text"
                id="dimension"
                name="dimension"
                value={formData.dimension}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="hobbies">Hobbies</label>
              <input
                type="text"
                id="hobbies"
                name="hobbies"
                value={formData.hobbies.join(", ")}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="recurrence">Recurrence Type</label>
              <select
                id="recurrence"
                name="recurrence"
                value={formData.recurrence.type}
                onChange={handleChange}
                required
              >
                <option value="">Select Recurrence</option>
                <option value="None">None</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="levelOfCare">Level of Care</label>
              <select
                multiple
                id="levelOfCare"
                name="levelOfCare"
                value={formData.levelOfCare || ""}
                onChange={handleChange}
                required
              >
                <option value="INDEPENDENT">INDEPENDENT</option>
                <option value="MEMORY">MEMORY</option>
                <option value="ASSISTED">ASSISTED</option>
                <option value="LONGTERM">LONGTERM</option>
              </select>
            </div>
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="allDay"
                  checked={formData.allDay}
                  onChange={handleChange}
                />
                All Day
              </label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};
