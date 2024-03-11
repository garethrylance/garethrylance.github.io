const { Content, Sider } = Layout;

import { NavLink, Outlet, useLocation } from "react-router-dom";
import { ConfigProvider, Layout, Menu, Typography, theme } from "antd";

import { FC, ReactElement } from "react";

interface page {
  label: string;
  path: string;
  icon: JSX.Element;
}

interface AppNavigationProps {
  pages: page[];
}

const generateMenuItems = (pages: page[]) => {
  return pages.map((p) => {
    return {
      key: p.path,
      icon: p.icon,
      label: (
        <NavLink to={p.path}>
          <Typography.Text>{p.label} </Typography.Text>
        </NavLink>
      ),
    };
  });
};

export const AppNavigation: FC<AppNavigationProps> = ({
  pages,
}): ReactElement => {
  let location = useLocation();

  const menuItems = generateMenuItems(pages);
  const activeKeys = menuItems
    .filter((p) => location.pathname.startsWith(p.key))
    .map((p) => p.key);

  return (
    <ConfigProvider
      theme={{
        algorithm: [theme.darkAlgorithm],
        token: {
          colorPrimary: "#faad14",
          colorInfo: "#faad14",
          colorBgBase: "#151414",
        },
      }}
    >
      <Layout>
        <Sider breakpoint="lg" collapsedWidth="0">
          <Menu
            mode="vertical"
            selectedKeys={activeKeys}
            items={menuItems}
            style={{ height: "100vh" }}
          />
        </Sider>

        <Content>
          <Outlet />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};
