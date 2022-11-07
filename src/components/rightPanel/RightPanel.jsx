import React from "react";
import CarouselNews from "../carousel/CarouselNews";
import { useLocation } from "react-router-dom";
import "./rightPanel.css";
import parse from "html-react-parser";
import styled from "styled-components";

const RightPanel = () => {
  const { state } = useLocation();
  console.log(state);
  // console.log(state);

  return (
    <Wrapper>
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
                <a href="#1" className="text-primary font-weight-semybold ml-1 cursor-pointer">
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
              </div>
            </div>

            <div className="card-footer p-0">
              <ul className="list-inline mb-0 footer-menu px-3">
                <li className="list-inline-item">
                  <a href="#1" className="text-body">
                    <i className="icon-eye4 mr-2"></i>438
                  </a>
                </li>

                <li className="list-inline-item">
                  Manba: <a href="https://kun.uz/">{state.source}</a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>

  );
};

export default RightPanel;

const Wrapper = styled.div`
  .right-panel {
    width: calc(100% - 300px);
    background-color: #eee;
  }

  .footer-menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .footer-menu li {
    padding: 0.625rem 0;
  }

  .footer-menu li:last-child {
    margin-left: auto;
  }

`
