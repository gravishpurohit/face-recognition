import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {

    if (isSignedIn) {
        return(
        <nav 
        style={{display: 'flex', justifycontent:'flex-start'}}
        >
        <p onClick={() => onRouteChange('signout')}
        className='tr f4 Courier link dim black underline pa3 pointer '>Sign out</p>
    </nav> 
    );
    }
    else {
    return  (
    <nav 
    style={{display: 'flex', justifycontent:'flex-start'}}
    >
        <p onClick={() => onRouteChange('signin')}
        className='tr f4 Courier link dim black underline pa3 pointer '>Sign In</p>
         <p onClick={() => onRouteChange('Register')}
        className='tr f4 Courier link dim black underline pa3 pointer '>Register</p>

    </nav>
       

   );
}

}

export default Navigation;