import React from "react";


export default function Layout (props) {
    return (
      <React.Fragment>
        <header>{props.header}</header>
        <main>{props.contenido}</main>
        <footer>{props.footer}</footer>
        <Layout
          header={() => <h1>Header</h1>}
          content={() => <h2>content</h2>}
          footer={() => <h3>Footer</h3>}
        />
      </React.Fragment>
    );
}


