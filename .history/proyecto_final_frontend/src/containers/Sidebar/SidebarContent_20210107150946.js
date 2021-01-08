import React from "react";
import { useSelector } from "react-redux";
import { Menu } from "antd";
import { Link } from "react-router-dom";

import CustomScrollbars from "util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";
import UserProfile from "./UserProfile";
import AppsNavigation from "./AppsNavigation";
import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE
} from "../../constants/ThemeSetting";
import IntlMessages from "../../util/IntlMessages";
import { parseJwt } from "../../rayoDevCore/utils";

const SidebarContent = () => {

  let { navStyle, themeType, pathname } = useSelector(({ settings }) => settings);
  const authToken = useSelector(({ settings }) => settings.authUser);
  const user = authToken.token ? parseJwt(authToken.token)['user'] : null;

  const getNoHeaderClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR || navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) {
      return "gx-no-header-notifications";
    }
    return "";
  };

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];

  return (<div style={{backgroundColor: '#343d45'}} >
    <SidebarLogo />
    <div className="gx-sidebar-content">
      <div className={`gx-sidebar-notifications ${getNoHeaderClass(navStyle)}`}>
        {/* <UserProfile /> */}
        {/* <AppsNavigation /> */}
      </div>
      <CustomScrollbars className="gx-layout-sider-scrollbar">
        <Menu
          defaultOpenKeys={[defaultOpenKeys]}
          selectedKeys={[selectedKeys]}
          theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
          mode="inline">
          {/*<Menu.Item key="products">*/}
          {/*  <Link to="/products"><i className="icon icon-pricing-table" />*/}
          {/*    <span>Products</span></Link>*/}
          {/*</Menu.Item>*/}
          {user && user.admin && <Menu.Item key="clients">
            <Link to="/clients"><i className="icon icon-user" />
              <span><IntlMessages id="Customers"/></span></Link>
          </Menu.Item>}
          <Menu.Item key="orders">
            <Link to="/orders"><i className="icon icon-shopping-cart" />
              <span><IntlMessages id="Purchases"/></span></Link>
          </Menu.Item>
          <Menu.Item key="invoices">
            <Link to="/invoices"><i className="icon icon-orders" />
              <span><IntlMessages id="Invoices"/></span></Link>
          </Menu.Item>
          <Menu.Item key="graphs">
            <Link to="/graphs"><i className="icon icon-orders" />
              <span><IntlMessages id="Statistics"/></span></Link>
          </Menu.Item>
        </Menu>
      </CustomScrollbars>
    </div>
  </div>
  );
};

SidebarContent.propTypes = {};

export default SidebarContent;

