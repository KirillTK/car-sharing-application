import React, { useCallback } from 'react';
import {Typography, Layout, Avatar, Dropdown, Menu } from 'antd';
import { useHistory } from 'react-router-dom';
import { UserOutlined,  BookOutlined, CarOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { getAuthState } from '../../selectors/auth.selector';
import styles from './styles.module.less';
import { ROUTER_PATHS } from '../../constants/routerPaths.const';

const { Header: HeaderAntd } = Layout;


export const Header = () => {
  const { isAuthorized } = useSelector(getAuthState);
  const history = useHistory();

  const handleMenuClick = useCallback(() => {}, []);

  const handleLogOut = useCallback(() => {}, []);

  const handleNavigate = useCallback((path) => () => {
    history.push(path);
  }, [history]);

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" onClick={handleNavigate(ROUTER_PATHS.yourCar)}>
        Your car
      </Menu.Item>
      <Menu.Item key="2" onClick={handleNavigate(ROUTER_PATHS.userHistory)}>
        History
      </Menu.Item>
      <Menu.Item key="3" onClick={handleLogOut}>
        Log out
      </Menu.Item>
    </Menu>
  );

  return <HeaderAntd className={styles.appHeader}>
  <div/>
  <Typography.Title level={2} onClick={handleNavigate(ROUTER_PATHS.index)}>CarSharing</Typography.Title>
  {isAuthorized ?  <Dropdown overlay={menu}><Avatar icon={<UserOutlined />}/></Dropdown>: <div/>}
</HeaderAntd>
};