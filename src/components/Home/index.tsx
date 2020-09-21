import React, { useEffect } from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';

import { useCreateCanvasMutation } from '../../generated/graphql';
import AntWrapper from '../AntWrapper/index';
import { paths } from '../Routes';

import { ButtonBox, Container } from './styled';

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {

  const [createCanvas, { 
    loading: creatingCanvas,  
    data: createCanvasData 
  }] = useCreateCanvasMutation()
  
  const history = useHistory()

  useEffect(() => {
    if (createCanvasData?.createCanvas._id) {
      history.push(`${paths.CANVAS}/${createCanvasData?.createCanvas._id}`)
    }
  }, [createCanvasData])

  const handleCreateCanvas = () => {
    createCanvas({variables: { name: 'temp name' }})
  }

  const homeLoader = creatingCanvas

  return (
    <AntWrapper 
      loader={homeLoader}>
      <Container>
        <ButtonBox>
          <Button 
            type="primary"
            onClick={handleCreateCanvas}
          >
            Create New Canvas
          </Button>
        </ButtonBox>
      </Container>
    </AntWrapper>
  )
}

export default Home