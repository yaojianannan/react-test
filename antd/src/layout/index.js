import {Component} from 'react';
import {Layout, Menu} from 'antd';
import {CrownOutlined,DashboardOutlined } from '@ant-design/icons';
import logo from '../images/logo.jpg';
import {Link} from 'umi';

const {Header, Footer, Sider, Content} = Layout;
const {SubMenu} = Menu;
const title = " 楠楠小作坊";

class BasicLayout extends Component {
    render(){
        return (
            <Layout>
                <Sider width={160} style={{minHeight: '100vh', color: 'white'}}>
                    <div style = {{height: '32px', margin: '16px'}}>
                        <span>
                            <img src={logo} alt='logo' width='32px' height='32px'></img>
                            {title}
                        </span>
                    </div>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                                <Link to="/helloworld">
                                    <CrownOutlined/>
                                    <span>Helloworld</span>
                                </Link>
                            </Menu.Item>
                            <SubMenu
                                key="sub1"
                                title = {<span><DashboardOutlined/><span>Dashboard</span></span>}
                            >
                                <Menu.Item key="2"><Link to={"/dashboard/analysis"}>分析页</Link></Menu.Item>
                                <Menu.Item key="3"><Link to={"/dashboard/monitor"}>监控页</Link></Menu.Item>
                                <Menu.Item key="4"><Link to={"/dashboard/workplace"}>工作台</Link></Menu.Item>
                            </SubMenu>
                        </Menu>
                </Sider>
                <Layout>
                    <Header style={{ color: 'white', textAligin: 'center', padding: 0}}>Header</Header>
                    <Content style={{margin: '24px 16px 0'}}>
                        <div style={{padding:24,background:'#fff',minHeight:360}}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}> Ant design @2020 Created by yaojn</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default BasicLayout;