// use Remote Store
import React, { useEffect, useState } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);

  function getData() {
    fetch('https://jsonplaceholder.typicode.com/posts').then(async (fetchedPosts) => {
      const postsAsJson = await fetchedPosts.json();
      setPosts(postsAsJson);
    });
  }

  useEffect(() => {
    getData();
    const pollForData = setInterval(() => getData(), 5000);
    return () => {
      clearTimeout(pollForData);
    };
  }, []);

  return (
    <div>
      <h4>Posts</h4>
      {posts.map(({ id, title, body }) => (
        <div key={id}>
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;

// ----------------------------------------------------------------
// use Local Store
function useLocalJSONState(key, defaultValue) {
    const [state, setState] = React.useState(
      () => JSON.parse(localStorage.getItem(key)) || defaultValue
    );
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
    return [state, setState];
}

// ----------------------------------------------------------------
// use Context be whole store
// https://reactjs.org/docs/hooks-reference.html#usecontext