import React from 'react';
import { connect } from 'dva';
import {
    Card,
    Form,
    Table,
} from 'antd';
import styles from './loginlog.less';



const stuColumns = () => [{
    title: '登陆用户',
    dataIndex: 'loginname',
    key: 'loginname',
    align: 'center',
}, {
    title: '登陆时间',
    dataIndex: 'createtime',
    key: 'createtime',
    align: 'center',
},{
    title: '登陆ip',
    dataIndex: 'ipaddress',
    key: 'ipaddress',
    align: 'center',
},{
    title: '登陆终端',
    dataIndex: 'port',
    key: 'port',
    align: 'center',
}, {
    title: '登陆方式',
    dataIndex: 'state',
    key: 'state',
    align: 'center',
}]


const sysColumns = () => [{
    title: '登陆邮箱',
    dataIndex: 'loginEmail',
    key: 'loginEmail',
    align: 'center',
}, {
    title: '登陆密码',
    dataIndex: 'password',
    key: 'password',
    align: 'center',
},{
    title: '登陆ip',
    dataIndex: 'ip',
    key: 'ip',
    align: 'center',
},{
    title: '登陆时间',
    dataIndex: 'create_time',
    key: 'create_time',
    align: 'center',
}, {
    title: '登陆状态',
    dataIndex: 'state',
    key: 'state',
    align: 'center',
}]

const linuxColumns = () => [{
    title: '账号名',
    dataIndex: 'logname',
    key: 'logname',
    align: 'center',
}, {
    title: '用户组',
    dataIndex: 'groupa',
    key: 'groupa',
    align: 'center',
},{
    title: '目录',
    dataIndex: 'directory',
    key: 'directory',
    align: 'center',
},{
    title: '状态',
    dataIndex: 'state',
    key: 'state',
    align: 'center',
}, {
    title: '用户配额',
    dataIndex: 'userspace',
    key: 'userspace',
    align: 'center',
},{
    title: '使用配额',
    dataIndex: 'used',
    key: 'used',
    align: 'center',
}]


@Form.create()
class Loginlog extends React.Component {
    constructor(){
        super()
        this.state={
            columns:()=>[]
        }
    }
    componentDidMount() {
        const { dispatch, location } = this.props;
        const { pathname } = location; // 路由参数 无参数时query={}
        if(pathname=='/log/loginlog'){
            this.setState({columns:stuColumns})
            dispatch({
                type:'loginlog/getLoginLog',
            });
        }else if(pathname=='log/sysloginlog'){
            this.setState({columns:sysColumns})
            dispatch({
                type:'loginlog/getSysLoginLog',
            });
        }else{
            this.setState({columns:linuxColumns})
            dispatch({
                type:'loginlog/getLinux',
            });
        }
    }


    render() {
        const { data } = this.props;
        const { columns } = this.state;
        return (
            <Card bordered={false}>
                <Table columns={columns()} dataSource={data} />
            </Card>
        );
    }
}

const mapStateToProps = ({ loginlog }) => ({
    data: loginlog.data,
});

export default connect(mapStateToProps)(Loginlog);