import React, { useEffect, useState } from "react";
import "./verticalYangilikCardNew.css";
import cardImg from "../../images/navruz.jpg";
import ReactPaginate from "react-paginate";
import AlertContent, { Alert } from "../alert/Alert";
import { axiosInstance } from "../../config";

const VerticalYangilikCardNew = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [size, setSize] = useState(10);
  const [alert, setAlert] = useState({ open: false, color: "", text: "" });

  useEffect(() => {
    axiosInstance
      .get(`news/getAll`, {
        page: currentPage,
        size: size,
        sort: null,
      })
      .then((res) => {
        console.log(res.data);
      });
  }, []);

  const handlePageClick = (e) => {
    axiosInstance
      .get(``, {
        page: e.selected,
        size: size,
      })
      .then((res) => {
        console.log(1);
      })
      .catch((error) => {
        Alert(setAlert, "warning", error.response.data);
      });
  };
  return (
    <section className="vertical-news">
      <div className="vertical-news__header">
        <span>Yangiliklar</span>
      </div>

      <div className="vertical-news-row">
        <div className="vertical-news__new">
          <img src={cardImg} alt="" />

          <h5 className="vertical-news__new--date">
            <i className="icon-calendar3"></i>
            13.03.2003
          </h5>
          <p className="vertical-news__new--text">
            Turizm va madaniy meros vazirligi huzuridagi turizm xizmatlarini
            sertifikatlash markazi direktori sulton xonboev davlatimiz
          </p>
          <div className="vertical-news__new--bottom">
            <a href="">
              <i className="icon-eye4 mr-2"></i>
              450
            </a>
            <a href="">
              Batafsil
              <i className="icon-arrow-right8"></i>
            </a>
          </div>
        </div>
        <div className="vertical-news__new">
          <img src={cardImg} alt="" />

          <h5 className="vertical-news__new--date">
            <i className="icon-calendar3"></i>
            13.03.2003
          </h5>
          <p className="vertical-news__new--text">
            Turizm va madaniy meros vazirligi huzuridagi turizm xizmatlarini
            sertifikatlash markazi direktori sulton xonboev davlatimiz
          </p>
          <div className="vertical-news__new--bottom">
            <a href="">
              <i className="icon-eye4 mr-2"></i>
              450
            </a>
            <a href="">
              Batafsil
              <i className="icon-arrow-right8"></i>
            </a>
          </div>
        </div>
        <div className="vertical-news__new">
          <img src={cardImg} alt="" />

          <h5 className="vertical-news__new--date">
            <i className="icon-calendar3"></i>
            13.03.2003
          </h5>
          <p className="vertical-news__new--text">
            Turizm va madaniy meros vazirligi huzuridagi turizm xizmatlarini
            sertifikatlash markazi direktori sulton xonboev davlatimiz
          </p>
          <div className="vertical-news__new--bottom">
            <a href="">
              <i className="icon-eye4 mr-2"></i>
              450
            </a>
            <a href="">
              Batafsil
              <i className="icon-arrow-right8"></i>
            </a>
          </div>
        </div>
        <div className="vertical-news__new">
          <img src={cardImg} alt="" />

          <h5 className="vertical-news__new--date">
            <i className="icon-calendar3"></i>
            13.03.2003
          </h5>
          <p className="vertical-news__new--text">
            Turizm va madaniy meros vazirligi huzuridagi turizm xizmatlarini
            sertifikatlash markazi direktori sulton xonboev davlatimiz
          </p>
          <div className="vertical-news__new--bottom">
            <a href="">
              <i className="icon-eye4 mr-2"></i>
              450
            </a>
            <a href="">
              Batafsil
              <i className="icon-arrow-right8"></i>
            </a>
          </div>
        </div>
        <div className="vertical-news__new">
          <img src={cardImg} alt="" />

          <h5 className="vertical-news__new--date">
            <i className="icon-calendar3"></i>
            13.03.2003
          </h5>
          <p className="vertical-news__new--text">
            Turizm va madaniy meros vazirligi huzuridagi turizm xizmatlarini
            sertifikatlash markazi direktori sulton xonboev davlatimiz
          </p>
          <div className="vertical-news__new--bottom">
            <a href="">
              <i className="icon-eye4 mr-2"></i>
              450
            </a>
            <a href="">
              Batafsil
              <i className="icon-arrow-right8"></i>
            </a>
          </div>
        </div>
        <div className="vertical-news__new">
          <img src={cardImg} alt="" />

          <h5 className="vertical-news__new--date">
            <i className="icon-calendar3"></i>
            13.03.2003
          </h5>
          <p className="vertical-news__new--text">
            Turizm va madaniy meros vazirligi huzuridagi turizm xizmatlarini
            sertifikatlash markazi direktori sulton xonboev davlatimiz
          </p>
          <div className="vertical-news__new--bottom">
            <a href="">
              <i className="icon-eye4 mr-2"></i>
              450
            </a>
            <a href="">
              Batafsil
              <i className="icon-arrow-right8"></i>
            </a>
          </div>
        </div>
        <div className="vertical-news__new">
          <img src={cardImg} alt="" />

          <h5 className="vertical-news__new--date">
            <i className="icon-calendar3"></i>
            13.03.2003
          </h5>
          <p className="vertical-news__new--text">
            Turizm va madaniy meros vazirligi huzuridagi turizm xizmatlarini
            sertifikatlash markazi direktori sulton xonboev davlatimiz
          </p>
          <div className="vertical-news__new--bottom">
            <a href="">
              <i className="icon-eye4 mr-2"></i>
              450
            </a>
            <a href="">
              Batafsil
              <i className="icon-arrow-right8"></i>
            </a>
          </div>
        </div>
        <div className="vertical-news__new">
          <img src={cardImg} alt="" />

          <h5 className="vertical-news__new--date">
            <i className="icon-calendar3"></i>
            13.03.2003
          </h5>
          <p className="vertical-news__new--text">
            Turizm va madaniy meros vazirligi huzuridagi turizm xizmatlarini
            sertifikatlash markazi direktori sulton xonboev davlatimiz
          </p>
          <div className="vertical-news__new--bottom">
            <a href="">
              <i className="icon-eye4 mr-2"></i>
              450
            </a>
            <a href="">
              Batafsil
              <i className="icon-arrow-right8"></i>
            </a>
          </div>
        </div>
        <div className="vertical-news__new">
          <img src={cardImg} alt="" />

          <h5 className="vertical-news__new--date">
            <i className="icon-calendar3"></i>
            13.03.2003
          </h5>
          <p className="vertical-news__new--text">
            Turizm va madaniy meros vazirligi huzuridagi turizm xizmatlarini
            sertifikatlash markazi direktori sulton xonboev davlatimiz
          </p>
          <div className="vertical-news__new--bottom">
            <a href="">
              <i className="icon-eye4 mr-2"></i>
              450
            </a>
            <a href="">
              Batafsil
              <i className="icon-arrow-right8"></i>
            </a>
          </div>
        </div>
        <div className="vertical-news__new">
          <img src={cardImg} alt="" />

          <h5 className="vertical-news__new--date">
            <i className="icon-calendar3"></i>
            13.03.2003
          </h5>
          <p className="vertical-news__new--text">
            Turizm va madaniy meros vazirligi huzuridagi turizm xizmatlarini
            sertifikatlash markazi direktori sulton xonboev davlatimiz
          </p>
          <div className="vertical-news__new--bottom">
            <a href="">
              <i className="icon-eye4 mr-2"></i>
              450
            </a>
            <a href="">
              Batafsil
              <i className="icon-arrow-right8"></i>
            </a>
          </div>
        </div>
        <div className="vertical-news__new">
          <img src={cardImg} alt="" />

          <h5 className="vertical-news__new--date">
            <i className="icon-calendar3"></i>
            13.03.2003
          </h5>
          <p className="vertical-news__new--text">
            Turizm va madaniy meros vazirligi huzuridagi turizm xizmatlarini
            sertifikatlash markazi direktori sulton xonboev davlatimiz
          </p>
          <div className="vertical-news__new--bottom">
            <a href="">
              <i className="icon-eye4 mr-2"></i>
              450
            </a>
            <a href="">
              Batafsil
              <i className="icon-arrow-right8"></i>
            </a>
          </div>
        </div>
        <div className="vertical-news__new">
          <img src={cardImg} alt="" />

          <h5 className="vertical-news__new--date">
            <i className="icon-calendar3"></i>
            13.03.2003
          </h5>
          <p className="vertical-news__new--text">
            Turizm va madaniy meros vazirligi huzuridagi turizm xizmatlarini
            sertifikatlash markazi direktori sulton xonboev davlatimiz
          </p>
          <div className="vertical-news__new--bottom">
            <a href="">
              <i className="icon-eye4 mr-2"></i>
              450
            </a>
            <a href="">
              Batafsil
              <i className="icon-arrow-right8"></i>
            </a>
          </div>
        </div>
      </div>

      <ReactPaginate
        previousLabel="<<"
        nextLabel=">>"
        pageCount={500 / size}
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

export default VerticalYangilikCardNew;
