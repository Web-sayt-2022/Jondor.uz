import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance, urlFile } from "../../config";
import styled from "styled-components";

const AsosiyYangililar = ({ news }) => {
  const navigate = useNavigate();
  const [data, setData] = useState({});

  const navigateHandler = (dat) => {
    navigate(`/news/detail/${dat.id}`, {
      state: dat,
    });
  };

  // hokim ma'lumotlarini o'qib olish
  useEffect(() => {
    let isMounted = true;

    const getData = async () => {
      try {
        const res = await axiosInstance.get("stateEmployee/getHokim");
        if (isMounted) {
          setData(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getData();

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <section className="asosiy-yangiliklar-section bg-light">
        <div className="row px-2 mt-3 pb-0">
          <div className="col-xl-3 col-lg-12 ">
            <div
              className="p-2 text-light rounded bg-primary title"
              style={{ textTransform: "uppercase" }}
            >
              Tuman Hokimi
            </div>

            <div className="col-lg-12 pt-3 px-0">
              <div className="card card-hokim">
                <div className="card-img-actions d-flex justify-content-center">
                  <img
                    className="img-fluid img-hokim"
                    src={data?.imageID ? urlFile + "/" + data.imageID : "/assets/img/logo_nav.png"}
                    alt=""
                  />

                  <div className="profile">
                    <a href={data.facebook ? data.facebook : "#1"}>
                      <i
                        className="icon-facebook2 text-light mr-2 cursor-pointer"
                        style={{ fontSize: "1.5rem" }}
                        target="_blank"
                      ></i>
                    </a>
                    <a href={data.email ? data.email : "#1"}>
                      <i
                        className="icon-envelop5 text-light cursor-pointer"
                        style={{ fontSize: "2rem" }}
                        target="_blank"
                      ></i>
                    </a>
                  </div>
                </div>

                <div
                  className="card-footer bg-secondary m-0 p-0 d-flex justify-content-center align-items-center position-relative"
                  style={{ height: "4.375rem" }}
                >
                  <h2 className="font-weight-semibold text-light text-center m-0">
                    {data?.firstName} {data?.lastName}
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-9 col-lg-12">
            <div>
              <div
                className="p-2 text-light rounded bg-primary title"
                style={{ textTransform: "uppercase" }}
              >
                Asosiy yangiliklar
              </div>
            </div>

            <div className="boxes">
              {news?.length > 0 && news.map((dat) =>
                dat.actual && (
                  <div
                    key={dat.id}
                    className="position-relative rounded box"
                    style={{ height: "25rem" }}
                    onClick={() => navigateHandler(dat)}
                  >
                    <img
                      src={`${urlFile}/${dat.generatedNames[0]}`}
                      alt=""
                      className="box-img"
                    />
                    <div className="paragraf">
                      <p className="text-light">{dat.uzTitle}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default React.memo(AsosiyYangililar);

const Wrapper = styled.div`
  .box-img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .box {
    overflow: hidden;
  }

  .paragraf {
    width: 100%;
    position: absolute;
    bottom: 0;
    margin: 0;
    background-color: rgba(69, 116, 138, 0.6);
  }

  .paragraf p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: justify;
    margin-bottom: 0;
    padding: 0.5rem;
    overflow: hidden;
  }

  .title,
  p {
    font-size: 1.125rem;
  }

  .img-hokim {
    height: 20.625rem;
    width: 100%;
    max-width: 28.125rem;
    object-fit: cover;
  }

  .profile {
    width: 100%;
    position: absolute;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(42, 77, 133, 0.6);
  }

  .boxes {
    margin-top: 1.25rem;
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 12.25rem;
    gap: 0.5rem 1rem;
  }

  @media (max-width: 992px) {
    .boxes {
      grid-template-columns: 1fr;
    }

    .buxoro-img,
    .logo {
      height: 4.375rem;
    }
  }

  .boxes a:nth-child(1) {
    grid-row: 1/3;
  }

  .profile {
    height: 3rem;
    bottom: -3rem;
    transition: 0.5s !important;
  }

  .card-hokim:hover .profile {
    bottom: 0;
  }

  .profile i {
    transition: 0.3s !important;
  }

  .profile i:hover {
    color: #f58646 !important;
    transform: scale(1.1);
  }

  .box-img {
    transition: 0.5s !important;
    cursor: pointer;
  }

  .boxes > a:hover .box-img {
    transform: scale(1.1);
  }
  .box:nth-child(2),
  .box:nth-child(3) {
    height: 100% !important;
  }
`