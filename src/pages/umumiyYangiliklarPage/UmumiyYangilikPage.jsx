import React, { useRef, useState } from "react";
import HorizontalYangilikCard from "../../components/horizontalYangilikCard/HorizontalYangilikCard";
import VerticalYangilikCard from "../../components/verticalYangilikCard/VerticalYangilikCard";

export default function UmumiyYangilikPage() {
  // const [card, setCard] = useState(false);
  const sectionVerticalRef = useRef();
  const sectionHorizontalRef = useRef();

  const newsData = [{ title: "wqwq" }, { title: "wqwq" }];

  return (
    <>
      <HorizontalYangilikCard
        sectionVerticalRef={sectionVerticalRef}
        sectionHorizontalRef={sectionHorizontalRef}
      />
      <VerticalYangilikCard
        sectionVerticalRef={sectionVerticalRef}
        sectionHorizontalRef={sectionHorizontalRef}
      />
    </>
  );
}
