import React from "react";
import "./horizontalYangilikCard.css";
import ReactPaginate from "react-paginate";
import { urlFile } from "../../config";
import { useNavigate } from "react-router-dom";

const HorizontalYangilikCard = ({ data, totalElements, setToggleHandler, currentPage, size, handlePageClick }) => {
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
                          {item?.createdDate.substr(0, 10).split("-").reverse().join(".")}
                        </h6>

                        {/* <h6 className="mr-2">
                          <a href="#1"
                            className="text-primary font-weight-semybold ml-1 cursor-pointer">
                            Madaniyat
                          </a>
                        </h6> */}

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




        {/* <div className="col-lg-12 px-2 horizontalCard mb-2">
          <div className="card horizontalCard2 mb-0">
            <div className="card-body p-2">
              <div className="card-img-actions mr-2" style={{ maxWidth: "400px" }}>
                <div className="img-scale">
                  <img
                    className="rounded img-fluid img-fluid-hover"
                    src={keldiyorImg}
                    alt=""
                    style={{
                      width: "100%",
                      maxHeight: "280px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>

              <div className="card-header pt-0">
                <h3
                  className="text-secondary m-0 p-0 horizontal-h3"
                  style={{ fontWeight: "500", fontSize: "1.5rem", textTransform: "uppercase" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eaque vitae enim cupiditate et architecto exercitationem autem optio doloremque nesciunt?
                </h3>

                <div className="d-flex align-content-center">
                  <h6 className="card-title font-weight-bold mr-2">
                    <i className="text-primary icon-calendar3"></i>
                    10.10.2022
                  </h6>

                  <h6 className="mr-2">
                    <a href="#1"
                      className="text-primary font-weight-semybold ml-1 cursor-pointer">
                      Madaniyat
                    </a>
                  </h6>

                  <h6 className="mr-2">
                    Manba: <a href="https://kun.uz/">Kun.uz</a>
                  </h6>
                </div>
              </div>

              <p
                className="card-text card-text-title horizontal-p"
                style={{ textAlign: "justify", fontSize: "1rem", lineHeight: 1.15, fontWeight: "500" }}
              >
                Agar yer singari ishlab chiqarish vositalari xususiy qo‘llarda
                bo‘lmasa, katta ehtimol bilan ular samarasiz ishlatiladi. Yerga
                xususiy egalik qilish huquqi nafaqat agrar davlatning rivoji
                uchun, balki butun boshli xalqning irsiy fondini saqlab qolish
                uchun ham kerak. Bu haqda Kun.uz kolumnisti Shahzod Yo‘ldoshboyev
                fikr yuritadi. Oxirgi haftalarning shiddatli xabarlari oqimi
                orasida bir muhim xabar, nazarimda, jamoatchilik nazaridan naz
                o‘zgartirish taklif etildi. Qanday taklif bu? Hozirda
                O‘zbekistonda dehqon va fermerlar yerlarni xususiy mulkka olishi
                imkoniyati yo‘q. Taklif mazkur me’yorni Konstitutsiyada
                mustahkamlashni nazarda tutyapti.
              </p>
            </div>

            <div
              className="card-footer py-2 px-3 bg-white"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <ul className="list-inline mb-0 footer-menu">
                <li className="list-inline-item">
                  <a href="#1" className="text-body">
                    <i className="icon-eye4 mr-2"></i>438
                  </a>
                </li>
              </ul>

              <a
                href="../deteile_news.html"
                className="text-primary font-weight-semybold"
                style={{ cursor: "pointer" }}
              >
                Batafsil
                <i className="icon-arrow-right8"></i>
              </a>
            </div>
          </div>
        </div> */}


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

export default React.memo(HorizontalYangilikCard);
