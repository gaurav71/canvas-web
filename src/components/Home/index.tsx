
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useCreateCanvasMutation, useIsLoginQuery } from '../../generated/graphql';
import { paths } from '../Routes';

import { Spin, Button } from 'antd';

import AntWrapper from '../AntWrapper/index'
import { ButtonBox, Container } from './styled';
import PageLoader from '../@common/PageLoader';

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {

  const { loading, error, data } = useIsLoginQuery()
  const [createCanvas, { loading: creatingCanvas,  data: createCanvasData }] = useCreateCanvasMutation()
  const history = useHistory()


  if (loading) {
    return <PageLoader />
  }

  if (!data?.isLogin) {
    history.replace(`${paths.AUTH}`)
  }

  if (createCanvasData?.createCanvas._id) {
    history.push(`${paths.CANVAS}/${createCanvasData?.createCanvas._id}`)
  }

  return (
    <AntWrapper>
      <Container>
        {creatingCanvas ? <PageLoader /> : 
          <ButtonBox>
            <Button 
              type="primary"
              onClick={() => createCanvas({variables: { name: 'temp name' }})}
            >
              Create New Canvas
            </Button>
            {/* <Button 
              type="primary"
              onClick={() => createCanvas()}
            >
              Create New Canvas
            </Button> */}
          </ButtonBox>
        }
      </Container>
    </AntWrapper>
  )
}

export default Home