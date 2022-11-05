import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HorizontalInfo from '../../components/horizontalInfo/HorizontalInfo';
import { axiosInstance } from '../../config';

const UserInformation = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [size, setSize] = useState(12);
  const [totalElements, setTotalElements] = useState(0)
  const [data, setData] = useState([])

  const { subMenuId } = useParams()

  useEffect(() => {
    axiosInstance.get(`information/getBySubmenuId?size=${size}&page=${currentPage}&code=${subMenuId}`).then(res => {
      console.log(res.data);
      setData(res.data.content)
      setTotalElements(res.data?.totalElements)
    })
  }, [currentPage, size, subMenuId])

  const handlePageClick = (e) => {
    setCurrentPage(e.selected)
    console.log(1);
    axiosInstance.get(`information/getBySubmenuId?size=${size}&page=${e.selected}&code=${subMenuId}`).then(res => {
      console.log(res.data);
      setData(res.data.content)
      setTotalElements(res.data?.totalElements)
    })
  }

  return (
    <>
      <HorizontalInfo
        data={data}
        totalElements={totalElements}
        currentPage={currentPage}
        size={size}
        handlePageClick={handlePageClick}
      />
    </>
  );
}

export default React.memo(UserInformation);
