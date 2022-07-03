import React from 'react'
import AddPost from './AddPost'
import PostList from './PostList'

function HomePage() {
    return (
        <div>
            <h3 className='center'>Welcome to Blog Application</h3>
            <AddPost/>
            <PostList/>
        </div>
    )
}

export default HomePage
