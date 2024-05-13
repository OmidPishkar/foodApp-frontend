import { useCreateMyUser } from "@/api/MyUserApi";
import { AppState, Auth0Provider, User } from "@auth0/auth0-react";

type Props = {
    children : React.ReactNode;
};

const Auth0ProviderWithNavigate : React.FC<Props> = ({children}) => {
    const {createUser} = useCreateMyUser(); 
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectURI = import.meta.env.VITE_AUTH0_CALLBACK_URI;

    if( !domain || !clientId || !redirectURI ){
        throw new Error("unable initialise auth")
    }

    const onRedirectCallback = (appState ?: AppState , user ?: User) => {
        if(user?.sub && user?.email){
            createUser({
                auth0Id : user.sub,
                email : user.email
            }).then
        }
    }

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                redirect_uri : redirectURI ,
            }}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    )
}

export default Auth0ProviderWithNavigate