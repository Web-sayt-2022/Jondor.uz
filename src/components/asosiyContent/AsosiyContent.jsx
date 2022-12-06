import React from "react";
// import Header from "../header/Header";
import YangiliklarLeftPanel from "../yangiliklarLeftPanel/YangiliklarLeftPanel";
import RightPanel from "../rightPanel/RightPanel";

import styled from "styled-components";

const AsosiyContent = () => {
  return (
    <>
      <Wrapper className="asosiy-content container-fluid">
        <div className="left-panel">
          <YangiliklarLeftPanel />
        </div>
        <RightPanel />
      </Wrapper>
    </>
  );
};

export default AsosiyContent;

const Wrapper = styled.div`
  .asosiy-content {
    display: flex;
    background-color: #eee;
  }
  
  @media(max-width: 992px) {
    .asosiy-content {
      grid-template-columns: 1fr !important;
    }

    .left-panel {
      display: none !important;
    }
  }
`



/* .asosiy-content {
  display: grid;
  grid-template-columns: 3fr 9fr;
  gap: 1rem;
}

@media (max-width: 992px) {
  .asosiy-content {
    grid-template-columns: 1fr;
  }

  .left-panel {
    display: none;
  }
}

.asosiy-content .dropdown-item.active {
   background-color: rgba(42, 77, 133, 0.6); 
  color: #2196f3;
  font-weight: 600;
  background-color: transparent;
}

.asosiy-content .dropdown-item:hover {
  cursor: pointer;
  color: #2196f3;
}

.asosiy-content nav a {
  font-size: 1.125rem;
} */
