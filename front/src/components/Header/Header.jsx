import React, { useCallback } from 'react';
import {Typography, Layout, Avatar, Dropdown, Menu } from 'antd';
import { useHistory } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthState } from '../../selectors/auth.selector';
import styles from './styles.module.less';
import { ROUTER_PATHS } from '../../constants/routerPaths.const';
import { uiSlice } from '../../reducers/ui.reducer';
import { MODALS } from '../../constants/modals.const';
import { SignUpModal } from '../SignUpModal/SignUpModal';
import { isAdmin } from '../../utils/utils';
import { logOut } from '../../actions/authActions';

const { Header: HeaderAntd } = Layout;


export const Header = () => {
  const { isAuthorized, user  } = useSelector(getAuthState);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleMenuClick = useCallback(() => {}, []);

  const handleLogOut = useCallback(() => {
    dispatch(logOut());
    history.push('/');
  }, [dispatch, history]);

  const handleNavigate = useCallback((path) => () => {
    history.push(path);
  }, [history]);

  const handleSignUp = useCallback( () => {
    dispatch(uiSlice.actions.showModal(MODALS.signUp))
  }, [dispatch]);

  const handleSignIn = useCallback( () => {
    dispatch(uiSlice.actions.showModal(MODALS.auth));
    dispatch(uiSlice.actions.setModalParams({ withoutRedirect: true }));
  }, [dispatch]);

  const isAdminRole  = isAdmin(user?.role.name );

  const menu = (
    <Menu onClick={handleMenuClick}>
      {
        isAdminRole && <Menu.Item key="4" onClick={handleNavigate(ROUTER_PATHS.admin)}>
        Admin Panel
       </Menu.Item>
      }
      {!isAdminRole && <Menu.Item key="1" onClick={handleNavigate(ROUTER_PATHS.yourCar)}>
        Your car
      </Menu.Item>}
      {!isAdminRole && <Menu.Item key="2" onClick={handleNavigate(ROUTER_PATHS.userHistory)}>
        History
      </Menu.Item>}
      <Menu.Item key="3" onClick={handleLogOut}>
        Log out
      </Menu.Item>
    </Menu>
  );

  return <HeaderAntd className={styles.appHeader}>
  <div/>
  <Typography.Title level={2} onClick={handleNavigate(ROUTER_PATHS.index)}>CarSharing</Typography.Title>
  {isAuthorized ?  <Dropdown overlay={menu}><Avatar icon={<UserOutlined />}/></Dropdown>: null}
  {!isAuthorized && <div style={{ display: 'flex'}}>
    <div onClick={handleSignIn} style={{ marginRight: '20px'}}>Sign In</div>
    <div onClick={handleSignUp}>Sign Up</div>
  </div>}
  <SignUpModal/>
</HeaderAntd>
};