import React, { Component } from 'react';
import { Layout, Icon, Menu, Badge } from 'antd';
import { Link } from 'react-router-dom';
import history from './history';

const { Header } = Layout;
const SubMenu = Menu.SubMenu;

export default class HeaderCustom extends Component{
    constructor(props){
        super(props);
        this.state = {
            collapsed: props.collapsed,
        }
        this.logout = this.logout.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        //console.log(nextProps);
        this.onCollapse(nextProps.collapsed);
    }
    onCollapse = (collapsed) => {
        this.setState({
            collapsed,
        });
    };
    logout(){
        sessionStorage.removeItem("mspa_user");
        history.push('/login');
    }
    render(){
        return(
            <Header style={{ background: '#fff', padding: 0,margin:"0 16px" }} className="header">
                <div style={{textAlign:'center',fontSize:"xx-large"}}>Athena用户身份认证系统</div>
                <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.props.toggle}
                />
                {/*<Menu
                    mode="horizontal"
                    style={{ lineHeight: '64px', float: 'right' }}
                >
                    <Menu.Item key="schedule">
                        <Link to="/app/header/Calendars">
                            <Badge count={3} overflowCount={99} style={{height:'15px',lineHeight:'15px'}}>
                                <Icon type="schedule" style={{fontSize:16, color: '#1DA57A' }}/>
                            </Badge>
                        </Link>
                    </Menu.Item>
                    <SubMenu
                        title={<span>
                            <Icon type="user" style={{fontSize:16, color: '#1DA57A' }}/>{this.props.username}
                        </span>}
                        >
                        <Menu.Item key="logout" style={{textAlign:'center'}} className="logout">
                            <span onClick={this.logout}>logout</span>
                        </Menu.Item>
                    </SubMenu>
                </Menu>*/}
            </Header>
        )
    }
} 