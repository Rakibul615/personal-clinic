import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData1.json'
import Blog from '../Blog/Blog';

const Blogs = () => {
  const [blogs, setBlogs] = useState(fakeData);
  useEffect(() => {
    setBlogs(fakeData);
  }, [])

  return (
    <div className="row row-cols-1 row-cols-md-3 m-5 g-4">
      {
        blogs.map(blog => <Blog
          const key={blog.id}
          blog={blog}
        ></Blog>)
      }

    </div>
  );
};

export default Blogs;