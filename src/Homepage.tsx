import * as React from 'react';

interface Props {
  title: string;
  description: string;
}

const HomePage: React.FC<Props> = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default HomePage;