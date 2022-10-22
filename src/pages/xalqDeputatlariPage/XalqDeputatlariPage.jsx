import React from "react";
import "./xalqDeputatlariPage.css";

const XalqDeputatlariPage = () => {
  return (
    <section className="right-panel mt-4 mb-3">
      <div
        className="p-2 text-white bg-primary mb-2"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h4 style={{ fontSize: "1.125rem", textTransform: "uppercase" }}>
          Xalq deputatlari Buxoro viloyati kengashi
        </h4>
      </div>
      <div className="bg-white p-2" style={{ borderRadius: "5px" }}>
        <section className="section-accordion">
          <div
            className="card-group-control card-group-control-left"
            id="accordion-control"
          >
            <div className="card">
              <div
                className="card-header p-2"
                style={{ backgroundColor: "#2a4d85" }}
              >
                <h4 className="card-title">
                  <a
                    data-toggle="collapse"
                    style={{ fontSize: "1.125rem" }}
                    className="text-body collapsed text-uppercase"
                    href="#accordion-control-group1"
                    aria-expanded="false"
                  >
                    O'zbekiston Respublikasi Oliy Majlisi Senati
                  </a>
                </h4>
              </div>

              <div
                id="accordion-control-group1"
                className="collapse px-2"
                data-parent="#accordion-control"
              >
                <div className="card-body mt-3">
                  <div
                    className="card-group-control card-group-control-left"
                    id="sub-accordion-control"
                  >
                    <div className="card">
                      <div
                        className="card-header p-2"
                        style={{ backgroundColor: "#2a4d85", color: "#fff" }}
                      >
                        <h4 className="card-title">
                          <a
                            data-toggle="collapse"
                            style={{ fontSize: "1.125rem" }}
                            className="text-body collapsed sub-link text-uppercase"
                            href="#sub-accordion-control-group1"
                            aria-expanded="false"
                          >
                            Senat
                          </a>
                        </h4>
                      </div>

                      <div
                        id="sub-accordion-control-group1"
                        className="collapse"
                        data-parent="#sub-accordion-control"
                      >
                        <div className="card-body p-2">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Minus, aperiam officia assumenda ipsum, ad nobis
                          earum molestiae magnam expedita veritatis deleniti! A
                          praesentium repellendus, vitae tenetur, blanditiis
                          placeat reprehenderit ipsum enim nobis ut, nostrum
                          harum doloremque illo ad quisquam dolores in quo natus
                          quam? Quas ab alias facere deserunt voluptatum magni
                          ipsa quidem, eos aperiam molestiae corporis temporibus
                          quibusdam laborum placeat cum nam minus accusamus quod
                          deleniti? Beatae hic corrupti fugit deserunt accusamus
                          esse illum modi? Sed labore tenetur praesentium ad
                          quia expedita in itaque dolore vitae impedit, odio qui
                          reiciendis debitis nam! Quaerat numquam aspernatur
                          corrupti excepturi officia impedit nostrum quisquam
                          veritatis sint quam, debitis magnam autem minima,
                          facilis obcaecati libero eius non temporibus, cum
                          enim! Aut, eum nobis voluptates earum eligendi nostrum
                          accusantium consequatur quis non perferendis cum
                          repudiandae deleniti reiciendis ipsam error veniam a.
                          Culpa ab eaque sunt quaerat modi? Nisi sunt eos
                          sapiente quo maiores consequatur aut atque reiciendis
                          veritatis quas modi soluta, quasi tempora aliquid?
                          Modi, totam provident recusandae molestiae eaque
                          sapiente obcaecati iusto sunt, rem similique corporis
                          error autem. Rerum ipsum, nobis voluptate quo sint
                          accusamus distinctio, eligendi natus dolores, vel quam
                          nihil dolorum officia. Perspiciatis delectus cumque
                          facere repudiandae quod omnis quidem ipsum?
                        </div>
                      </div>
                    </div>

                    <div className="card">
                      <div
                        className="card-header p-2"
                        style={{ backgroundColor: "#2a4d85", color: "#fff" }}
                      >
                        <h4 className="card-title">
                          <a
                            className="text-body collapsed sub-link text-uppercase"
                            style={{ fontSize: "1.125rem" }}
                            data-toggle="collapse"
                            href="#sub-accordion-control-group2"
                            aria-expanded="false"
                          >
                            Senatorlar ro'yxati
                          </a>
                        </h4>
                      </div>

                      <div
                        id="sub-accordion-control-group2"
                        className="collapse"
                        data-parent="#sub-accordion-control"
                      >
                        <div className="rahbariyat-cards bg-light">
                          <div className="rahbariyat-card bg-white mb-2">
                            <div className="card-body body-elements">
                              <div className="img d-flex align-content-center justify-content-center">
                                <img src="../images/person.jpg" alt="" />
                              </div>
                              <div className="table-responsive">
                                <div className="person">
                                  <div className="my-3 person-info">
                                    <h1
                                      style={{ color: "#2a4d85" }}
                                      className="fw-bold text-uppercase"
                                    >
                                      Raxmatov Keldiyor Kenja o'g'li
                                    </h1>

                                    <p
                                      style={{ color: "#2a4d85" }}
                                      className="fw-bold text-uppercase"
                                    >
                                      Viloyat hokimining moliya-iqtisodiyot va
                                      kambag'allikni qisqartirish masalalari
                                      bo'yicha birinch o'rinbosari
                                    </p>
                                  </div>

                                  <div className="table-responsive">
                                    <table className="table table-sm">
                                      <tbody
                                        className="text-uppercase"
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: 500,
                                        }}
                                      >
                                        <tr>
                                          <td>Tug'ilgan yili:</td>
                                          <td>20.11.1969</td>
                                        </tr>
                                        <tr>
                                          <td>Tug'ilgan joyi:</td>
                                          <td>G'ijduvon tumani</td>
                                        </tr>
                                        <tr>
                                          <td>Millati:</td>
                                          <td>O'zbek</td>
                                        </tr>
                                        <tr>
                                          <td>Ma'lumoti:</td>
                                          <td>Oliy</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <div className="modals d-flex align-content-center justify-content-lg-start mt-4">
                                    <div
                                      id="modal_scrollable"
                                      className="modal fade"
                                      tabindex="-1"
                                      aria-hidden="true"
                                      style={{ display: "none" }}
                                    >
                                      <div className="modal-dialog modal-dialog-scrollable">
                                        <div className="modal-content">
                                          <div className="modal-header pb-2 mb-2 bg-primary text-light text-uppercase">
                                            <h5 className="modal-title ">
                                              Qo'shimcha ma'lumotlar
                                            </h5>
                                            <button
                                              type="button"
                                              className="close text-light fs-2"
                                              data-dismiss="modal"
                                            >
                                              ×
                                            </button>
                                          </div>

                                          <div className="modal-body py-0">
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <button
                                      type="button"
                                      className="btn mr-1"
                                      data-toggle="modal"
                                      style={{
                                        backgroundColor: "#2a4d85",
                                        color: "#fff",

                                        textAlign: "center",
                                      }}
                                      data-target="#modal_scrollable"
                                    >
                                      <span>Qo'shimcha ma'lumotlar</span>
                                    </button>

                                    {/* <!------- MODAL-2 ------> */}
                                    <div
                                      id="modal_scrollable-1"
                                      className="modal fade"
                                      tabindex="-1"
                                      aria-hidden="true"
                                      style={{ display: "none" }}
                                    >
                                      <div className="modal-dialog modal-dialog-scrollable">
                                        <div className="modal-content">
                                          <div className="modal-header pb-2 mb-2 bg-primary text-light text-uppercase">
                                            <h5 className="modal-title ">
                                              Rasmiy vazifalar
                                            </h5>
                                            <button
                                              type="button"
                                              className="close text-light fs-2"
                                              data-dismiss="modal"
                                            >
                                              ×
                                            </button>
                                          </div>

                                          <div className="modal-body py-0">
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <button
                                      type="button"
                                      className="btn btn-light"
                                      data-toggle="modal"
                                      style={{
                                        backgroundColor: "#2a4d85",
                                        color: "#fff",

                                        textAlign: "center",
                                      }}
                                      data-target="#modal_scrollable-1"
                                    >
                                      <span>Rasmiy vazifalar</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="rahbariyat-card bg-white mb-2">
                            <div className="card-body body-elements">
                              <div className="img d-flex align-content-center justify-content-center">
                                <img src="../images/person.jpg" alt="" />
                              </div>
                              <div className="table-responsive">
                                <div className="person">
                                  <div className="my-3 person-info">
                                    <h1
                                      style={{ color: "#2a4d85" }}
                                      className="fw-bold text-uppercase"
                                    >
                                      Raxmatov Keldiyor Kenja o'g'li
                                    </h1>

                                    <p
                                      style={{ color: "#2a4d85" }}
                                      className="fw-bold text-uppercase"
                                    >
                                      Viloyat hokimining moliya-iqtisodiyot va
                                      kambag'allikni qisqartirish masalalari
                                      bo'yicha birinch o'rinbosari
                                    </p>
                                  </div>

                                  <div className="table-responsive">
                                    <table className="table table-sm">
                                      <tbody
                                        className="text-uppercase"
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: 500,
                                        }}
                                      >
                                        <tr>
                                          <td>Tug'ilgan yili:</td>
                                          <td>20.11.1969</td>
                                        </tr>
                                        <tr>
                                          <td>Tug'ilgan joyi:</td>
                                          <td>G'ijduvon tumani</td>
                                        </tr>
                                        <tr>
                                          <td>Millati:</td>
                                          <td>O'zbek</td>
                                        </tr>
                                        <tr>
                                          <td>Ma'lumoti:</td>
                                          <td>Oliy</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>

                                  <div className="modals d-flex align-content-center justify-content-lg-start mt-4">
                                    <div
                                      id="modal_scrollable"
                                      className="modal fade"
                                      tabindex="-1"
                                      aria-hidden="true"
                                      style={{ display: "none" }}
                                    >
                                      <div className="modal-dialog modal-dialog-scrollable">
                                        <div className="modal-content">
                                          <div className="modal-header pb-3">
                                            {/* <!-- <h5 className="modal-title">Scrollable modal</h5> --> */}
                                            <button
                                              type="button"
                                              className="close"
                                              data-dismiss="modal"
                                            >
                                              ×
                                            </button>
                                          </div>

                                          <div className="modal-body py-0">
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <button
                                      type="button"
                                      className="btn mr-1"
                                      data-toggle="modal"
                                      style={{
                                        backgroundColor: "#2a4d85",
                                        color: "#fff",

                                        textAlign: "center",
                                      }}
                                      data-target="#modal_scrollable"
                                    >
                                      <span>Qo'shimcha ma'lumotlar</span>
                                    </button>

                                    {/* <!------- MODAL-2 ------> */}
                                    <div
                                      id="modal_scrollable-1"
                                      className="modal fade"
                                      tabindex="-1"
                                      aria-hidden="true"
                                      style={{ display: "none" }}
                                    >
                                      <div className="modal-dialog modal-dialog-scrollable">
                                        <div className="modal-content">
                                          <div className="modal-header pb-3">
                                            {/* <!-- <h5 className="modal-title">Scrollable modal</h5> --> */}
                                            <button
                                              type="button"
                                              className="close"
                                              data-dismiss="modal"
                                            >
                                              ×
                                            </button>
                                          </div>

                                          <div className="modal-body py-0">
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <button
                                      type="button"
                                      className="btn btn-light"
                                      data-toggle="modal"
                                      style={{
                                        backgroundColor: "#2a4d85",
                                        color: "#fff",

                                        textAlign: "center",
                                      }}
                                      data-target="#modal_scrollable-1"
                                    >
                                      <span>Rasmiy vazifalar</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="rahbariyat-card bg-white mb-2">
                            <div className="card-body body-elements">
                              <div className="img d-flex align-content-center justify-content-center">
                                <img src="../images/person.jpg" alt="" />
                              </div>
                              <div className="table-responsive">
                                <div className="person">
                                  <div className="my-3 person-info">
                                    <h1
                                      style={{ color: "#2a4d85" }}
                                      className="fw-bold text-uppercase"
                                    >
                                      Raxmatov Keldiyor Kenja o'g'li
                                    </h1>

                                    <p
                                      style={{ color: "#2a4d85" }}
                                      className="fw-bold text-uppercase"
                                    >
                                      Viloyat hokimining moliya-iqtisodiyot va
                                      kambag'allikni qisqartirish masalalari
                                      bo'yicha birinch o'rinbosari
                                    </p>
                                  </div>

                                  <div className="table-responsive">
                                    <table className="table table-sm">
                                      <tbody
                                        className="text-uppercase"
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: 500,
                                        }}
                                      >
                                        <tr>
                                          <td>Tug'ilgan yili:</td>
                                          <td>20.11.1969</td>
                                        </tr>
                                        <tr>
                                          <td>Tug'ilgan joyi:</td>
                                          <td>G'ijduvon tumani</td>
                                        </tr>
                                        <tr>
                                          <td>Millati:</td>
                                          <td>O'zbek</td>
                                        </tr>
                                        <tr>
                                          <td>Ma'lumoti:</td>
                                          <td>Oliy</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>

                                  <div className="modals d-flex align-content-center justify-content-lg-start mt-4">
                                    <div
                                      id="modal_scrollable"
                                      className="modal fade"
                                      tabindex="-1"
                                      aria-hidden="true"
                                      style={{ display: "none" }}
                                    >
                                      <div className="modal-dialog modal-dialog-scrollable">
                                        <div className="modal-content">
                                          <div className="modal-header pb-3">
                                            {/* <!-- <h5 className="modal-title">Scrollable modal</h5> --> */}
                                            <button
                                              type="button"
                                              className="close"
                                              data-dismiss="modal"
                                            >
                                              ×
                                            </button>
                                          </div>

                                          <div className="modal-body py-0">
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <button
                                      type="button"
                                      className="btn mr-1"
                                      data-toggle="modal"
                                      style={{
                                        backgroundColor: "#2a4d85",
                                        color: "#fff",

                                        textAlign: "center",
                                      }}
                                      data-target="#modal_scrollable"
                                    >
                                      <span>Qo'shimcha ma'lumotlar</span>
                                    </button>

                                    <div
                                      id="modal_scrollable-1"
                                      className="modal fade"
                                      tabindex="-1"
                                      aria-hidden="true"
                                      style={{ display: "none" }}
                                    >
                                      <div className="modal-dialog modal-dialog-scrollable">
                                        <div className="modal-content">
                                          <div className="modal-header pb-3">
                                            {/* <!-- <h5 className="modal-title">Scrollable modal</h5> --> */}
                                            <button
                                              type="button"
                                              className="close"
                                              data-dismiss="modal"
                                            >
                                              ×
                                            </button>
                                          </div>

                                          <div className="modal-body py-0">
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <button
                                      type="button"
                                      className="btn btn-light"
                                      data-toggle="modal"
                                      style={{
                                        backgroundColor: "#2a4d85",
                                        color: "#fff",

                                        textAlign: "center",
                                      }}
                                      data-target="#modal_scrollable-1"
                                    >
                                      <span>Rasmiy vazifalar</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="rahbariyat-card bg-white mb-2">
                            <div className="card-body body-elements">
                              <div className="img d-flex align-content-center justify-content-center">
                                <img src="../images/person.jpg" alt="" />
                              </div>
                              <div className="table-responsive">
                                <div className="person">
                                  <div className="my-3 person-info">
                                    <h1
                                      style={{ color: "#2a4d85" }}
                                      className="fw-bold text-uppercase"
                                    >
                                      Raxmatov Keldiyor Kenja o'g'li
                                    </h1>

                                    <p
                                      style={{ color: "#2a4d85" }}
                                      className="fw-bold text-uppercase"
                                    >
                                      Viloyat hokimining moliya-iqtisodiyot va
                                      kambag'allikni qisqartirish masalalari
                                      bo'yicha birinch o'rinbosari
                                    </p>
                                  </div>

                                  <div className="table-responsive">
                                    <table className="table table-sm">
                                      <tbody
                                        className="text-uppercase"
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: 500,
                                        }}
                                      >
                                        <tr>
                                          <td>Tug'ilgan yili:</td>
                                          <td>20.11.1969</td>
                                        </tr>
                                        <tr>
                                          <td>Tug'ilgan joyi:</td>
                                          <td>G'ijduvon tumani</td>
                                        </tr>
                                        <tr>
                                          <td>Millati:</td>
                                          <td>O'zbek</td>
                                        </tr>
                                        <tr>
                                          <td>Ma'lumoti:</td>
                                          <td>Oliy</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>

                                  <div className="modals d-flex align-content-center justify-content-lg-start mt-4">
                                    <div
                                      id="modal_scrollable"
                                      className="modal fade"
                                      tabindex="-1"
                                      aria-hidden="true"
                                      style={{ display: "none" }}
                                    >
                                      <div className="modal-dialog modal-dialog-scrollable">
                                        <div className="modal-content">
                                          <div className="modal-header pb-3">
                                            {/* <!-- <h5 className="modal-title">Scrollable modal</h5> --> */}
                                            <button
                                              type="button"
                                              className="close"
                                              data-dismiss="modal"
                                            >
                                              ×
                                            </button>
                                          </div>

                                          <div className="modal-body py-0">
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <button
                                      type="button"
                                      className="btn mr-1"
                                      data-toggle="modal"
                                      style={{
                                        backgroundColor: "#2a4d85",
                                        color: "#fff",

                                        textAlign: "center",
                                      }}
                                      data-target="#modal_scrollable"
                                    >
                                      <span>Qo'shimcha ma'lumotlar</span>
                                    </button>

                                    {/* <!------- MODAL-2 ------> */}
                                    <div
                                      id="modal_scrollable-1"
                                      className="modal fade"
                                      tabindex="-1"
                                      aria-hidden="true"
                                      style={{ display: "none" }}
                                    >
                                      <div className="modal-dialog modal-dialog-scrollable">
                                        <div className="modal-content">
                                          <div className="modal-header pb-3">
                                            {/* <!-- <h5 className="modal-title">Scrollable modal</h5> --> */}
                                            <button
                                              type="button"
                                              className="close"
                                              data-dismiss="modal"
                                            >
                                              ×
                                            </button>
                                          </div>

                                          <div className="modal-body py-0">
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <button
                                      type="button"
                                      className="btn btn-light"
                                      data-toggle="modal"
                                      style={{
                                        backgroundColor: "#2a4d85",
                                        color: "#fff",

                                        textAlign: "center",
                                      }}
                                      data-target="#modal_scrollable-1"
                                    >
                                      <span>Rasmiy vazifalar</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="rahbariyat-card bg-white mb-2">
                            <div className="card-body body-elements">
                              <div className="img d-flex align-content-center justify-content-center">
                                <img src="../images/person.jpg" alt="" />
                              </div>
                              <div className="table-responsive">
                                <div className="person">
                                  <div className="my-3 person-info">
                                    <h1
                                      style={{ color: "#2a4d85" }}
                                      className="fw-bold text-uppercase"
                                    >
                                      Raxmatov Keldiyor Kenja o'g'li
                                    </h1>

                                    <p
                                      style={{ color: "#2a4d85" }}
                                      className="fw-bold text-uppercase"
                                    >
                                      Viloyat hokimining moliya-iqtisodiyot va
                                      kambag'allikni qisqartirish masalalari
                                      bo'yicha birinch o'rinbosari
                                    </p>
                                  </div>

                                  <div className="table-responsive">
                                    <table className="table table-sm">
                                      <tbody
                                        className="text-uppercase"
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: 500,
                                        }}
                                      >
                                        <tr>
                                          <td>Tug'ilgan yili:</td>
                                          <td>20.11.1969</td>
                                        </tr>
                                        <tr>
                                          <td>Tug'ilgan joyi:</td>
                                          <td>G'ijduvon tumani</td>
                                        </tr>
                                        <tr>
                                          <td>Millati:</td>
                                          <td>O'zbek</td>
                                        </tr>
                                        <tr>
                                          <td>Ma'lumoti:</td>
                                          <td>Oliy</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>

                                  <div className="modals d-flex align-content-center justify-content-lg-start mt-4">
                                    <div
                                      id="modal_scrollable"
                                      className="modal fade"
                                      tabindex="-1"
                                      aria-hidden="true"
                                      style={{ display: "none" }}
                                    >
                                      <div className="modal-dialog modal-dialog-scrollable">
                                        <div className="modal-content">
                                          <div className="modal-header pb-3">
                                            {/* <!-- <h5 className="modal-title">Scrollable modal</h5> --> */}
                                            <button
                                              type="button"
                                              className="close"
                                              data-dismiss="modal"
                                            >
                                              ×
                                            </button>
                                          </div>

                                          <div className="modal-body py-0">
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <button
                                      type="button"
                                      className="btn mr-1"
                                      data-toggle="modal"
                                      style={{
                                        backgroundColor: "#2a4d85",
                                        color: "#fff",

                                        textAlign: "center",
                                      }}
                                      data-target="#modal_scrollable"
                                    >
                                      <span>Qo'shimcha ma'lumotlar</span>
                                    </button>

                                    {/* <!------- MODAL-2 ------> */}
                                    <div
                                      id="modal_scrollable-1"
                                      className="modal fade"
                                      tabindex="-1"
                                      aria-hidden="true"
                                      style={{ display: "none" }}
                                    >
                                      <div className="modal-dialog modal-dialog-scrollable">
                                        <div className="modal-content">
                                          <div className="modal-header pb-3">
                                            {/* <!-- <h5 className="modal-title">Scrollable modal</h5> --> */}
                                            <button
                                              type="button"
                                              className="close"
                                              data-dismiss="modal"
                                            >
                                              ×
                                            </button>
                                          </div>

                                          <div className="modal-body py-0">
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                            <p>
                                              Cras mattis consectetur purus sit
                                              amet fermentum. Cras justo odio,
                                              dapibus ac facilisis in, egestas
                                              eget quam. Morbi leo risus, porta
                                              ac consectetur ac, vestibulum at
                                              eros.
                                            </p>
                                            <p>
                                              Praesent commodo cursus magna, vel
                                              scelerisque nisl consectetur et.
                                              Vivamus sagittis lacus vel augue
                                              laoreet rutrum faucibus dolor
                                              auctor.
                                            </p>
                                            <p>
                                              Aenean lacinia bibendum nulla sed
                                              consectetur. Praesent commodo
                                              cursus magna, vel scelerisque nisl
                                              consectetur et. Donec sed odio
                                              dui. Donec ullamcorper nulla non
                                              metus auctor fringilla.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <button
                                      type="button"
                                      className="btn btn-light"
                                      data-toggle="modal"
                                      style={{
                                        backgroundColor: "#2a4d85",
                                        color: "#fff",

                                        textAlign: "center",
                                      }}
                                      data-target="#modal_scrollable-1"
                                    >
                                      <span>Rasmiy vazifalar</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-accordion">
          <div
            className="card-group-control card-group-control-left"
            id="accordion-control-1"
          >
            <div className="card">
              <div
                className="card-header p-2"
                style={{ backgroundColor: "#2a4d85" }}
              >
                <h4 className="card-title">
                  <a
                    data-toggle="collapse"
                    style={{ fontSize: "1.125rem" }}
                    className="text-body collapsed text-uppercase"
                    href="#accordion-control-group-2"
                    aria-expanded="false"
                  >
                    Xalq deputatlari viloyat kengashi
                  </a>
                </h4>
              </div>

              <div
                id="accordion-control-group-2"
                className="collapse px-2"
                data-parent="#accordion-control-1"
              >
                <div className="card-body mt-3">
                  <div
                    className="card-group-control card-group-control-left"
                    id="sub-accordion-control-1"
                  >
                    <div className="card">
                      <div
                        className="card-header p-2"
                        style={{ backgroundColor: "#2a4d85", color: "#fff" }}
                      >
                        <h4 className="card-title">
                          <a
                            data-toggle="collapse"
                            style={{ fontSize: "1.125rem" }}
                            className="text-body collapsed sub-link text-uppercase"
                            href="#sub-accordion-control-group-1"
                            aria-expanded="false"
                          >
                            Deputat
                          </a>
                        </h4>
                      </div>

                      <div
                        id="sub-accordion-control-group-1"
                        className="collapse"
                        data-parent="#sub-accordion-control-1"
                      >
                        <div className="card-body p-2">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Minus, aperiam officia assumenda ipsum, ad nobis
                          earum molestiae magnam expedita veritatis deleniti! A
                          praesentium repellendus, vitae tenetur, blanditiis
                          placeat reprehenderit ipsum enim nobis ut, nostrum
                          harum doloremque illo ad quisquam dolores in quo natus
                          quam? Quas ab alias facere deserunt voluptatum magni
                          ipsa quidem, eos aperiam molestiae corporis temporibus
                          quibusdam laborum placeat cum nam minus accusamus quod
                          deleniti? Beatae hic corrupti fugit deserunt accusamus
                          esse illum modi? Sed labore tenetur praesentium ad
                          quia expedita in itaque dolore vitae impedit, odio qui
                          reiciendis debitis nam! Quaerat numquam aspernatur
                          corrupti excepturi officia impedit nostrum quisquam
                          veritatis sint quam, debitis magnam autem minima,
                          facilis obcaecati libero eius non temporibus, cum
                          enim! Aut, eum nobis voluptates earum eligendi nostrum
                          accusantium consequatur quis non perferendis cum
                          repudiandae deleniti reiciendis ipsam error veniam a.
                          Culpa ab eaque sunt quaerat modi? Nisi sunt eos
                          sapiente quo maiores consequatur aut atque reiciendis
                          veritatis quas modi soluta, quasi tempora aliquid?
                          Modi, totam provident recusandae molestiae eaque
                          sapiente obcaecati iusto sunt, rem similique corporis
                          error autem. Rerum ipsum, nobis voluptate quo sint
                          accusamus distinctio, eligendi natus dolores, vel quam
                          nihil dolorum officia. Perspiciatis delectus cumque
                          facere repudiandae quod omnis quidem ipsum?
                        </div>
                      </div>
                    </div>

                    <div className="card">
                      <div
                        className="card-header p-2"
                        style={{ backgroundColor: "#2a4d85", color: "#fff" }}
                      >
                        <h4 className="card-title">
                          <a
                            className="text-body collapsed sub-link text-uppercase"
                            style={{ fontSize: "1.125rem" }}
                            data-toggle="collapse"
                            href="#sub-accordion-control-group--2"
                            aria-expanded="false"
                          >
                            Deputatlar ro'yxati
                          </a>
                        </h4>
                      </div>

                      <div
                        id="sub-accordion-control-group--2"
                        className="collapse"
                        data-parent="#sub-accordion-control"
                      >
                        <div className="card-body p-2">
                          <div className="card">
                            <div
                              className="card-header p-2"
                              style={{
                                backgroundColor: "#2a4d85",
                                color: "#fff",
                              }}
                            >
                              <h4 className="card-title">
                                <a
                                  className="text-body collapsed sub-link text-uppercase"
                                  style={{ fontSize: "1.125rem" }}
                                  data-toggle="collapse"
                                  href="#sub-accordion-control-group--4"
                                  aria-expanded="false"
                                >
                                  Buxoro shahar
                                </a>
                              </h4>
                            </div>

                            <div
                              id="sub-accordion-control-group--4"
                              className="collapse"
                              data-parent="#sub-accordion-control"
                            >
                              <div className="card-body body-elements">
                                <div className="img d-flex align-content-center justify-content-center">
                                  <img src="../images/person.jpg" alt="" />
                                </div>
                                <div className="table-responsive">
                                  <div className="person">
                                    <div className="my-3 person-info">
                                      <h1
                                        style={{ color: "#2a4d85" }}
                                        className="fw-bold text-uppercase"
                                      >
                                        Raxmatov Keldiyor Kenja o'g'li
                                      </h1>

                                      <p
                                        style={{ color: "#2a4d85" }}
                                        className="fw-bold text-uppercase"
                                      >
                                        Viloyat hokimining moliya-iqtisodiyot va
                                        kambag'allikni qisqartirish masalalari
                                        bo'yicha birinch o'rinbosari
                                      </p>
                                    </div>

                                    <div className="table-responsive">
                                      <table className="table table-sm">
                                        <tbody
                                          className="text-uppercase"
                                          style={{
                                            fontSize: "18px",
                                            fontWeight: 500,
                                          }}
                                        >
                                          <tr>
                                            <td>Tug'ilgan yili:</td>
                                            <td>20.11.1969</td>
                                          </tr>
                                          <tr>
                                            <td>Tug'ilgan joyi:</td>
                                            <td>G'ijduvon tumani</td>
                                          </tr>
                                          <tr>
                                            <td>Millati:</td>
                                            <td>O'zbek</td>
                                          </tr>
                                          <tr>
                                            <td>Ma'lumoti:</td>
                                            <td>Oliy</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                    <div className="modals d-flex align-content-center justify-content-lg-start mt-4">
                                      <div
                                        id="modal_scrollable--1"
                                        className="modal fade"
                                        tabindex="-1"
                                        aria-hidden="true"
                                        style={{ display: "none" }}
                                      >
                                        <div className="modal-dialog modal-dialog-scrollable">
                                          <div className="modal-content">
                                            <div className="modal-header pb-2 mb-2 bg-primary text-light text-uppercase">
                                              <h5 className="modal-title ">
                                                Qo'shimcha ma'lumotlar
                                              </h5>
                                              <button
                                                type="button"
                                                className="close text-light fs-2"
                                                data-dismiss="modal"
                                              >
                                                ×
                                              </button>
                                            </div>

                                            <div className="modal-body py-0">
                                              <p>
                                                Cras mattis consectetur purus
                                                sit amet fermentum. Cras justo
                                                odio, dapibus ac facilisis in,
                                                egestas eget quam. Morbi leo
                                                risus, porta ac consectetur ac,
                                                vestibulum at eros.
                                              </p>
                                              <p>
                                                Praesent commodo cursus magna,
                                                vel scelerisque nisl consectetur
                                                et. Vivamus sagittis lacus vel
                                                augue laoreet rutrum faucibus
                                                dolor auctor.
                                              </p>
                                              <p>
                                                Aenean lacinia bibendum nulla
                                                sed consectetur. Praesent
                                                commodo cursus magna, vel
                                                scelerisque nisl consectetur et.
                                                Donec sed odio dui. Donec
                                                ullamcorper nulla non metus
                                                auctor fringilla.
                                              </p>
                                              <p>
                                                Cras mattis consectetur purus
                                                sit amet fermentum. Cras justo
                                                odio, dapibus ac facilisis in,
                                                egestas eget quam. Morbi leo
                                                risus, porta ac consectetur ac,
                                                vestibulum at eros.
                                              </p>
                                              <p>
                                                Praesent commodo cursus magna,
                                                vel scelerisque nisl consectetur
                                                et. Vivamus sagittis lacus vel
                                                augue laoreet rutrum faucibus
                                                dolor auctor.
                                              </p>
                                              <p>
                                                Aenean lacinia bibendum nulla
                                                sed consectetur. Praesent
                                                commodo cursus magna, vel
                                                scelerisque nisl consectetur et.
                                                Donec sed odio dui. Donec
                                                ullamcorper nulla non metus
                                                auctor fringilla.
                                              </p>
                                              <p>
                                                Cras mattis consectetur purus
                                                sit amet fermentum. Cras justo
                                                odio, dapibus ac facilisis in,
                                                egestas eget quam. Morbi leo
                                                risus, porta ac consectetur ac,
                                                vestibulum at eros.
                                              </p>
                                              <p>
                                                Praesent commodo cursus magna,
                                                vel scelerisque nisl consectetur
                                                et. Vivamus sagittis lacus vel
                                                augue laoreet rutrum faucibus
                                                dolor auctor.
                                              </p>
                                              <p>
                                                Aenean lacinia bibendum nulla
                                                sed consectetur. Praesent
                                                commodo cursus magna, vel
                                                scelerisque nisl consectetur et.
                                                Donec sed odio dui. Donec
                                                ullamcorper nulla non metus
                                                auctor fringilla.
                                              </p>
                                              <p>
                                                Cras mattis consectetur purus
                                                sit amet fermentum. Cras justo
                                                odio, dapibus ac facilisis in,
                                                egestas eget quam. Morbi leo
                                                risus, porta ac consectetur ac,
                                                vestibulum at eros.
                                              </p>
                                              <p>
                                                Praesent commodo cursus magna,
                                                vel scelerisque nisl consectetur
                                                et. Vivamus sagittis lacus vel
                                                augue laoreet rutrum faucibus
                                                dolor auctor.
                                              </p>
                                              <p>
                                                Aenean lacinia bibendum nulla
                                                sed consectetur. Praesent
                                                commodo cursus magna, vel
                                                scelerisque nisl consectetur et.
                                                Donec sed odio dui. Donec
                                                ullamcorper nulla non metus
                                                auctor fringilla.
                                              </p>
                                              <p>
                                                Cras mattis consectetur purus
                                                sit amet fermentum. Cras justo
                                                odio, dapibus ac facilisis in,
                                                egestas eget quam. Morbi leo
                                                risus, porta ac consectetur ac,
                                                vestibulum at eros.
                                              </p>
                                              <p>
                                                Praesent commodo cursus magna,
                                                vel scelerisque nisl consectetur
                                                et. Vivamus sagittis lacus vel
                                                augue laoreet rutrum faucibus
                                                dolor auctor.
                                              </p>
                                              <p>
                                                Aenean lacinia bibendum nulla
                                                sed consectetur. Praesent
                                                commodo cursus magna, vel
                                                scelerisque nisl consectetur et.
                                                Donec sed odio dui. Donec
                                                ullamcorper nulla non metus
                                                auctor fringilla.
                                              </p>
                                              <p>
                                                Cras mattis consectetur purus
                                                sit amet fermentum. Cras justo
                                                odio, dapibus ac facilisis in,
                                                egestas eget quam. Morbi leo
                                                risus, porta ac consectetur ac,
                                                vestibulum at eros.
                                              </p>
                                              <p>
                                                Praesent commodo cursus magna,
                                                vel scelerisque nisl consectetur
                                                et. Vivamus sagittis lacus vel
                                                augue laoreet rutrum faucibus
                                                dolor auctor.
                                              </p>
                                              <p>
                                                Aenean lacinia bibendum nulla
                                                sed consectetur. Praesent
                                                commodo cursus magna, vel
                                                scelerisque nisl consectetur et.
                                                Donec sed odio dui. Donec
                                                ullamcorper nulla non metus
                                                auctor fringilla.
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <button
                                        type="button"
                                        className="btn mr-1"
                                        data-toggle="modal"
                                        style={{
                                          backgroundColor: "#2a4d85",
                                          color: "#fff",

                                          textAlign: "center",
                                        }}
                                        data-target="#modal_scrollable--1"
                                      >
                                        <span>Qo'shimcha ma'lumotlar</span>
                                      </button>

                                      {/* <!------- MODAL-2 ------> */}
                                      <div
                                        id="modal_scrollable--2"
                                        className="modal fade"
                                        tabindex="-1"
                                        aria-hidden="true"
                                        style={{ display: "none" }}
                                      >
                                        <div className="modal-dialog modal-dialog-scrollable">
                                          <div className="modal-content">
                                            <div className="modal-header pb-2 mb-2 bg-primary text-light text-uppercase">
                                              <h5 className="modal-title ">
                                                Rasmiy vazifalar
                                              </h5>
                                              <button
                                                type="button"
                                                className="close text-light fs-2"
                                                data-dismiss="modal"
                                              >
                                                ×
                                              </button>
                                            </div>

                                            <div className="modal-body py-0">
                                              <p>
                                                Cras mattis consectetur purus
                                                sit amet fermentum. Cras justo
                                                odio, dapibus ac facilisis in,
                                                egestas eget quam. Morbi leo
                                                risus, porta ac consectetur ac,
                                                vestibulum at eros.
                                              </p>
                                              <p>
                                                Praesent commodo cursus magna,
                                                vel scelerisque nisl consectetur
                                                et. Vivamus sagittis lacus vel
                                                augue laoreet rutrum faucibus
                                                dolor auctor.
                                              </p>
                                              <p>
                                                Aenean lacinia bibendum nulla
                                                sed consectetur. Praesent
                                                commodo cursus magna, vel
                                                scelerisque nisl consectetur et.
                                                Donec sed odio dui. Donec
                                                ullamcorper nulla non metus
                                                auctor fringilla.
                                              </p>
                                              <p>
                                                Cras mattis consectetur purus
                                                sit amet fermentum. Cras justo
                                                odio, dapibus ac facilisis in,
                                                egestas eget quam. Morbi leo
                                                risus, porta ac consectetur ac,
                                                vestibulum at eros.
                                              </p>
                                              <p>
                                                Praesent commodo cursus magna,
                                                vel scelerisque nisl consectetur
                                                et. Vivamus sagittis lacus vel
                                                augue laoreet rutrum faucibus
                                                dolor auctor.
                                              </p>
                                              <p>
                                                Aenean lacinia bibendum nulla
                                                sed consectetur. Praesent
                                                commodo cursus magna, vel
                                                scelerisque nisl consectetur et.
                                                Donec sed odio dui. Donec
                                                ullamcorper nulla non metus
                                                auctor fringilla.
                                              </p>
                                              <p>
                                                Cras mattis consectetur purus
                                                sit amet fermentum. Cras justo
                                                odio, dapibus ac facilisis in,
                                                egestas eget quam. Morbi leo
                                                risus, porta ac consectetur ac,
                                                vestibulum at eros.
                                              </p>
                                              <p>
                                                Praesent commodo cursus magna,
                                                vel scelerisque nisl consectetur
                                                et. Vivamus sagittis lacus vel
                                                augue laoreet rutrum faucibus
                                                dolor auctor.
                                              </p>
                                              <p>
                                                Aenean lacinia bibendum nulla
                                                sed consectetur. Praesent
                                                commodo cursus magna, vel
                                                scelerisque nisl consectetur et.
                                                Donec sed odio dui. Donec
                                                ullamcorper nulla non metus
                                                auctor fringilla.
                                              </p>
                                              <p>
                                                Cras mattis consectetur purus
                                                sit amet fermentum. Cras justo
                                                odio, dapibus ac facilisis in,
                                                egestas eget quam. Morbi leo
                                                risus, porta ac consectetur ac,
                                                vestibulum at eros.
                                              </p>
                                              <p>
                                                Praesent commodo cursus magna,
                                                vel scelerisque nisl consectetur
                                                et. Vivamus sagittis lacus vel
                                                augue laoreet rutrum faucibus
                                                dolor auctor.
                                              </p>
                                              <p>
                                                Aenean lacinia bibendum nulla
                                                sed consectetur. Praesent
                                                commodo cursus magna, vel
                                                scelerisque nisl consectetur et.
                                                Donec sed odio dui. Donec
                                                ullamcorper nulla non metus
                                                auctor fringilla.
                                              </p>
                                              <p>
                                                Cras mattis consectetur purus
                                                sit amet fermentum. Cras justo
                                                odio, dapibus ac facilisis in,
                                                egestas eget quam. Morbi leo
                                                risus, porta ac consectetur ac,
                                                vestibulum at eros.
                                              </p>
                                              <p>
                                                Praesent commodo cursus magna,
                                                vel scelerisque nisl consectetur
                                                et. Vivamus sagittis lacus vel
                                                augue laoreet rutrum faucibus
                                                dolor auctor.
                                              </p>
                                              <p>
                                                Aenean lacinia bibendum nulla
                                                sed consectetur. Praesent
                                                commodo cursus magna, vel
                                                scelerisque nisl consectetur et.
                                                Donec sed odio dui. Donec
                                                ullamcorper nulla non metus
                                                auctor fringilla.
                                              </p>
                                              <p>
                                                Cras mattis consectetur purus
                                                sit amet fermentum. Cras justo
                                                odio, dapibus ac facilisis in,
                                                egestas eget quam. Morbi leo
                                                risus, porta ac consectetur ac,
                                                vestibulum at eros.
                                              </p>
                                              <p>
                                                Praesent commodo cursus magna,
                                                vel scelerisque nisl consectetur
                                                et. Vivamus sagittis lacus vel
                                                augue laoreet rutrum faucibus
                                                dolor auctor.
                                              </p>
                                              <p>
                                                Aenean lacinia bibendum nulla
                                                sed consectetur. Praesent
                                                commodo cursus magna, vel
                                                scelerisque nisl consectetur et.
                                                Donec sed odio dui. Donec
                                                ullamcorper nulla non metus
                                                auctor fringilla.
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <button
                                        type="button"
                                        className="btn btn-light"
                                        data-toggle="modal"
                                        style={{
                                          backgroundColor: "#2a4d85",
                                          color: "#fff",

                                          textAlign: "center",
                                        }}
                                        data-target="#modal_scrollable--2"
                                      >
                                        <span>Rasmiy vazifalar</span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default XalqDeputatlariPage;
