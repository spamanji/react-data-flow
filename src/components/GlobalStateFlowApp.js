import React, { useState, useContext } from 'react';
import '../App.css';

/* Global state management - sharing state information between siblings.
Only using React Context API and useContext hook.
'CreateContext' to create a context. 
Provider to provide the context to required children.
'UseContext' hook in functional components and-
'contextType' or 'Consumer' in class components to consume and update context */

const UserContext = React.createContext({});

const GlobalStateFlowApp = () => {

    const user = {
        name: "Sabareesh",
        isLoggedIn: false,
        basket: 0
    };

    const [profile, setProfile] = useState(user);

    const toggleLoginStatus = () => {
        setProfile({ ...profile, isLoggedIn: !profile.isLoggedIn, basket: 0 });
    }

    const addToBasket = () => {
        setProfile({ ...profile, basket: profile.basket + 1 });
    }

    // this is how you provide context in functional components
    return <>
        <UserContext.Provider value={{ profile, toggleLoginStatus, addToBasket }}>
            <HomePage />
        </UserContext.Provider>
        <AdvertsPage />
    </>
}

const UserProfile = () => {
    const { profile, toggleLoginStatus } = useContext(UserContext);
    const buttonText = profile.isLoggedIn ? 'log-out' : 'log-in';

    return <>
        <h3> user {profile.name} is {profile.isLoggedIn ? 'logged in.' : 'logged out'} </h3>
        <button onClick={toggleLoginStatus}>{buttonText}</button>
        <AddToBasket />
        <h4>Items in basket are: {profile.basket}</h4>
    </>
}

const TopSearches = () => {
    return <h3> Top searched here. not specific to user. </h3>
}

const SearchForm = () => {
    return <h3> Search form here. not specific to user. </h3>
}

const AddToBasket = () => {
    const { profile, addToBasket } = useContext(UserContext);
    const basketButtonStyle = {
        display: profile.isLoggedIn ? 'inline' : 'none'
    }
    return <button style={basketButtonStyle} onClick={addToBasket}>Add To Basket</button>
}

const Favourites = () => {
    const { profile } = useContext(UserContext);
    let welcomeMessage = 'You are not logged in.';

    if (profile.isLoggedIn) {
        welcomeMessage = 'Hi ' + profile.name + ', welcome back!'
    }
    return <>
        <h3> Favorites here. specific to user: {profile.name} when they're logged in. </h3>
        <h3>{welcomeMessage}</h3>
        <AddToBasket />
    </>

    // The below is how its done in class components
    // return <UserContextConsumer>
    //     {props => {
    //         return <>
    //             <h3> Favorites here. specific to user: {props.user.name} when they're logged in. </h3>
    //             if({props.user.isLoggedIn}){
    //                 <h3>Only shown when logged in.</h3>
    //             }
    //         </>
    //     }}
    // </UserContextConsumer>

}

function HomePage() {
    const homeStyle = {
        color: 'blue',
        border: 'solid 1px',
        margin: '3px'
    }

    return <div style={homeStyle}>
        <h2>In Homepage</h2>
        <UserProfile />
        <Favourites />
        <TopSearches />
        <SearchForm />
    </div>
}

const DealOfTheWeek = () => {
    const user = useContext(UserContext);
    return <h4>Hello {user.name},Save Upto 50% on QLED TVs!</h4>
}

const Clearance = () => {
    return <h4>All Cookers must go. Upto 90% OFF!</h4>
}

function AdvertsPage() {
    const adStyle = {
        color: 'green',
        border: 'solid 1px',
        margin: '3px'
    }

    return <div style={adStyle}>
        <h2>In Ads page</h2>
        <DealOfTheWeek />
        <Clearance />
    </div>
}

export default GlobalStateFlowApp;