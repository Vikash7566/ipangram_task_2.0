import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function AddForm() {
    const initialValues = {
        text_value: "",
        diagosed_problem: "",
        physical_trauma: "",
        mental_trauma: "",
        problem_times: "",
        Not_relevant: "",
        When_lying_down: "",
        When_sitting: "",
        When_understanding: "",
        In_waking: "",
        problem_scale: "",
      };
      const [formValues, setFormValues] = useState(initialValues);
      const [newFormValues, setNewFormValues] = useState({});
      const navigate = useNavigate();
    
      const handleFormData = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.type === "checkbox" ? target.checked : target.value;
        setFormValues({
          ...formValues,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        navigate("/FormSummery", { state: { formValues } });
        e.preventDefault();
        setNewFormValues((prevValues) => {
          return [...prevValues, formValues];
        });
    
        setFormValues(initialValues);
      };
      
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="formDetails container my-4">
          <div class="mb-3 text-center">
            <label
              for="exampleFormControlTextarea1"
              class="form-label text-center"
            >
              If you have problems with pain/aches, stiffnes, weakness of
              fuctional problems, describe <br /> this/these below.(List the
              symptoms in descending order with the most troublesome first)
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              name="text_value"
              value={formValues.text_value}
              onChange={handleFormData}
              rows="3"
            ></textarea>
          </div>
          <div className="firstRadio text-center d-flex my-2">
            <p>Have you been Diagosed with these problems ?</p>
            <div class="form-check form-check-inline mx-4">
              <input
                class="form-check-input"
                type="radio"
                name="diagosed_problem"
                id="inlineRadio1"
                value="Not relevant"
                onChange={handleFormData}
              />
              <label class="form-check-label" for="inlineRadio1">
                Not relevant
              </label>
            </div>
            <div class="form-check form-check-inline mx-4">
              <input
                class="form-check-input"
                type="radio"
                name="diagosed_problem"
                id="inlineRadio2"
                value="yes"
                onChange={handleFormData}
              />
              <label class="form-check-label" for="inlineRadio2">
                Yes
              </label>
            </div>
            <div class="form-check form-check-inline mx-4">
              <input
                class="form-check-input"
                type="radio"
                name="diagosed_problem"
                id="inlineRadio3"
                value="no"
                onChange={handleFormData}
              />
              <label class="form-check-label" for="inlineRadio3">
                No
              </label>
            </div>
          </div>
          <div className="secondRadio d-flex my-2">
            <p>Did the problem start after a physical trauma ? </p>
            <div class="form-check form-check-inline mx-4">
              <input
                class="form-check-input"
                type="radio"
                name="physical_trauma"
                id="inlineRadio4"
                value="Not relevant"
                onChange={handleFormData}
              />
              <label class="form-check-label" for="inlineRadio4">
                Not relevant
              </label>
            </div>
            <div class="form-check form-check-inline mx-4">
              <input
                class="form-check-input"
                type="radio"
                name="physical_trauma"
                id="inlineRadio5"
                value="yes"
                onChange={handleFormData}
              />
              <label class="form-check-label" for="inlineRadio5">
                Yes
              </label>
            </div>
            <div class="form-check form-check-inline mx-4">
              <input
                class="form-check-input"
                type="radio"
                name="physical_trauma"
                id="inlineRadio6"
                value="no"
                onChange={handleFormData}
              />
              <label class="form-check-label" for="inlineRadio6">
                No
              </label>
            </div>
          </div>
          <div className="thirdRadio  d-flex ">
            <p>Did the problem start after a mental trauma ?</p>
            <div class="form-check form-check-inline mx-4">
              <input
                class="form-check-input"
                type="radio"
                name="mental_trauma"
                id="inlineRadio4"
                value="Not relevant"
                onChange={handleFormData}
              />
              <label class="form-check-label" for="inlineRadio4">
                Not relevant
              </label>
            </div>
            <div class="form-check form-check-inline mx-4">
              <input
                class="form-check-input"
                type="radio"
                name="mental_trauma"
                id="inlineRadio5"
                value="yes"
                onChange={handleFormData}
              />
              <label class="form-check-label" for="inlineRadio5">
                Yes
              </label>
            </div>
            <div class="form-check form-check-inline mx-4">
              <input
                class="form-check-input"
                type="radio"
                name="mental_trauma"
                id="inlineRadio6"
                value="no"
                onChange={handleFormData}
              />
              <label class="form-check-label" for="inlineRadio6">
                No
              </label>
            </div>
          </div>
          <div className="fourthdRadio my-2 ">
            <p>How often do you experience the problem ?</p>
            <div class="form-check form-check-inline mx-4">
              <input
                class="form-check-input"
                type="radio"
                name="problem_times"
                id="inlineRadio4"
                value="Not relevant"
                onChange={handleFormData}
              />
              <label class="form-check-label" for="inlineRadio4">
                Not relevant
              </label>
            </div>
            <div class="form-check form-check-inline mx-4">
              <input
                class="form-check-input"
                type="radio"
                name="problem_times"
                id="inlineRadio5"
                value="Daily"
                onChange={handleFormData}
              />
              <label class="form-check-label" for="inlineRadio5">
                Daily
              </label>
            </div>
            <div class="form-check form-check-inline mx-4">
              <input
                class="form-check-input"
                type="radio"
                name="problem_times"
                id="inlineRadio6"
                value="Several times/week"
                onChange={handleFormData}
              />
              <label class="form-check-label" for="inlineRadio6">
                Several times/week
              </label>
            </div>
            <div class="form-check form-check-inline mx-4">
              <input
                class="form-check-input"
                type="radio"
                name="problem_times"
                id="inlineRadio6"
                value="A few times/month"
                onChange={handleFormData}
              />
              <label class="form-check-label" for="inlineRadio6">
                A few times/month
              </label>
            </div>
            <div class="form-check form-check-inline mx-4">
              <input
                class="form-check-input"
                type="radio"
                name="problem_times"
                id="inlineRadio6"
                value=" A few times/year"
                onChange={handleFormData}
              />
              <label class="form-check-label" for="inlineRadio6">
                A few times/year
              </label>
            </div>
          </div>

          {/* Check Box Start */}
          <div className="chechBox mt-4">
            <p>When do you experience the problem ?</p>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                name="Not_relevant"
                id="flexCheckDefault"
                onChange={handleFormData}
                checked={formValues.Not_relevant}
              />
              <label class="form-check-label" for="flexCheckDefault">
                Not relevant
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                name="When_lying_down"
                id="flexCheckDefault"
                onChange={handleFormData}
                checked={formValues.When_lying_down}
              />
              <label class="form-check-label" for="flexCheckChecked">
                When lying down
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                name="When_sitting"
                id="flexCheckDefault"
                onChange={handleFormData}
                checked={formValues.When_sitting}
              />
              <label class="form-check-label" for="flexCheckDefault">
                When sitting
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                name="When_understanding"
                id="flexCheckDefault"
                onChange={handleFormData}
                checked={formValues.When_understanding}
              />
              <label class="form-check-label" for="flexCheckChecked">
                When understanding
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                name="In_waking"
                id="flexCheckDefault"
                onChange={handleFormData}
                checked={formValues.In_waking}
              />
              <label class="form-check-label" for="flexCheckChecked">
                In waking
              </label>
            </div>
          </div>

          {/* rate avg problem out of 10 */}

          <div className="avgProblem mt-3">
            <p>
              How intense is the experience of the problem on a 0-10 scale ?
            </p>
            <div className="d-flex">
              <div class="form-check mx-3">
                <input
                  class="form-check-input"
                  type="radio"
                  id="flexRadioDefault1"
                  name="problem_scale"
                  value="1"
                  onChange={handleFormData}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  1
                </label>
              </div>
              <div class="form-check mx-3">
                <input
                  class="form-check-input"
                  type="radio"
                  name="problem_scale"
                  id="flexRadioDefault2"
                  value="2"
                  onChange={handleFormData}
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  2
                </label>
              </div>
              <div class="form-check mx-3">
                <input
                  class="form-check-input"
                  type="radio"
                  name="problem_scale"
                  id="flexRadioDefault1"
                  value="3"
                  onChange={handleFormData}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  3
                </label>
              </div>
              <div class="form-check mx-3">
                <input
                  class="form-check-input"
                  type="radio"
                  name="problem_scale"
                  id="flexRadioDefault2"
                  value="4"
                  onChange={handleFormData}
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  4
                </label>
              </div>
              <div class="form-check mx-3">
                <input
                  class="form-check-input"
                  type="radio"
                  name="problem_scale"
                  id="flexRadioDefault1"
                  value="5"
                  onChange={handleFormData}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  5
                </label>
              </div>
              <div class="form-check mx-3">
                <input
                  class="form-check-input"
                  type="radio"
                  name="problem_scale"
                  id="flexRadioDefault2"
                  value="6"
                  onChange={handleFormData}
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  6
                </label>
              </div>
              <div class="form-check mx-3">
                <input
                  class="form-check-input"
                  type="radio"
                  name="problem_scale"
                  id="flexRadioDefault1"
                  value="7"
                  onChange={handleFormData}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  7
                </label>
              </div>
              <div class="form-check mx-3">
                <input
                  class="form-check-input"
                  type="radio"
                  name="problem_scale"
                  id="flexRadioDefault2"
                  value="8"
                  onChange={handleFormData}
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  8
                </label>
              </div>
              <div class="form-check mx-3">
                <input
                  class="form-check-input"
                  type="radio"
                  name="problem_scale"
                  id="flexRadioDefault1"
                  value="9"
                  onChange={handleFormData}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  9
                </label>
              </div>
              <div class="form-check mx-3">
                <input
                  class="form-check-input"
                  type="radio"
                  name="problem_scale"
                  id="flexRadioDefault2"
                  value="10"
                  onChange={handleFormData}
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  10
                </label>
              </div>
            </div>
          </div>
          <div className="buttons  d-flex justify-content-center mt-4">
            <button type="button" class="btn btn-primary mx-3">
              Back
            </button>
            <button type="submit" class="btn btn-primary">
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddForm
