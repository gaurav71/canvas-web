
import React, { useState } from 'react'
import { Layout, Menu, Button } from 'antd'

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'

import { ShapeInput } from '../../generated/graphql'

import PageLoader from '../@common/PageLoader'
import { TypeOfShape } from '../Shapes/types'
import { CanvasContextType, useCanvasContext } from '../Canvas/context'
import { circleAttributesDefault, rectAttributesDefault } from '../Shapes/defaultAttributes'

import { 
  Container, 
  CustomHeader, 
  CustomToolBar, 
  LogoDiv 
} from './styled'

const { Header, Sider, Content } = Layout

interface AntWrapperProps {
  toolbar?: boolean
  loader? : boolean
}

export const AntWrapper: React.FC<AntWrapperProps> = ({ children, toolbar, loader }) => {

  const [collapsed, setCollapsed] = useState(true)
  const canvasContext = useCanvasContext() as CanvasContextType

  const handleAddShape = (type: TypeOfShape) => {
    let attributes: any = null

    switch(type) {
      case 'rect': attributes = {...rectAttributesDefault}; break;
      case 'circle': attributes = {...circleAttributesDefault}; break;
    }

    const shape: ShapeInput = {
      canvasId: canvasContext.canvasId,
      type: type,
      attributes
    }

    canvasContext.addShape(shape)
  }

  const renderCustomToolBar = () => {
    return (
      <>
        <Button 
          type="primary"
          onClick={() => handleAddShape('rect')}
        >
          Add Rect
        </Button>
        <Button 
          type="primary"
          onClick={() => handleAddShape('circle')}
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
              {loader ? <PageLoader /> : children}
            </Content>
          </Layout>
        </Layout>
      </Container>
  )
}

export default AntWrapper