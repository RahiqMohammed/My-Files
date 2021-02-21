import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from "./actions/transactionActions"
import { bindActionCreators } from "redux";
import {DatePicker, Space, Button, Input, Form} from 'antd'



class TableForm extends Component {

    state = {
        ...this.returnStateObject()
    }

    returnStateObject() {
        if (this.props.currentIndex == -1)
            return {
                key: 0,
  courseCode: '',
  courseName: '',
  date: '',
            }
        else
            return this.props.list[this.props.currentIndex]
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentIndex != this.props.currentIndex || prevProps.list.length != this.props.list.length) {
            this.setState({ ...this.returnStateObject() })
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        if (this.props.currentIndex == -1)
           { this.props.insertTransaction(this.state)
            console.log('hi');}
        else
            this.props.updateTransaction(this.state)
            console.log('bye')
    }

    render() {
        return (
            <div className="Form">
             <Form
      name="basic"
      onFinish={this.handleSubmit}
    >
            <Space direction="vertical">
            <Space direction="horizental">
            <Form.Item >
            <Input placeholder="Course Code" name='courseCode' value={this.state.courseCode}  onChange={this.handleInputChange} />
           </Form.Item> 
           <Form.Item>
           <Input placeholder="Course Name" name='courseName' value={this.state.courseName}  onChange={this.handleInputChange}/>
            </Form.Item>
            <Form.Item>
                <Input placeholder="YYYY-MM_DD HH:mm:ss" name='date' value={this.state.date}  onChange={this.handleInputChange}/>
                 {/* <DatePicker onChange={onChange} showTime/> */}
            </Form.Item>
           
            </Space>
          <Button htmlType="submit" type="primary" block>
            + Add New Course 
          </Button>
          </Space>
          </Form>
          </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.list,
        currentIndex: state.currentIndex
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        insertTransaction: actions.insert,
        updateTransaction: actions.update
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TableForm)