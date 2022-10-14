import React, { useState } from "react";
import HorizontalYangilikCard from "../../components/horizontalYangilikCard/HorizontalYangilikCard";

export default function UmumiyYangilikPage() {
  const newsData = [{ title: "wqwq" }, { title: "212121" }];
  const [horiz, setHoriz] = useState(true);

  return (
    <>
      
        {newsData.map((item) => {
          return horiz ? (
            <HorizontalYangilikCard news={item} />
          ) : (
            <HorizontalYangilikCard news={item} />
          );
        })}
      
    </>
  );
}
