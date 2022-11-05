import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import CarouselNews from '../../components/carousel/CarouselNews';
import parse from "html-react-parser"

const DetailNews = () => {
  const { id } = useParams()
  console.log(id);
  const { state } = useLocation();
  console.log(state);
  return (
    <Wrapper className='mt-3'>
      <div className="card mx-1 p-2" style={{ minHeight: "100vh" }}>
        <div className="card-header pt-0">
          <h3 className="text-secondary m-0 p-0"
            style={{ fontWeight: "500", fontSize: "1.5rem", textTransform: "uppercase", textAlign :"justify" }}>
            {state.uzTitle}
          </h3>
          <hr />
        </div>
        <CarouselNews state={state?.generatedNames} />

        <p className='detail-p'>{parse(state.uzBody)}</p>
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
