import React from "react";

// export const getStaticPaths = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await res.json();

//   const paths = users.map((user) => {
//       const id=user.id.toString()
//     return { params: { id } };
//   });

//   return {
//     paths,
//     fallback:false
//   };
// };

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  );

  const user = await res.json();

  return {
    props: { user },
  };
};
const ComponentName = ({user}) => {
  return <p>{user.username}</p>;
};

export default ComponentName;
