import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1 className="text-center p-2">
        Answer to the <span className="text-primary fw-bold">Question</span>
      </h1>

      <div className="container mt-4">
        <h3>1.Difference between javascript and nodejs</h3>
        <p>
          <span className="h5">Javascript:</span> Javascript is a Scripting
          language. It is mostly abbreviated as JS. It can be said that
          Javascript is the updated version of the ECMA script. Javascript is a
          high-level programming language that uses the concept of Oops but it
          is based on prototype inheritance.
        </p>

        <p>
          <span className="h5">Nodejs:</span> NodeJS is a cross-platform and
          opensource Javascript runtime environment that allows the javascript
          to be run on the server-side. Nodejs allows Javascript code to run
          outside the browser. Nodejs comes with a lot of modules and mostly
          used in web development.
        </p>
        <h3>2.Differences between sql and nosql databases</h3>
        <p>
          <span className="h5">Sql:</span>RELATIONAL DATABASE MANAGEMENT SYSTEM
          (RDBMS).These databases have fixed or static or predefined schema.
          These databases are not suited for hierarchical data storage.These
          databases are best suited for complex queries.Vertically Scalable.
          Follows ACID property.
        </p>
        <p>
          <span className="h5">Nosql:</span> Non-relational or distributed
          database system. They have dynamic schema. These databases are best
          suited for hierarchical data storage. These databases are not so good
          for complex queries. Follows ACID property. Follows CAP(consistency,
          availability, partition tolerance).
        </p>
        <h3>3.What is the purpose of jwt and how does it work?</h3>
        <p>
          JSON Web Token (JWT) is an open standard (RFC 7519) for securely
          transmitting information between parties as JSON object. It is
          compact, readable and digitally signed using a private key/ or a
          public key pair by the Identity Provider(IdP). So the integrity and
          authenticity of the token can be verified by other parties involved.
          The purpose of using JWT is not to hide data but to ensure the
          authenticity of the data. JWT is signed and encoded, not encrypted.
          JWT is a token based stateless authentication mechanism. Since it is a
          client-side based stateless session, server doesn’t have to completely
          rely on a datastore(database) to save session information.
        </p>
        <h3>4.When should you use nodejs and when should you use mongodb</h3>
        <p>
          Nodejs is a Javascript engine that you can write any application you
          want with (by programming in the Javascript language). It runs your
          Javascript code. Most commonly, it is used to build servers that can
          respond to web requests, though it can be used for lots of other types
          of code too.
        </p>
        <p>
          MongoDB is a database engine. Code within some application or server
          uses MongoDB to save, query or update data in a database. There are
          many web servers built with nodejs that will then use MongoDB for
          storing data. MongoDB offers an API library that runs within a Nodejs
          application to give you programmatic access to MongoDB so you can
          create databases and then add, query, update or delete data from the
          MongoDB database. MongoDB also has API libraries for other programming
          environments such as Python, Java, etc.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
