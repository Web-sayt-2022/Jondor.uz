import React from "react";
import styled from "styled-components";
import sektor1Image from "../../images/sektor-1.png";
const DavlatHokimiyati = () => {
  return (
    <Wrapper>
      <section className="davlat-hokimiyati-section bg-light ">
        <div className="davlat-sektor px-2 mt-0">
          <div>
            <div
              className="p-2 mt-0 text-light rounded bg-primary"
              style={{ fontSize: "1.125rem", textTransform: "uppercase" }}
            >
              Sektorlar
            </div>

            <div className="sectorlar mt-2">
              <div className="sektor">
                <div className="d-flex justify-content-center align-items-center sektor-img">
                  <img src={sektor1Image} alt="" />
                </div>
                <h3 className="text-light bg-secondary name">SEKTOR-1</h3>
              </div>

              <div className="sektor">
                <div className="d-flex justify-content-center align-items-center sektor-img">
                  <img src={sektor1Image} alt="" />
                </div>
                <h3 className="text-light bg-secondary name">SEKTOR-2</h3>
              </div>

              <div className="sektor">
                <div className="d-flex justify-content-center align-items-center sektor-img">
                  <img src={sektor1Image} alt="" />
                </div>
                <h3 className="text-light bg-secondary name">SEKTOR-3</h3>
              </div>

              <div className="sektor">
                <div className="d-flex justify-content-center align-items-center sektor-img">
                  <img src={sektor1Image} alt="" />
                </div>
                <h3 className="text-light bg-secondary name">SEKTOR-4</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>

  );
};

export default DavlatHokimiyati;

const Wrapper = styled.div`
.davlat-sektor {
	display: grid;
	grid-template-columns: 1fr;
	gap: 0.5rem;
}

.davlat-sektor>div {
	min-height: 22.5rem;
}

@media(max-width: 1200px) {
	.davlat-sektor {
			grid-template-columns: 1fr;
	}
}

@media(max-width: 768px) {
	.davlat-sektor {
			grid-template-columns: 1fr;
			grid-template-rows: 24rem auto;
	}
}


.boxes {
	overflow: hidden;
	height: 19.75rem;
	background-color: white;
}

.box {
	width: 6.25rem;
	height: 5rem;
	display: flex;
	justify-content: center;
}

.image {
	width: 5rem;
	height: 5rem;
	object-fit: cover;
}

span {
	text-transform: uppercase;
	font-size: 1rem;
}

.sectorlar {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-auto-rows: 18.75;
	gap: 0.5rem;
}

.sectorlar .sektor {
	background-color: white;
	border: 1px solid #F4F4F4;
	transition: .5s !important;
	cursor: pointer;
}

.sectorlar .sektor h3 {
	font-size: 1.25rem;
	margin-bottom: 0;
}

.sektor:hover {
	box-shadow: rgba(0, 0, 0, 0.19) 0px 0.625rem 1.25rem, rgba(0, 0, 0, 0.23) 0px 0.5rem 0.5rem;
}

.sektor-img {
	width: 100%;
	height: 16.8rem;
	transition: .5s !important;
}

.sektor-img:hover {
	transform: scale(1.2);
}

.sektor-img img {
	width: 11.25rem;
	height: 11.25rem;
	object-fit: cover;
}

.name {
	height: 3.125rem;
	font-size: 1.5rem;
	line-height: 3.125rem;
	text-align: center;
	text-transform: uppercase;
}

@media(max-width: 1200px) {
	.sectorlar {
			grid-template-columns: repeat(2, 1fr);
	}
}

@media(max-width: 768px) {
	.boxes {
			height: 20rem;
	}

	.sectorlar {
			grid-template-columns: 1fr;
	}
}


.splide__slide {
	display: flex;
	align-items: center;
	background-color: #FFF;
	cursor: pointer;
	height: 3rem;
}


.splide__slide img {
	width: 4rem;
	height: 4rem;
	object-fit: cover;
}

.my-slider-progress-bar {
	background: greenyellow;
	height: 2px;
	transition: width 400ms ease !important;
	width: 0;
}

#image-carousel button {
	display: none;
}

#image-carousel a {
	text-decoration: none;
	text-transform: uppercase;
	color: #FFF !important;
	font-size: 1.25rem;
	margin-left: 1rem;
}

.splide__slide {
	height: 4.6rem !important;
	background-color: #2A4D85;
	margin-bottom: 0.5rem;
	border: 1px solid #2A4D85;
}

.splide__slide .img-div {
	width: 5rem;
	height: 100%;
	background-color: #FFF;
	display: flex;
	justify-content: center;
	margin-bottom: 0;
}

.vertical-carousel {
	width: 100%;
}

`
