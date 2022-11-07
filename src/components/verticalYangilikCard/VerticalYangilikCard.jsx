import React from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { urlFile } from "../../config";

const VerticalYangilikCard = ({ data, totalElements, setToggleHandler, currentPage, size, handlePageClick }) => {
  const navigate = useNavigate()
  console.log(data);
  return (
    <Wrapper>
       <section className="vertical-yangiliklar-section-left bg-light mt-3">
      <div className="p-2 text-white  bg-primary mx-2 d-flex align-content-center justify-content-between rounded">
        <h4 style={{ fontSize: "1.125rem", textTransform: "uppercase" }}
          className="m-0 p-0">
          Yangiliklar
        </h4>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <i
            onClick={() => setToggleHandler(true)}
            className="icon-grid6"
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
          ></i>
          <i
            onClick={() => setToggleHandler(false)}
            className="icon-paragraph-justify3"
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
          ></i>
        </div>
      </div>

      <div className="row px-2 pt-2">
        {
          data?.map((item) => {
            return (
              <div className="col-lg-4 col-md-6 mb-2">
                <div className="card card-hover p-2 m-0 pb-0">
                  <div className="card-img-actions">
                    <div className="img-scale">
                      <img className="img-fluid img-fluid-hover"
                        src={`${urlFile}/${item?.generatedNames[0]}`}
                        alt="rasm" />
                    </div>
                  </div>
                  <div className="card-body p-1">
                    <h6 className="card-title text-primary font-weight-bold p-0 m-0">
                      <i className="icon-calendar3"></i>
                      {item?.createdDate.substr(0, 10).split("-").reverse().join(".")}
                    </h6>
                    <p className="card-text card-text-title mt-1 new-p-vertical">
                      {item.uzTitle}
                    </p>
                  </div>

                  <div
                    className="card-footer py-2 px-2 bg-white"
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
                  >
                    <ul className="list-inline mb-0 mt-1">
                      <li className="list-inline-item">
                        <a href="#1" className="text-body">
                          <i className="icon-eye4 mr-2"></i>
                          {item?.countView}
                        </a>
                      </li>
                    </ul>

                    <span onClick={() => navigate(`/news/detail/${item.id}`, { state: item })}
                      className="text-primary font-weight-semybold"
                      style={{ cursor: "pointer" }}>
                      Batafsil
                      <i className="icon-arrow-right8"></i>
                    </span>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>

      <ReactPaginate
        previousLabel="<<"
        nextLabel=">>"
        pageCount={totalElements / size}
        breakLabel="..."
        className="paginate"
        activeClassName="active"
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        forcePage={currentPage}
      />

    </section>
    </Wrapper>
   
  );
};

export default React.memo(VerticalYangilikCard);

const Wrapper = styled.div`
  .vertical-yangiliklar-section-left {
    width: 100% !important;
  }

  @media(max-width: 992px) {
    .asosiy-main .vertical-yangiliklar-section-left {
      width: 100% !important;
    }
  }

  .vertical-yangiliklar-section-left .card-text-title {
    cursor: pointer;
  }

  .vertical-yangiliklar-section-left .card-title {
    font-size: 0.8rem;
  }

  .vertical-yangiliklar-section-left .card-text-title:hover {
    color: #2196f3;
  }

  .vertical-yangiliklar-section-left .img-scale {
    overflow: hidden;
  }

  .vertical-yangiliklar-section-left .img-fluid {
    transition: 0.3s linear !important;
    width: 100%;
    height: 12.5rem;
    object-fit: cover;
    border-radius: 5px;
  }

  .vertical-yangiliklar-section-left .img-fluid-hover:hover {
    transform: scale(1.1);
  }

  .vertical-yangiliklar-section-left .card-hover {
    transition: 0.3s linear !important;
    margin-bottom: 0.5rem !important;
  }

  .vertical-yangiliklar-section-left .card-hover:hover {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 0.625rem 1.25rem,
      rgba(0, 0, 0, 0.23) 0px 0.375rem 0.375rem;
    transform: scale(1.02);
  }

  .vertical-yangiliklar-section-left .modal-backdrop+.yangiliklar-section .show {
    opacity: 0.1 !important;
  }

  .new-p-vertical {
      font-weight: 600;
      color: "#2a4d85";
      font-size: "0.8rem";
      font-variant: "small-caps";
      line-height: 1.2;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      text-align: justify;
      margin-bottom: 0;
      overflow: hidden;
      min-height: 50px;
  }
`