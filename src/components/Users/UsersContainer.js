import React from 'react';
import { connect } from 'react-redux';

import Users from './Users';

import {
    setCurrentPage,
    toggleFollowingProgress,
    getUsersThunkCreator,
    followThunkCreator,
    unfollowThunkCreator,
} from '../../redux/usersReducer';

class UsersAPIContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (currentPage) => {
        // this.props.setIsFetching(true);

        // this.props.setCurrentPage(currentPage);
        // usersAPI.getUsers(currentPage, this.props.pageSize).then((response) => {
        //     this.props.setUsers(response.items);
        //     this.props.setIsFetching(false);
        // });
        this.props.setCurrentPage(currentPage);
        this.props.getUsers(currentPage, this.props.pageSize);
    };

    render() {
        return (
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                usersPage={this.props.usersPage}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isFetching={this.props.isFetching}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount));
//         },
//         setIsFetching: (isFetching) => {
//             dispatch(setIsFetchingAC(isFetching));
//         },
//     };
// };

const UsersContainer = connect(mapStateToProps, {
    setCurrentPage,
    toggleFollowingProgress,
    getUsers: getUsersThunkCreator,
    follow: followThunkCreator,
    unfollow: unfollowThunkCreator,
})(UsersAPIContainer);

export default UsersContainer;
