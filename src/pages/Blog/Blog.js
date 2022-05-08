import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto mt-3'>
            <div>
                <h2>Whats the difference between javascript and node js ?</h2>
                <p>javascript is a programming language that is used for writing scripts on the website . Beside this NodeJs is a javascript runtime environment. Javascript can only be run in the browser but We can run javascript outside the browser withe the help of NodeJs. Javascript is basically used on the client side and node js is mostly used on the server side .  </p>
            </div>
            <div>
                <h2>When should we use mongodb and when node js ? </h2>
                <p>Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.</p>
                <p>SQL. NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn't fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases.</p>
            </div>
            <div>
                <h2>Difference between Mysql and nosql - </h2>
                <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            </div>
        </div>
    );
};

export default Blog;