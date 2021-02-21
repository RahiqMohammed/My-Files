import React, { Component } from 'react'
import TableForm from './TableForm'
import { connect } from "react-redux";
import * as actions from "./actions/transactionActions"
import { bindActionCreators } from "redux";
import {Table} from 'antd'

class FormTable extends Component {


    handleEdit = (index) => {
        this.props.updateTransactionIndex(index)
    }

    handleDelete = (index) => {
        this.props.deleteTransaction(index)
    }

    render() {
        return (
            <div>
                <TableForm />
                <hr />
                <table>
                    <tbody>
                      <tr> 
                        <th>
                          Course Code
                        </th>
                        <th>
                          Course Name
                        </th>
                        <th>
                          Date
                        </th>
                        <th>
                          Operations
                        </th>
                      </tr>
                        {this.props.list.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.courseCode}</td>
                                <td>{item.courseName}</td>
                                <td>{item.date}</td>
                                <td><button onClick={() => this.handleEdit(index)}>Edit</button></td>
                                <td><button onClick={() => this.handleDelete(index)}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateTransactionIndex: actions.editIndex,
        deleteTransaction: actions.remove
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FormTable)