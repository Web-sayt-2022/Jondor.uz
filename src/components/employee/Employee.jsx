import React from 'react';
import { urlFile } from '../../config';
import parse from "html-react-parser"
import { useState } from 'react';
import styled from 'styled-components';

const Employee = ({ employee }) => {
  const [modal, setModal] = useState(false)
  console.log(employee);
  return (
    <Wrapper>
      <div className="rahbariyat-cards">
        <div className="rahbariyat-card bg-white mb-2">
          <div className="card-body body-elements ">
            <div className="img d-flex align-content-center justify-content-center">
              <img src={`${urlFile}/${employee?.imageID}`} alt="" />
            </div>
            <div className="table-responsive">
              <div className="person">
                <div className="my-3 person-info">
                  <h1 style={{ color: "#2a4d85" }}
                    className="fw-bold text-uppercase">
                    {employee?.firstName} {employee?.lastName} {employee?.patronymic}
                  </h1>

                  <p style={{ color: "#2a4d85" }}
                    className="fw-bold text-uppercase">
                    {employee?.uzPosition}
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
                        <td>{employee?.birthDate.substr(0, 10).split("-").reverse().join(".")}</td>
                      </tr>
                      <tr>
                        <td>Tug'ilgan joyi:</td>
                        <td>{employee?.uzBirthPlace}</td>
                      </tr>
                      <tr>
                        <td>Millati:</td>
                        <td>{employee?.nation}</td>
                      </tr>
                      <tr>
                        <td>Ma'lumoti:</td>
                        <td>{employee?.degree}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <button className='btn btn-primary'
                  onClick={() => setModal(true)}>
                  Qo'shimcha ma'lumot
                </button>

                {modal && (
                  <div id="modal_large" className="modal fade show" tabindex="-1" aria-modal="true" role="dialog" style={{ display: "flex", alignItems: "center", background: "rgba(0, 0, 0, 0.5)" }}>
                    <div style={{ width: "40%", margin: "0 auto" }}>
                      <div className="modal-content">
                        <div className="modal-header bg-primary text-white">
                          <h5 className="modal-title">Qo'shimcha ma'lumot</h5>
                          <button onClick={() => setModal(false)} type="button" className="close" data-dismiss="modal" style={{ fontSize: "24px" }}>
                            &times;
                          </button>
                        </div>
                        <div className="modal-body">
                          <p>{employee.uzAdditionalInformation ? parse(employee.uzAdditionalInformation) : "bo'sh"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default React.memo(Employee);

const Wrapper = styled.div`
  .rahbariyat-card .card-body {
    padding: 0;
  }

  .rahbariyat-card .body-elements {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
  }

  .rahbariyat-card .body-elements .img {
    flex: 0.4;
    padding: 0.5rem;
    /* 24px */
  }

  .rahbariyat-card .body-elements .img img {
    width: 310px;
    height: 380px;
    object-fit: cover;
  }

  .rahbariyat-card .body-elements .table-responsive {
    flex: 1;
    padding: 0.5rem;
  }

  .rahbariyat-card .body-elements .person-info h1 {
    font-size: 1.8rem;
    margin: 0;
    padding: 0.5rem;
  }

  .rahbariyat-card .body-elements .person-info p {
    font-size: 1.2rem;
    padding: 0.5rem;
    margin: 0;
  }

  .rahbariyat-cards
    .rahbariyat-card
    .body-elements
    .table-responsive
    .person
    .table {
    margin-bottom: 0.5rem;
  }

  .rahbariyat-cards
    .rahbariyat-card
    .card
    .body-elements
    .table-responsive
    .person
    button {
    padding: 0.8rem 1rem;
  }

  .rahbariyat-cards
    .rahbariyat-card
    .card
    .body-elements
    .table-responsive
    .person
    button
    span {
    font-size: 13px;
  }

  @media (max-width: 1200px) {
    .rahbariyat-card .card-body {
      padding: 0;
    }

    .rahbariyat-card .body-elements {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .rahbariyat-card .body-elements .img {
      flex: 0.2;
      padding: 1.5rem;
      /* 24px */
    }

    .rahbariyat-card .body-elements .img img {
      width: 230px;
      height: 340px;
      object-fit: cover;
    }

    .rahbariyat-card .body-elements .table-responsive {
      flex: 1;
      padding: 0.5rem;
    }

    .rahbariyat-card .body-elements .person-info h1 {
      font-size: 1.5rem;
      margin: 0;
      /* padding: 0.5rem; */
    }

    .rahbariyat-card .body-elements .person-info p {
      font-size: 1rem;
      /* padding: 0.5rem; */
      margin: 0;
    }

    .rahbariyat-cards
      .rahbariyat-card
      .body-elements
      .table-responsive
      .person
      .table {
      margin-bottom: 0.5rem;
    }

    .rahbariyat-cards
      .rahbariyat-card
      .body-elements
      .table-responsive
      .person
      button {
      padding: 0.6rem 0.8rem;
    }

    .rahbariyat-cards
      .rahbariyat-card
      .body-elements
      .table-responsive
      .person
      button
      span {
      font-size: 12px;
    }
  }

  @media (max-width: 769px) {
    .rahbariyat-card .card-body {
      padding: 0;
    }

    .rahbariyat-card .body-elements {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .rahbariyat-card .body-elements .img {
      padding: 1.5rem;
      /* 24px */
    }

    .rahbariyat-card .body-elements .img img {
      width: 220px;
      height: 330px;
      object-fit: cover;
    }

    .rahbariyat-card .body-elements .table-responsive {
      padding: 0.5rem;
    }

    .rahbariyat-card .body-elements .table-responsive .table {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .rahbariyat-card .body-elements .table-responsive .person {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .rahbariyat-cards
      .rahbariyat-card
      .body-elements
      .table-responsive
      .person-info {
      text-align: center;
    }

    .rahbariyat-card .body-elements .person-info h1 {
      font-size: 1.5rem;
      margin: 0;
      /* padding: 0.5rem; */
    }

    .rahbariyat-card .body-elements .person-info p {
      font-size: 1rem;
      /* padding: 0.5rem; */
      margin: 0;
    }

    .rahbariyat-cards
      .rahbariyat-card
      .body-elements
      .table-responsive
      .person
      .table {
      margin-bottom: 0.5rem;
    }

    .rahbariyat-cards
      .rahbariyat-card
      .body-elements
      .table-responsive
      .person
      button {
      padding: 0.6rem 0.8rem;
    }

    .rahbariyat-cards
      .rahbariyat-card
      .body-elements
      .table-responsive
      .person
      button
      span {
      font-size: 12px;
    }
  }

  @media (max-width: 447px) {
    body {
      padding: 0px 6px !important;
    }

    .rahbariyat-card .card-body {
      padding: 0 !important;
    }

    .rahbariyat-card .body-elements {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 2px;
    }

    .rahbariyat-card .body-elements .img {
      padding: 18px;
    }

    .rahbariyat-card .body-elements .img img {
      width: 240px;
      height: 280px;
      object-fit: cover;
    }

    /* .rahbariyat-card .body-elements .img img {
        width: 100% !important;
        
      } */

    .rahbariyat-card .body-elements .person-info {
      margin: 4px 0;
    }

    .rahbariyat-card .body-elements .person-info h1 {
      font-size: 22px;
      margin-bottom: 20px;
    }

    .rahbariyat-card .body-elements .person-info p {
      font-size: 16px;
      padding: 6px;
    }

    .rahbariyat-cards
      .rahbariyat-card
      .body-elements
      .table-responsive
      .person
      .table {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-left: 0;
    }

    .rahbariyat-card .body-elements .table-responsive {
      padding: 0;
    }

    .rahbariyat-card .body-elements .table-responsive .person {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .rahbariyat-card .body-elements .person-info {
      text-align: center;
    }

    .rahbariyat-cards
      .rahbariyat-card
      .body-elements
      .table-responsive
      .person
      button {
      padding: 0.4rem 0.6rem;
    }

    .rahbariyat-cards
      .rahbariyat-card
      .body-elements
      .table-responsive
      .person
      button
      span {
      font-size: 10px;
    }
  }

`