'use client'

import React from 'react';

 class App extends React.Component {
    render() {
        return <div className="header">{this.props.title}</div>;
    }
}

class MainApp extends React.Component {
    render() {
        return <App title="The Github Cards App" />
    }
}
export default MainApp;
// import Image from 'next/image'

// export default function Home() {
//   return (
//     <main>
//       Hello
//     </main>
//   )
// }

