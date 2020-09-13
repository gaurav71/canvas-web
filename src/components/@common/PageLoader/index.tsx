import React from "react";
import { Spin } from 'antd';
import { PageLoaderContainer } from "./styled";

const PageLoader = () => {
  return (
    <PageLoaderContainer>
      <Spin size="large"/>
  </PageLoaderContainer>
  )
}

export default PageLoader