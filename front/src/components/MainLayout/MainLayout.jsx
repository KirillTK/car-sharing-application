import React  from 'react';
import { Layout } from 'antd';
import { Header } from '../Header/Header';
import styles from './styles.module.less';


export const MainLayout = ({ children }) => {
  return <Layout className={styles.appLayout}>
  <Header />
  <Layout className={styles.mainSection}>
    {children}
  </Layout>
  <Layout.Footer className={styles.appFooter}>
      <a href="mailto:carsharinghelp@gmail.com">
      Need help?
      </a>
  </Layout.Footer>
</Layout>;
}