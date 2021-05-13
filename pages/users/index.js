import React from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
};

const About = ({ users }) => {
  return (
    <div className={styles.container}>
      {users.map((user) => {
        return (
          <Link href={`/users/${user.id}`} key={user.id}>
            <div className={styles.list}>{user.username}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default About;
