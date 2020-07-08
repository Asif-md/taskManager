import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTasks, deleteTask } from '../../actions/tasks';

export class Tasks extends Component {
    static propTypes = {
        tasks: PropTypes.array.isRequired,
        getTasks: PropTypes.func.isRequired,
        deleteTask: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getTasks();
    }

    render() {
        return (
            <Fragment>
                <h2>Tasks</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                            {/* <th>Message</th> */}
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.props.tasks.map((lead) => (
                            <tr key={task.id}>123
                            
                                <td>{task.id}</td>
                                <td>{task.title}</td>
                                <td>{task.description}</td>

                                <td>
                                    <button
                                        onClick={this.props.deleteTask.bind(this, task.id)}
                                        className="btn btn-danger btn-sm"
                                    >
                                        {' '}
                    Delete
                  </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    tasks: state.tasks.tasks,
});

export default connect(mapStateToProps, { getTasks, deleteTask })(Tasks);
