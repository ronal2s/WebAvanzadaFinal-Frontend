import React from "react";
import { Avatar, Popover } from "antd";
import { useSelector } from "react-redux";
import { parseJwt } from '../../rayoDevCore/utils';
import { history } from "../../appRedux/store";
import IntlMessages from "../../util/IntlMessages";

const UserInfo = () => {

  const authToken = useSelector(({ settings }) => settings.authUser);
  const user = authToken.token ? parseJwt(authToken.token)['user'] : null;
  const userMenuOptions = (
    <ul className="gx-user-popover">
      <li>{`${user ? user.username : null}`}</li>
      {/*<li>Perfil</li>*/}
      <li onClick={() => history.push('/signout')}>
        <IntlMessages id="Exit" />
      </li>
    </ul>
  );

  return (
    <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight" content={userMenuOptions}
      trigger="click">
      <Avatar src='https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
        className="gx-avatar gx-pointer" alt="" />
    </Popover>
  )
};


export default UserInfo;
