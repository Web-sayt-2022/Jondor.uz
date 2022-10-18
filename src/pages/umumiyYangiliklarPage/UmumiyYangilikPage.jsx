import React, { useState } from "react";
import HorizontalYangilikCard from "../../components/horizontalYangilikCard/HorizontalYangilikCard";
import VerticalYangilikCard from "../../components/verticalYangilikCard/VerticalYangilikCard";

export default function UmumiyYangilikPage() {
  const newsData = [{ title: "wqwq" }, { title: "wqwq" }];

  return (
    <>
      <VerticalYangilikCard />
      {/* <HorizontalYangilikCard />; */}
    </>
  );
}
