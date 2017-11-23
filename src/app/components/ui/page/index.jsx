// @flow
import * as React from 'react';

import './index.css';
import Header from '../header/index';

type Props = {
  children?: React.Node,
};

export default function Page({ children }: Props) {
  return (
    <div className="Page">
      <Header />
      <main className="Page_content">{children}</main>
    </div>
  );
}
