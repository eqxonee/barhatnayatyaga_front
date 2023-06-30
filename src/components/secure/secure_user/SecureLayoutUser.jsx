import {MenuFoldOutlined, MenuUnfoldOutlined, MinusOutlined, PlusOutlined, VideoCameraOutlined} from '@ant-design/icons';
import {Avatar, Button, Layout, Menu, theme} from 'antd';
import {useState} from 'react';
import {Link, Outlet} from "react-router-dom";

const {Header, Sider, Content} = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const SecureLayoutUser = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer},
    } = theme.useToken();
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical"/>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {

                            key: '1',
                            icon: <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel"/>,
                            label: <Link
                                to='/secure/home'>
                                Моя страница
                            </Link>,
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined/>,
                            label: <Link
                                to='/secure/menu-item'>
                                Меню
                            </Link>,
                        },
                        {
                            key: '3',
                            icon: <PlusOutlined/>,
                            label: <Link
                                to='/secure/price-list'>
                                Прайс лист
                            </Link>,
                        },
                        {
                            key: '4',
                            icon: <MinusOutlined/>,
                            label: <Link
                                to='/secure/promo'>
                                Акции
                            </Link>,
                        },
                        {
                            key: '5',
                            icon: <MinusOutlined/>,
                            label: <Link
                                to='/secure/book-table'>
                                Бронь
                            </Link>,
                        },
                        {
                            key: '6',
                            icon: <MinusOutlined/>,
                            label: <Link
                                to='/secure/support'>
                                Тех.Поддержка
                            </Link>,
                        },

                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>
    );
};

export default SecureLayoutUser;