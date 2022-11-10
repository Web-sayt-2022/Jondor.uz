import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import CarouselNews from '../../components/carousel/CarouselNews';
import parse from "html-react-parser"

const DetailNews = () => {
  const { id } = useParams()
  const { state } = useLocation();

  return (
    <Wrapper className='mt-3'>
      <div className="card mx-1 p-2" style={{ minHeight: "100vh" }}>
        <div className="card-header pt-0">
          <h3 className="text-secondary m-0 p-0"
            style={{ fontWeight: "500", fontSize: "1.5rem", textTransform: "uppercase", textAlign: "justify" }}>
            {state.uzTitle}
          </h3>
          <hr className='my-2' />
          <div className="d-flex align-content-center mb-2">
            <h6 className="card-title font-weight-bold mr-2 pr-2" style={{ borderRight: "1px solid black" }}>
              <i className="text-primary icon-calendar3"></i>
              {state?.createdDate.substr(0, 10).split("-").reverse().join(".")}
            </h6>

            <h6 className="mr-2 pr-2">
              <a href="#1"
                className="text-primary font-weight-semybold ml-1 cursor-pointer">
                {state?.uzNewsSphereName}
              </a>
            </h6>
          </div>
        </div>
        <div className="card-body px-2">
          <CarouselNews state={state?.generatedNames} />

          <p className='detail-p px-2'>{parse(state.uzBody)}</p>
        </div>

        <div
          className="card-footer p-2 px-2 bg-white"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h6 className="mr-2">
            Manba: <a href={state?.source}>
              {state?.source}
            </a>
          </h6>

        </div>
      </div>

    </Wrapper>
  );
}

export default React.memo(DetailNews);

const Wrapper = styled.div`
  width: calc(100% - 345px) !important;

  @media(max-width: 992px) {
      width: 100% !important;
  }

  .detail-p {
    margin-top: 90px
  }
`
