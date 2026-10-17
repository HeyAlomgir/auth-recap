"use client";
import { authClient } from "@/lib/auth-client";
import { Link, Button } from "@heroui/react";

const Navbar = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const handleSignOut = async ()=>{
        await authClient.signOut();
    }

    return (
        <div>




            {/* With right-aligned content */}
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
                <header className="flex h-16 items-center justify-between px-6">
                    <div>Logo</div>
                    <div>
                        {user ? (<span className="flex items-center gap-5">Welcome, {user.name} <Button onClick={handleSignOut} className="text-red-300 text-2xl bg-black ">Logout</Button> </span> ) 
                            :
                            <ul className="flex items-center gap-4">
                                <li><Button variant="secondary" color="red" red-500 ><Link href="/login">Login</Link></Button></li>
                                <li><Button variant="solid" color="primary">
                                    <Link href="/signup">Sign Up</Link>
                                </Button></li>
                            </ul>}
                    </div>
                </header>
            </nav>
        </div>
    );
};

export default Navbar;