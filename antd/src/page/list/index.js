import React, { Component } from 'react';
import { Table, Modal, Button, Form, Input } from 'antd';
import { connect } from 'dva';
const namespace = 'cards';
function mapStateToProps(state) {
  return {
    cardsList: state[namespace].cardsList,
    cardsLoading: state.loading.effects[`${namespace}/queryList`]
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onDidMount: () => dispatch({
      type: `${namespace}/queryList`
    }),
    addOne: (card) => dispatch({
      type: `${namespace}/addOne`,
      payload: card,
    })
  }
}
@connect(mapStateToProps, mapDispatchToProps)
class List extends Component {
  columns = [
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '描述',
      dataIndex: 'desc',
    },
    {
      title: '链接',
      dataIndex: 'url',
      render: value => <a href={value}>{value}</a>,
    },
  ];
  state = {
    visible: false,
  }
  formRef = React.createRef();
  componentDidMount() {
    this.props.onDidMount();
  }
  showModal = () => {
    this.setState({visible: true});
  }
  handleCancel = () => {
    this.setState({visible: false});
  }
  handleOk = () => {
    this.formRef.current.validateFields()
    .then(values => {
      this.props.addOne(values);
      this.setState({visible: false});
    })
  }
  render() {
    const { cardsList, cardsLoading } = this.props;
    return(
      <div>
        <Table columns={this.columns} dataSource={cardsList} loading={cardsLoading} rowKey="id" />
        <Button onClick={this.showModal}>新建</Button>
        <Modal
          title='新建记录'
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form ref={this.formRef}>
            <Form.Item label='名称' name='name' rules={[{required: true}]}>
              <Input />
            </Form.Item>
            <Form.Item label='描述' name='desc'>
              <Input />
            </Form.Item>
            <Form.Item label='链接' name='url' rules={[{type: 'url'}]}>
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }
}
export default List;