import React from 'react';
import { urlFile } from '../../config';
import "./employee.css"
import parse from "html-react-parser"
import { useState } from 'react';

const Employee = ({ employee }) => {
  const [modal, setModal] = useState(false)
  console.log(employee);
  return (
    <div className="rahbariyat-cards">
      <div className="rahbariyat-card bg-white mb-2">
        <div className="card-body body-elements ">
          <div className="img d-flex align-content-center justify-content-center">
            <img src={`${urlFile}/${employee.imageID}`} alt="" />
          </div>
          <div className="table-responsive">
            <div className="person">
              <div className="my-3 person-info">
                <h1 style={{ color: "#2a4d85" }}
                  className="fw-bold text-uppercase">
                  {employee.firstName} {employee.lastName} {employee.patronymic}
                </h1>

                <p style={{ color: "#2a4d85" }}
                  className="fw-bold text-uppercase">
                  {employee.uzPosition}
                </p>
              </div>

              <div className="table-responsive">
                <table className="table table-sm">
                  <tbody
                    className="text-uppercase"
                    style={{ fontSize: "18px", fontWeight: "500" }}
                  >
                    <tr>
                      <td>Tug'ilgan yili:</td>
                      <td>{employee.birthDate.substr(0, 10).split("-").reverse().join(".")}</td>
                    </tr>
                    <tr>
                      <td>Tug'ilgan joyi:</td>
                      <td>{employee.uzBirthPlace}</td>
                    </tr>
                    <tr>
                      <td>Millati:</td>
                      <td>{employee.nation}</td>
                    </tr>
                    <tr>
                      <td>Ma'lumoti:</td>
                      <td>{employee.degree}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <button className='btn btn-primary'
                onClick={() => setModal(true)}>
                Qo'shimcha ma'lumot
              </button>

              {
                modal && (
                  <div id="modal_large" className="modal fade show" tabindex="-1" aria-modal="true" role="dialog" style={{ display: "flex", alignItems: "center", background: "rgba(0, 0, 0, 0.5)" }}>
                    <div className="modal-dialog modal-lg">
                      <div className="modal-content">
                        <div className="modal-header bg-primary text-white">
                          <h5 className="modal-title">Qo'shimcha ma'lumot</h5>
                          <button onClick={() => setModal(false)} type="button" className="close" data-dismiss="modal" style={{ fontSize: "24px" }}>
                            &times;
                          </button>
                        </div>

                        <div className="modal-body">
                          <p>{parse(employee.uzAdditionalInformation)}</p>

                        </div>

                       
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Employee);
