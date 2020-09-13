import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;

  .layout-container {
    min-height: 100%;
  }

  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }

  .site-layout .site-layout-background {
    background: #fff;
  }

  .ant-layout-header {
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .trigger {
      transform: scale(1.5);

      &:hover {
        color: #1890ff;
      }
    }
  }

`

export const LogoDiv = styled.div`
  height: 40px;
  margin: 10px;
  background: darkslategray;
`

export const CustomHeader = styled.div`

`

export const CustomToolBar = styled.div`
  button:not(:last-child) {
    margin-right: 10px;
  }
` 