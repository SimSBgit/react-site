import React, { useEffect, useState } from 'react';

const ExUseEffect04 = () => {
    const [posts, setPosts] = useState([])

    useEffect(
        () => {
            fetch("https://jsonplaceholder.typicode.com/posts?_limit=5").then((res) => res.json()).then((data) => setPosts(data))
        }, [])

    return (
        <div>
            <h2>게시글 목록</h2>
            <ul>
                {
                    posts.map((p) => (
                        // {p.body}도 가능.
                        <li key="p.id">{p.title}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default ExUseEffect04;