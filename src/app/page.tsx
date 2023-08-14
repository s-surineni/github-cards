'use client'

import React from 'react';


const testData = [
        {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];


class Card extends React.Component {
    render() {
        const profile = this.props;
        return (
            <div className="github-profile" >
                <img src={profile.avatar_url} />
                <div className="info">
                    <div className="name">{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div >
        );
    }
}

const CardList = (props) => (
    <div>
        {testData.map(profile => <Card {...profile} />)}
    </div>
);




class App extends React.Component {
    render() {
        return (<div>
            <div className="header">{this.props.title}</div>
            <CardList />
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

