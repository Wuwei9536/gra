import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import router from 'umi/router';
import {
    Row,
    Col,
    Card,
    Form,
    Input,
    Select,
    Icon,
    Button,
    Dropdown,
    Menu,
    InputNumber,
    DatePicker,
    Modal,
    message,
    Badge,
    Divider,
    Steps,
    Radio,
    Table,
    Tag,
} from 'antd';
import styles from './network.less';
import TimelineChart from '../../../components/Charts/TimelineChart'
const FormItem = Form.Item;
const { Step } = Steps;
const { TextArea } = Input;
const { Option } = Select;
const RadioGroup = Radio.Group;


const columns = () => [{
    title: '接受速率--kB/s',
    dataIndex: 'y1',
    key: 'y2',
    align: 'center',
}, {
    title: '发送速率--kB/s',
    dataIndex: 'y2',
    key: 'y2',
    align: 'center',
}, {
    title: '时间',
    dataIndex: 'x',
    key: 'x',
    align: 'center',
}]





@Form.create()
class Network extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }


    componentDidMount() {
        const { dispatch, location } = this.props;
        const { query } = location; // 路由参数 无参数时query={}
        dispatch({
            type: 'network/fetchNetwork',
            payload: {
                id: query.id ? query.id : null,
            }
        });
        this.interval = setInterval(() => dispatch({
            type: 'network/fetchNetwork',
            payload: {
                id: query.id ? query.id : null,
            }
        }), 3000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }
    
    //下拉列表
    menu = () => {
        const { equipmentData } = this.props;
        return (
            <Menu>
                {equipmentData.map((item, index) => <Menu.Item key={item.key} onClick={(e) => this.changeEquipment(e, item.key)}><Icon type="user" />{item.name}</Menu.Item>)}
            </Menu>
        )
    }

    changeEquipment = (e, id) => {
        const { dispatch } = this.props;
        dispatch({
            type: 'network/fetchNetwork',
            payload: {
                id,
            }
        });
    }


    render() {
        const { data, defaultEquipment } = this.props;
        return (
            <Card bordered={false}>
                <Dropdown overlay={this.menu()}>
                    <Button style={{ marginBottom: 28 }}>
                        {defaultEquipment} <Icon type="down" />
                    </Button>
                </Dropdown>
                <TimelineChart data={data} titleMap={{ y1: '接受速率--kB/s', y2: '转化速率--kB/s' }} height={400} />
                <br />
                <Table columns={columns()} dataSource={data} />
            </Card>
        );
    }
}

const mapStateToProps = ({ network }) => ({
    data: network.data,
    equipmentData: network.equipment,
    defaultEquipment: network.defaultEquipment
});

export default connect(mapStateToProps)(Network);