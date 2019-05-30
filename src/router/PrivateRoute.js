import React  from 'react';
import {Route,Redirect} from 'react-router-dom';
import {fakeAuth} from '../util/fakeAuth';
const PrivateRoute = ({component:Component,...rest})=>{
    console.log(Component);
    console.log(rest);
    return (
        <Route 
            {...rest}
            render={props=>fakeAuth.isAuthenticated?(<Component {...props}/>):(
                <Redirect to={{
                    pathname:'/login',
                    state:{from:props.location}
                }}/>
            )}>
        </Route>
    )
}
export default PrivateRoute;