import React from "react";
import homiylarImg1 from "../../images/ziyonet.png";
import styled from "styled-components";

const Homiylar = () => {
  return (
    <Wrapper>
      <section className="homiylar-section bg-light">
        <div className="homiylar px-2 pb-3 owl-carousel owl-theme">
          <a href="#" className="homiy p-2">
            <img
              src={homiylarImg1}
              alt=""
              style={{
                maxWidth: "200px",
                maxHeight: "200px",
                objectFit: "cover",
              }}
            />
            <p>
              Ўзбекистон Республикаси Қонун ҳужжатлари маълумотлари миллий базаси
            </p>
          </a>
          <a href="#" className="homiy p-2">
            <img
              src={homiylarImg1}
              alt=""
              style={{
                maxWidth: "200px",
                maxHeight: "200px",
                objectFit: "cover",
              }}
            />
            <p>Коммунал хўжалиги ва уй-жой фонди портали</p>
          </a>
          <a href="#" className="homiy p-2">
            <img
              src={homiylarImg1}
              alt=""
              style={{
                maxWidth: "200px",
                maxHeight: "200px",
                objectFit: "cover",
              }}
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </a>
          <a href="#" className="homiy p-2">
            <img
              src={homiylarImg1}
              alt=""
              style={{
                maxWidth: "200px",
                maxHeight: "200px",
                objectFit: "cover",
              }}
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </a>
          <a href="#" className="homiy p-2">
            <img
              src={homiylarImg1}
              alt=""
              style={{
                maxWidth: "200px",
                maxHeight: "200px",
                objectFit: "cover",
              }}
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </a>
          <a href="#" className="homiy p-2">
            <img
              src={homiylarImg1}
              alt=""
              style={{
                maxWidth: "200px",
                maxHeight: "200px",
                objectFit: "cover",
              }}
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </a>
          <a href="#" className="homiy p-2">
            <img
              src={homiylarImg1}
              alt=""
              style={{
                maxWidth: "200px",
                maxHeight: "200px",
                objectFit: "cover",
              }}
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </a>
          <a href="#" className="homiy p-2">
            <img
              src={homiylarImg1}
              alt=""
              style={{
                maxWidth: "200px",
                maxHeight: "200px",
                objectFit: "cover",
              }}
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </a>
          <a href="#" className="homiy p-2">
            <img
              src={homiylarImg1}
              alt=""
              style={{
                maxWidth: "200px",
                maxHeight: "200px",
                objectFit: "cover",
              }}
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </a>
          <a href="#" className="homiy p-2">
            <img
              src={homiylarImg1}
              alt=""
              style={{
                maxWidth: "200px",
                maxHeight: "200px",
                objectFit: "cover",
              }}
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </a>
        </div>
      </section>
    </Wrapper>
  );
};

export default Homiylar;

const Wrapper = styled.div`
  .homiylar {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }

  .homiy {
    height: 250px;
    background-color: #f0fbff;
    color: #0074b4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    text-align: center;
    position: relative;
  }

  .homiy img {
    position: absolute;
    top: 30px;
  }

  .homiy p {
    position: absolute;
    top: 150px;
  }
`
