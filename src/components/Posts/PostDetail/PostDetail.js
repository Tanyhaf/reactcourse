import React from 'react';

const PostDetail = ({post}) => {
    const {id, userid, title, body} = post;

    return (
        <div>
            <hr/>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>userId: {userid}</div>
            <div>bodt: {body}</div>
            <hr/>
        </div>
    );
};

export default PostDetail;
