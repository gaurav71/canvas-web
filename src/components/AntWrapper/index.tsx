
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useIsLoginQuery } from '../../generated/graphql';
import { paths } from '../Routes';

import { Spin, Layout, Menu, Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Container, CustomHeader, CustomToolBar, LogoDiv } from './styled';
import PageLoader from '../@common/PageLoader';
import { CanvasContextType, useCanvasContext } from '../Canvas/context';
import { circleAttributesDefault, rectAttributesDefault } from '../Shapes/defaultAttributes';

const { Header, Sider, Content } = Layout;

interface AntWrapperProps {
  children: any;
  toolbar?: boolean;
}

export const AntWrapper: React.FC<AntWrapperProps> = ({ children, toolbar }) => {

  const { loading, data } = useIsLoginQuery()
  const [collapsed, setCollapsed] = useState(true)
  const history = useHistory()
  const { addShape } = useCanvasContext() as CanvasContextType

  if (loading) {
    return (
      <PageLoader />
    )
  }

  if (!data?.isLogin) {
    history.replace(`${paths.AUTH}`)
  }

  const handleAddRect = () => {
    const attributes = {
      ...rectAttributesDefault
    }
    addShape({ attributes, type: 'rect' })
  }

  const handleAddCircle = () => {
    const attributes = {
      ...circleAttributesDefault
    }
    addShape({ attributes, type: 'circle' })
  }

  const renderCustomToolBar = () => {
    return (
      <>
        <Button 
          type="primary"
          onClick={handleAddRect}
        >
          Add Rect
        </Button>
        <Button 
          type="primary"
          onClick={handleAddCircle}
        >
          Add Circle
        </Button>
      </>
    )
  }

  return (
    <Container>
      <Layout className='layout-container'>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <LogoDiv className="logo" ></LogoDiv>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background">
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => {
                  setCollapsed(val => !val)
                }
              })}
              <CustomHeader>
                {toolbar && 
                <CustomToolBar>
                  {renderCustomToolBar()}
                </CustomToolBar>}
              </CustomHeader>
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </Container>
  )
}

export default AntWrapper