import React from 'react';

const Box = ({
  EditCard,
  Edit,
  Update,
  NameChange,
  DisplayName,
  NameInput,
  DescriptionInput,
  DescriptionChange,
  overallStatusFilter,
  setOverallStatusFilter,
  newTaskName,
  setnewTaskName,
  newDescriptionName,
  setnewDescriptionName,
}) => {
    return (
      <div>
        <form className="row mt-4 g-4 d-flex justify-content-center">
          <div className="col-md-6 col-lg-4 d-flex justify-content-center">
            <label htmlFor="ToDoName" className="visually-hidden">
              ToDo Name
            </label>
            <input
              className="box-algn"
              type="text"
              placeholder="Todo Name"
              value={NameInput}
              onChange={NameChange}
            />
          </div>

          <div className="col-md-6 col-lg-4 d-flex justify-content-center">
            <label htmlFor="ToDoDescription" className="visually-hidden">
              ToDo Description
            </label>
            <input
              className="box-algn"
              type="text"
              placeholder="Todo Description"
              value={DescriptionInput}
              onChange={DescriptionChange}
            />
          </div>

          <div className="col-md-12 col-lg-3 d-flex justify-content-center">
            {EditCard ? (
              <button
                type="button"
                className="btn btn-success box-button "
                onClick={Update}
              >
                Update
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary box-button"
                onClick={DisplayName}
              >
                Add Todo
              </button>
            )}
          </div>

          <div className="row mt-5 px-md-5 px-lg-5 d-flex align-items-center">
            <div className="col-12 col-md-5 col-lg-4 d-flex justify-content-center">
              <h4 className="h4 m-0">My Todos</h4>
            </div>
            <div className="col-12 col-md-1 col-lg-3 mb-3"></div>
            <div className="col-12 col-md-6 col-lg-5 d-flex align-items-center justify-content-center">
              <label for="StatusFilter" className='font-size'>Status Filter : &nbsp;</label>
              <select
                id="overall-status"
                value={overallStatusFilter}
                onChange={(e) => setOverallStatusFilter(e.target.value)}
                name="card-overall-status"
                className="overall-status completion"
                style={{
                  backgroundColor:
                    overallStatusFilter === "All"
                      ? "#FC817E"
                      : overallStatusFilter === "Completed"
                      ? "green"
                      : "red",
                }}
              >
                <option
                  value="All"
                  style={{ backgroundColor: "yellow" }}
                  selected
                >
                  All
                </option>
                <option
                  value="Not Completed"
                  style={{ backgroundColor: "red" }}
                >
                  Not Completed
                </option>
                <option value="Completed" style={{ backgroundColor: "green" }}>
                  Completed
                </option>
              </select>
            </div>
          </div>
        </form>
      </div>
    );
};

export default Box;