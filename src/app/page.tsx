'use client'

import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className="github-profile" >
                <img src="https://placehold.it/75" />
                <div className="info">
                    <div className="name">Name here...</div>
                    <div className="company">Company here..</div>
                </div>
            </div >
        );
    }
}

class App extends React.Component {
    render() {
        return (<div>
            <div className="header">{this.props.title}</div>
            <Card />
        </div>);
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

