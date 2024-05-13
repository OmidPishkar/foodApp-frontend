import { useAuth0 } from "@auth0/auth0-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Separator } from "@radix-ui/react-separator";
import { CircleUserRound } from "lucide-react"
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const UsernameMenu = () => {
    
    const {user , logout , isLoading} = useAuth0();
    
    return (
        <DropdownMenu >
            <DropdownMenuTrigger 
                className="flex items-center font-bold px-3 hover:text-orange-500 gap-2"
            >
                <CircleUserRound className="text-orange-500"/>
                {user?.email  && !isLoading && <p>{user.email}</p>}
                {!user?.email && isLoading  && <p>Loading...</p>}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white px-5 py-4 space-y-2 rounded-lg">
                <DropdownMenuItem>
                    <Link 
                        to="/user-profile"
                        className="font-bold hover:text-orange-500 hover:border-0"
                    >
                        User Profile
                    </Link>
                </DropdownMenuItem>
                <Separator/>
                <DropdownMenuItem>
                    <Button 
                        onClick={() => logout()}
                        className="flex flex-1 font-bold bg-orange-500"
                    >
                        Log Out
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UsernameMenu