/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from 'react';
import { useLocation } from 'react-router-dom';
import parse from "html-react-parser"
import Employee from '../employee/Employee';

const SectorDetail = () => {
  const { state } = useLocation();

  console.log(state);

  return (
    <div className="card-body p-0 pt-3 px-1">
      <div className="card">

        <div className="tab-pane fade show active bg-white" id="colored-tab1">
          <div className="card-body py-2" style={{ minHeight: "100vh" }}>
            <h3 style={{ margin: "10px 0", fontWeight: "bold", textTransform: "uppercase" }}>{state.uzName}</h3>

            <div id="accordion-default">
              <div className="card">
                <div className="card-header bg-primary px-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h6 className="card-title text-white collapsed" style={{ width: "100%", cursor: "pointer", textTransform: "uppercase" }} data-toggle="collapse"
                    href={`#accordion-item-default1`} aria-expanded="false">
                    Sektor hududlari
                  </h6>
                </div>

                <div id="accordion-item-default1" className="collapse" data-parent={`#accordion-default`}>
                  <div className="card-body">
                    {parse(state.uzSectorArea)}
                  </div>
                </div>
              </div>

              <div className="card mb-0">
                <div className="card-header bg-primary px-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h6 className="card-title text-white collapsed" style={{ width: "100%", cursor: "pointer", textTransform: "uppercase" }} data-toggle="collapse"
                    href={`#accordion-item-default2`} aria-expanded="false">
                    Qisqacha ma'lumot
                  </h6>
                </div>
                <div id={`accordion-item-default2`} className="collapse" data-parent={`#accordion-default`}>
                  <div className="card-body">
                    {parse(state.uzDescription)}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <Employee employee={state?.stateEmployeeDTO} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(SectorDetail);
