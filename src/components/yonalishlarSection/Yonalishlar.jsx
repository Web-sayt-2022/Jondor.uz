import React from "react";
import yonalish from "../../images/yunalish.jpg";
import styled from "styled-components";

const Yonalishlar = () => {
  return (
    <Wrapper>
       <section className="yunalishlar-section bg-light">
      <div className="px-2">
        <div
          className=" p-2 rounded text-light bg-primary"
          style={{ fontSize: "1.125rem", textTransform: "uppercase" }}
        >
          Yo'nalishlar
        </div>

        <div className="boxes">
          <div style={{ width: "100%" }}>
            <div className="position-relative rounded box">
              <img src={yonalish} alt="" className="image" />
              <div className="yunalish-div">
                <p className="text-light p-0 m-0 yunalish-name">Iqtisod </p>
              </div>
            </div>
          </div>

          <div style={{ width: "100%" }}>
            <div className="position-relative rounded box">
              <img src={yonalish} alt="" className="image" />
              <div className="yunalish-div">
                <p className="text-light p-0 m-0 yunalish-name">Iqtisod </p>
              </div>
            </div>
          </div>

          <div style={{ width: "100%" }}>
            <div className="position-relative rounded box">
              <img src={yonalish} alt="" className="image" />
              <div className="yunalish-div">
                <p className="text-light p-0 m-0 yunalish-name">Iqtisod </p>
              </div>
            </div>
          </div>

          <div style={{ width: "100%" }}>
            <div className="position-relative rounded box">
              <img src={yonalish} alt="" className="image" />
              <div className="yunalish-div">
                <p className="text-light p-0 m-0 yunalish-name">Iqtisod </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Wrapper>
   
  );
};

export default Yonalishlar;

const Wrapper = styled.div`
  .yunalishlar-section .boxes {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1.5rem;
	margin-top: 1rem;
}

@media(max-width: 1200px) {
	.yunalishlar-section .boxes {
			grid-template-columns: repeat(2, 1fr);
	}
}

@media(max-width: 768px) {
	.yunalishlar-section .boxes {
			grid-template-columns: 1fr;
	}
}

.yunalishlar-section .box {
	width: 100%;
	height: 22.5rem;
	overflow: hidden;
	transition: .5s !important;
	cursor: pointer;
}

.yunalishlar-section .image {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.yunalishlar-section .box:hover {
	box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}

.yunalishlar-section .box:hover .yunalish-div {
	height: 100%;
}

.yunalishlar-section .yunalish-div {
	width: 100%;
	height: 4rem;
	position: absolute;
	bottom: 0;
	margin: 0;
	background-color: rgb(42, 77, 133, 0.6);
	display: flex;
	justify-content: center;
	align-items: center;
	transition: .5s !important;
}

.yunalishlar-section .yunalish-name {
	max-height: 4rem;
	font-size: 1.5rem;
	font-weight: 600;
	text-align: center;
	text-transform: uppercase;
}
`
