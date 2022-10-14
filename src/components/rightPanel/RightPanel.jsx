import React from "react";
import CarouselNews from "../carousel/CarouselNews";
import { useLocation } from "react-router-dom";
import "./rightPanel.css";
import parse from "html-react-parser";

const RightPanel = () => {
  const { state } = useLocation();
  console.log(state);
  // console.log(state);

  return (
    <section className="right-panel mt-4">
      <div
        className="p-2 text-light bg-primary mb-2"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "1.125rem", textTransform: "uppercase" }}>
          Yangiliklar
        </span>
        {/* <i
          className="icon-printer2"
          style={{ color: "#FFF", fontSize: "1.5rem", cursor: "pointer" }}
          onclick="printDiv('printarea')"
        ></i> */}
      </div>

      <div className="col-xl-12 p-0" id="printarea">
        <div className="card">
          <div className="card-body">
            <h1 className="font-weight-semibold  w-100">{state?.source}</h1>
            <hr />
            <div className="mb-2">
              <span className=" font-weight-semybold">
                {new Date(state?.createdAt).toLocaleDateString()} |
              </span>
              <a className="text-primary font-weight-semybold ml-1 cursor-pointer">
                {state?.sphere?.uzName}
              </a>
            </div>
            <div className="mb-4">
              <div className="mb-3 text-center">
                <CarouselNews state={state} />
              </div>

              <div className="mb-3" style={{ marginTop: "100px" }}>
                <p>{parse(state?.uzBody)}</p>
              </div>

              {/* <div className="card card-body bg-light rounded-left-0 border-left-3 border-left-warning">
                <blockquote className="blockquote d-flex mb-0">
                  <div className="mr-3">
                    <img
                      className="rounded-circle"
                      src="./images/photo_2022-07-18_00-58-52.jpg"
                      width="46"
                      height="46"
                      alt=""
                    />
                  </div>

                  <div>
                    <p className="mb-2">
                      Quvonchbek Jovliyev, KASABA uyushmasi raisi
                    </p>
                    <footer className="blockquote-footer">
                      Muammolarni nos, sigart chakish bilan hal qilib bo'lmaydi!
                      <cite title="Source Title"></cite>
                    </footer>
                  </div>
                </blockquote>
              </div> */}
            </div>

            {/* <div className="mb-4">
              <h5 className="font-weight-semibold">
                Insipidity the sufficient discretion
              </h5>

              <p>
                Raising say express had chiefly detract demands she. Quiet led
                own cause three him. Front no party young abode state up. Saved
                he do fruit woody of to. Met defective are allowance two
                perceived listening consulted contained. It chicken oh colonel
                pressed excited suppose to shortly. He improve started no we
                manners however effects. Prospect humoured mistress to by
                proposal marianne attended. Simplicity the far admiration
                preference everything. Up help home head spot an he room in.
              </p>

              <p>
                Unpleasant nor diminution excellence apartments imprudence the
                met new. Draw part them he an to he roof only. Music leave say
                doors him. Tore bred form if sigh case as do. Staying he no
                looking if do opinion. Sentiments way understood end partiality
                and his.
              </p>
            </div>

            <div>
              <h5 className="font-weight-semibold">
                Out believe has request not how comfort evident
              </h5>

              <p className="mb-3">
                Up delight cousins we feeling minutes. Genius has looked end
                piqued spring. Down has rose feel find man. Learning day
                desirous informed expenses material returned six the. She
                enabled invited exposed him another. Reasonably conviction
                solicitude me mr at discretion reasonable. Age out full gate bed
                day lose.
              </p>

              <div className="row">
                <div className="col-lg-4">
                  <ul className="list list-unstyled">
                    <li>
                      <i className="icon-checkmark3 text-success mr-2"></i>
                      Style never met and those among great
                    </li>
                    <li>
                      <i className="icon-checkmark3 text-success mr-2"></i>
                      At no or september sportsmen
                    </li>
                    <li>
                      <i className="icon-checkmark3 text-success mr-2"></i>
                      Depending listening delivered
                    </li>
                    <li>
                      <i className="icon-checkmark3 text-success mr-2"></i>
                      Person plenty answer to exeter it
                    </li>
                  </ul>
                </div>

                <div className="col-lg-4">
                  <ul className="list list-unstyled">
                    <li>
                      <i className="icon-checkmark3 text-success mr-2"></i>
                      Law use assistance especially resolution
                    </li>
                    <li>
                      <i className="icon-checkmark3 text-success mr-2"></i>
                      Way necessary had intention happiness
                    </li>
                    <li>
                      <i className="icon-checkmark3 text-success mr-2"></i>
                      Furniture furnished or on strangers
                    </li>
                    <li>
                      <i className="icon-checkmark3 text-success mr-2"></i>
                      But why smiling man her imagine
                    </li>
                  </ul>
                </div>

                <div className="col-lg-4">
                  <ul className="list list-unstyled">
                    <li>
                      <i className="icon-checkmark3 text-success mr-2"></i>
                      Chiefly can man her out believe
                    </li>
                    <li>
                      <i className="icon-checkmark3 text-success mr-2"></i>
                      Solicitude it introduced companions
                    </li>
                    <li>
                      <i className="icon-checkmark3 text-success mr-2"></i>
                      My almost or horses period
                    </li>
                    <li>
                      <i className="icon-checkmark3 text-success mr-2"></i>
                      Motionless are six terminated man
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>

          <div className="card-footer p-0">
            <ul className="list-inline mb-0 footer-menu px-3">
              <li className="list-inline-item">
                <a href="#" className="text-body">
                  <i className="icon-eye4 mr-2"></i>438
                </a>
              </li>

              <li className="list-inline-item">
                Manba: <a href="https://kun.uz/">{state.source}</a>
              </li>

              {/* <li className="list-inline-item">
                <a className="text-primary font-weight-semybold">
                  Qo'shilgan sanasi: 13.03.2003
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightPanel;
