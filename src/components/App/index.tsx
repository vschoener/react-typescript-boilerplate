import * as React from 'react';
import Foo from '../Foo';

interface AppProps {
  message: string;
}

export default function ({ message }: AppProps) {
  return (
    <div>
      <h1>{message}</h1>
      <div className="alert alert-primary" role="alert">
        This is a primary alert—check it out!
      </div>
      <button className="btn btn-primary">Test</button>
      <Foo />
    </div>
  );
}
