import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import {
    Row,
    Col,
    Card,
    Form,
    Table,
} from 'antd';
import styles from './loginlog.less';



const columns = () => [{
    title: '登陆用户',
    dataIndex: 'loginname',
    key: 'loginname',
    align: 'center',
}, {
    title: '登陆时间',
    dataIndex: 'createtime',
    key: 'logintime',
    align: 'center',
}, {
    title: '登出时间',
    dataIndex: 'last_time',
    key: 'last_time',
    align: 'center',
},{
    title: '登陆ip',
    dataIndex: 'ipaddress',
    key: 'ipaddress',
    align: 'center',
},{
    title: '登陆端口',
    dataIndex: 'port',
    key: 'port',
    align: 'center',
}, {
    title: '登陆方式',
    dataIndex: 'state',
    key: 'state',
    align: 'center',
}]





@Form.create()
class Loginlog extends React.Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type:'loginlog/getLoginLog',
        });
    }


    render() {
        const { data } = this.props;
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