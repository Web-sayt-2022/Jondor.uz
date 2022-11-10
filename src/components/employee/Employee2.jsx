import React from 'react';
import styled from 'styled-components';

const Employee2 = () => {
  return (
    <Wrapper>
      <div className="rahbar">
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt=""
          className="rounded" />

        <div className="table-responsive ml-3" style={{ width: "calc(100% - 300px)" }}>
          <div className="person">
            <div className="mb-2 person-info">
              <h1 style={{ color: "#2a4d85" }}
                className="px-0 fw-bold text-uppercase text-left ">
                Raxmatov Keldiyor Kenja o'g'li
              </h1>

              <p style={{ color: "#2a4d85" }}
                className="px-0 fw-bold text-uppercase text-left ">Viloyat hokimining
                moliya-iqtisodiyot va kambag'allikni qisqartirish masalalari
                bo'yicha birinch o'rinbosari</p>
            </div>
            <div className="table">
              <ul className="p-0" style={{ fontSize: "1.25rem" }}>
                <li>
                  <b>Tug'ilgan yili:</b>
                  <span>20.11.1969</span>
                </li>
                <li>
                  <b>Tug'ilgan joyi:</b>
                  <span>G'ijduvon tumani</span>
                </li>
                <li>
                  <b>Millati:</b>
                  <span>O'zbek</span>
                </li>
                <li>
                  <b>Ma'lumoti:</b>
                  <span>Oliy</span>
                </li>
                <li>
                  <b>Telefon raqami:</b>
                  <span>(+99894) 123-45-67</span>
                </li>
              </ul>
            </div>


            <div
              className="modals d-flex align-content-center justify-content-lg-start mt-4">
              <div id="modal_scrollable" className="modal fade" tabindex="-1"
                aria-hidden="true" style={{ display: "none" }}>
                <div className="modal-dialog modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header pb-3">
                      <button type="button" className="close"
                        data-dismiss="modal">
                        ×
                      </button>
                    </div>

                    <div className="modal-body py-0">
                      <p>
                        Cras mattis consectetur purus sit amet
                        fermentum.
                        Cras justo odio, dapibus ac facilisis in,
                        egestas
                        eget quam. Morbi leo risus, porta ac
                        consectetur ac,
                        vestibulum at eros.
                      </p>
                      <p>
                        Praesent commodo cursus magna, vel
                        scelerisque nisl
                        consectetur et. Vivamus sagittis lacus vel
                        augue
                        laoreet rutrum faucibus dolor auctor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button type="button" className="btn mr-1" data-toggle="modal"
                style={{
                  backgroundColor: "#2a4d85",
                  color: "#fff",
                  width: "250px",
                  textAlign: "center"
                }}
                data-target="#modal_scrollable">
                <span>Qo'shimcha ma'lumotlar</span>
              </button>
            </div>
          </div>
        </div>


      </div>
    </Wrapper>
  );
}

export default Employee2;

const Wrapper = styled.div`
  .rahbar{
    display: flex; 
    background-color: #deeceb; 
    padding: 24px; 
    overflow: hidden;
  }

  .table li {
    margin-bottom: 6px;
  }

  .table b {
    margin-right: 8px;
  }

  .rahbar img {
      width: 350px !important;
      max-height: 300px;
      /* height: 240px !important; */
      display: flex !important;
      justify-content: center !important;
  }

  @media(max-width: 1400px) {
      .rahbar {
          display: flex;
          flex-direction: column;
          justify-content: center !important;
          align-items: center;
      }

      .rahbar>div {
          text-align: center;
          right: 0 !important;
          text-align: center !important;
          padding: 0;
          margin-top: 16px;
          width: 100% !important;
      }

      .person-info h1,
      .person-info p {
          text-align: center !important;
      }

      .person .modals {
          justify-content: center !important;
      }

      .person-info h1 {
          font-size: 1.5rem !important;

      }

      .person-info p {
          font-size: 0.875rem !important;
      }

  }


  @media(max-width: 768px) {

      .rahbar {
          display: flex;
          flex-direction: column;
          justify-content: center !important;
          align-items: center;
      }

      .rahbar img {
          width: 140px !important;
          height: 120px !important;
          display: flex !important;
          justify-content: center !important;
      }

      .rahbar>div {
          text-align: center;
          right: 0 !important;
          text-align: center !important;
          padding: 0;
          margin-top: 16px;
      }

      .media-rahbar {
          flex-direction: column;
          align-items: center;
      }

      .media-rahbar .row {
          width: 100% !important;
      }

      /* .media-rahbar img {
  height: 250px !important;
  width: 100% !important;
  } */
  }

  .rahbar {
      margin-top: 1rem;
  }

  .rahbar .rahbar-info {
      display: grid;
      grid-template-columns: 3fr 2fr;
      /* grid-auto-rows: 30px; */
      gap: 16px;
  }

  @media(max-width: 768px) {

      .rahbar {
          display: flex;
          flex-direction: column;
          justify-content: center !important;
          align-items: center;
      }

      .rahbar img {
          display: flex !important;
          justify-content: center !important;
      }

      .rahbar>div {
          text-align: center;
          right: 0 !important;
          text-align: center !important;
          padding: 0;
          margin-top: 1rem;
      }

      .rahbar .rahbar-info {
          grid-template-columns: 1fr !important;
          gap: 0.5rem !important;
      }
  }

  .person-info h1 {
      font-size: 2rem;
      margin: 0;
      padding: 0.5rem;
  }

  .person-info p {
      font-size: 1.25rem;
      padding: 0.5rem;
      margin: 0;
  }

  .person .table {
      margin-bottom: 0.5rem;
  }

  .person .table ul {
      font-size: 1.25rem;
      margin: 0;
      list-style: none;
  }

  .person .table li {
      margin-bottom: 6px;
  }


  .person button {
      padding: 0.5rem 1rem;
  }

  .person button span {
      font-size: 1rem;
  }
`
