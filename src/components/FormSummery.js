import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function FormSummery(props) {
  const location = useLocation();
  const formData = location.state.formValues;
  //   const stringData = JSON.stringify(formData)
  console.table(formData);
  const navigate = useNavigate()

  const backToForm = () => {
    navigate('/', { state: {formData}})
  }

  return (
    <div className="container mt-3">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Form Query</th>
            <th scope="col">User Answer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>problem description</td>
            <td >{formData.text_value}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Have you been Diagosed with these problems ?</td>
            <td>{formData.diagosed_problem}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Did the problem start after a physical trauma ?</td>
            <td>{formData.physical_trauma}</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Did the problem start after a mental trauma ?

</td>
            <td>{formData.mental_trauma}</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>How often do you experience the problem ?</td>
            <td>{formData.problem_times}</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Not relevant</td>
            <td>{formData.Not_relevant === true ? "true" : "false"}</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>When lying down</td>
            <td>{formData.When_lying_down === true ? "true" : "false"}</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>When sitting</td>
            <td>{formData.When_sitting === true ? "true" : "false"}</td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>When understanding</td>
            <td>{formData.When_understanding === true ? "true" : "false"}</td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td>In waking</td>
            <td>{formData.In_waking === true ? "true" : "false"}</td>
          </tr>
          <tr>
            <th scope="row">11</th>
            <td>
              How intense is the experience of the problem on a 0-10 scale ?
            </td>
            <td>
              {formData.problem_scale === "1" ? (
                "1"
              ) : formData.problem_scale === "2" ? (
                "2"
              ) : formData.problem_scale === "3" ? (
                "3"
              ) : formData.problem_scale === "4" ? (
                "4"
              ) : formData.problem_scale === "5" ? (
                "5"
              ) : formData.problem_scale === "6" ? (
                "6"
              ) : formData.problem_scale === "7" ? (
                "7"
              ) : formData.problem_scale === "8" ? (
                "8"
              ) : formData.problem_scale === "9" ? (
                "9"
              ) : formData.problem_scale === "10" ? (
                "10"
              ) : (
                <></>
              )}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="buttons  d-flex justify-content-center mt-4">
            <button type="button" class="btn btn-primary mx-3" onClick={backToForm}>
              Back
            </button>
      </div>
    </div>
  );
}

export default FormSummery;
