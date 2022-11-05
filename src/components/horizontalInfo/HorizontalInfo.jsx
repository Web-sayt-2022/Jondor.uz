import React from "react";
import "./horizontalInfo.css";
import ReactPaginate from "react-paginate";
import { urlFile } from "../../config";
import { useNavigate } from "react-router-dom";

const HorizontalInfo = ({ data, totalElements, currentPage, size, handlePageClick }) => {
  const navigate = useNavigate()
  return (
    <section
      className="blog-horizontal mt-3 px-2"
      style={{ width: "calc(100% - 300px)" }}
    >
      <div
        className="p-2 text-white bg-primary rounded"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h4 style={{ fontSize: "1.125rem", textTransform: "uppercase" }}>
          Ma'lumotlar
        </h4>
      </div>

      <div className="row mt-2 mb-0 pb-0">
        {
          data?.map(item => {
            return (
              <div className="col-lg-12 px-2 horizontalCard mb-2">
                <div className="card horizontalCard2 mb-0">
                  <div className="card-body p-2">
                    <div className="card-img-actions mr-2" style={{ maxWidth: "400px" }}>
                      <div className="img-scale">
                        <img
                          className="rounded img-fluid img-fluid-hover"
                          src={`${urlFile}/${item?.generatedNames[0]}`}
                          alt=""
                          style={{
                            width: "100%",
                            maxHeight: "270px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>

                    <div className="card-header pt-0">
                      <h3 className="text-secondary m-0 p-0 horizontal-h3"
                        style={{ fontWeight: "500", fontSize: "1.5rem", textTransform: "uppercase" }}>
                        {item.uzTitle}
                      </h3>

                      <div className="d-flex align-content-center">
                        <h6 className="card-title font-weight-bold mr-2 pl-0">
                          <i className="text-primary icon-calendar3"></i>
                          {item?.createdDate?.substr(0, 10).split("-").reverse().join(".")}
                        </h6>

                        <h6 className="mr-2">
                          Manba: <a href={item?.source}>
                            {item?.source}
                          </a>
                        </h6>
                      </div>
                    </div>

                    <p className="card-text card-text-title horizontal-p"
                      style={{ textAlign: "justify", fontSize: "1rem", lineHeight: 1.15, fontWeight: "500" }}>
                      {item.uzDescription}
                    </p>
                  </div>

                  <div className="card-footer py-2 px-3 bg-white"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <ul className="list-inline mb-0 footer-menu">
                      <li className="list-inline-item">
                        <a href="#1" className="text-body">
                          <span style={{fontWeight: "600"}}>Manba: </span>
                          {item?.source}
                        </a>
                      </li>
                    </ul>

                    {/* <span onClick={() => navigate(`/information/detail/${item.id}`, { state: item })}
                      className="text-primary font-weight-semybold"
                      style={{ cursor: "pointer" }}>
                      Batafsil
                      <i className="icon-arrow-right8"></i>
                    </span> */}

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
  );
};

export default React.memo(HorizontalInfo);
