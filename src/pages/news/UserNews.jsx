import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HorizontalYangilikCard from '../../components/horizontalYangilikCard/HorizontalYangilikCard';
import VerticalYangilikCard from '../../components/verticalYangilikCard/VerticalYangilikCard';
import { axiosInstance } from '../../config';

const UserNews = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [size, setSize] = useState(12);
  const [totalElements, setTotalElements] = useState(0)
  const [toggleHandler, setToggleHandler] = useState(true)
  const [data, setData] = useState([])

  const { subMenuId } = useParams()

  useEffect(() => {
    axiosInstance.get(`news/getBySubmenuId?size=${size}&page=${currentPage}&code=${subMenuId}`).then(res => {
      console.log(res.data);
      setData(res.data.content)
      setTotalElements(res.data?.totalElements)
    })
  }, [currentPage, size, subMenuId])

  const handlePageClick = (e) => {
    setCurrentPage(e.selected)
    console.log(1);
    axiosInstance.get(`news/getBySubmenuId?size=${size}&page=${e.selected}&code=${subMenuId}`).then(res => {
      console.log(res.data);
      setData(res.data.content)
      setTotalElements(res.data?.totalElements)
    })
  }

  return (
    <>
      {
        toggleHandler ? (
          <VerticalYangilikCard
            data={data}
            totalElements={totalElements}
            currentPage={currentPage}
            size={size}
            setToggleHandler={setToggleHandler}
            handlePageClick={handlePageClick}
          />
        ) : (
          <HorizontalYangilikCard
            data={data}
            totalElements={totalElements}
            currentPage={currentPage}
            size={size}
            setToggleHandler={setToggleHandler}
            handlePageClick={handlePageClick}
          />
        )
      }
    </>
  );
}

export default React.memo(UserNews);
