import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  FlagFilled,
  UnorderedListOutlined,
  PlusOutlined,
  TeamOutlined,
  DashboardFilled,
  BookOutlined
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './SidebarMenu.css'

const { Header, Sider, Content } = Layout

const SidebarMenu = () => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    {
      key: "projects",
      icon: <FlagFilled />,
      label: "nav 1",
      children: [
        {
          key: "#",
          icon: <UnorderedListOutlined />,
          label: <Link href="#">nav 1 1</Link>,
        },
        {
          key: "#",
          icon: <PlusOutlined />,
          label: <Link href="#">nav 1 2</Link>,
        },
        {
          key: "#",
          icon: <UploadOutlined />,
          label: <Link href="#">nav 1 3</Link>,
        },
      ]
    },
    {
      key: "engineers",
      icon: <UserOutlined />,
      label: "nav 2",
      children: [
        {
          key: "#",
          icon: <UnorderedListOutlined />,
          label: <Link href="#">nav 2 1</Link>,
        },
        {
          key: "#",
          icon: <PlusOutlined />,
          label: <Link href="#">nav 2 2</Link>,
        },
        {
          key: "#",
          icon: <UploadOutlined />,
          label: <Link href="#">nav 2 3</Link>,
        },
      ]
    },
    {
      key: "partners",
      icon: <TeamOutlined />,
      label: "nav 3",
      children: [
        {
          key: "#",
          icon: <UnorderedListOutlined />,
          label: <Link href="#">nav 3 1</Link>,
        },
        {
          key: "#",
          icon: <PlusOutlined />,
          label: <Link href="#">nav 3 2</Link>,
        },
        {
          key: "#",
          icon: <UploadOutlined />,
          label: <Link href="#">nav 3 3</Link>,
        },
      ]
    },
    {
      key: "#",
      icon: <DashboardFilled />,
      label: <Link href="#">nav 4</Link>,
    },
    {
      key: "#",
      icon: <BookOutlined />,
      label: "nav 5"
    }
  ]

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={menuItems}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0}}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed)
            }
          )}
        </Header>
      </Layout>
    </Layout>
  )
}

export default SidebarMenu
