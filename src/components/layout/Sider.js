import React from 'react';

import { Menu } from 'antd';

import { NavLink } from "react-router-dom";
import routes from "../../views";
const { SubMenu } = Menu;

console.log('routes', routes);

const Sider = props => {
    // 用于生成菜单
    const createNavLink = () => {
        return routes.map(ele => (
            <SubMenu key={ele.id} title={ele.text} icon={ele.icon}>
                {
                    ele.children && ele.children.map(item => (
                        <Menu.Item key={item.id} style={{'paddingLeft': 0}}>
                            <NavLink
                                to={item.path}
                            >
                                {item.text}
                            </NavLink>
                        </Menu.Item>
                    ))
                }
            </SubMenu>
        ))
    }

    return (
        <div className="re-sider">
            <Menu
                defaultOpenKeys={['10']}
                defaultSelectedKeys={['1010']}
                mode="inline"
                theme="dark"
            >
                {createNavLink()}
            </Menu>
        </div>
    )
}  

export default Sider
