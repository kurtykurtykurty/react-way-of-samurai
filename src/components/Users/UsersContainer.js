/* eslint-disable no-shadow */
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Users from './Users';

import {
    setCurrentPage,
    toggleFollowingProgress,
    getUsersThunkCreator,
    followThunkCreator,
    unfollowThunkCreator,
} from '../../redux/usersReducer';

function UsersAPIContainer({
    usersPage,
    pageSize,
    totalUsersCount,
    currentPage,
    isFetching,
    followingInProgress,
    getUsers,
    follow,
    unfollow,
    setCurrentPage,
    match,
}) {
    useEffect(() => {
        console.log('USERS MOUNT');
        console.log('match.params.currentPage', match.params.currentPage);
        if (match.params.currentPage) {
            getUsers(match.params.currentPage, pageSize);
            setCurrentPage(Number(match.params.currentPage));
        } else {
            getUsers(1, pageSize);
            setCurrentPage(1);
        }
        return () => {
            console.log('USERS UNMOUNT');
            // setCurrentPage(1); //!TODO set default current page when unmount
        };
    }, [currentPage, match]);

    function onPageChanged(currentPage) {
        setCurrentPage(currentPage);
        getUsers(currentPage, pageSize);
    }

    return (
        <Users
            totalUsersCount={totalUsersCount}
            pageSize={pageSize}
            usersPage={usersPage}
            currentPage={currentPage}
            onPageChanged={() => onPageChanged}
            follow={follow}
            unfollow={unfollow}
            isFetching={isFetching}
            toggleFollowingProgress={toggleFollowingProgress}
            followingInProgress={followingInProgress}
        />
    );
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

const withRouterUsersApiContainer = withRouter(UsersAPIContainer);

const UsersContainer = connect(mapStateToProps, {
    setCurrentPage,
    toggleFollowingProgress,
    getUsers: getUsersThunkCreator,
    follow: followThunkCreator,
    unfollow: unfollowThunkCreator,
})(withRouterUsersApiContainer);

export default UsersContainer;
