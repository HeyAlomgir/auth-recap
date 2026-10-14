"use client";
import {Link, Button} from "@heroui/react";

const Navbar = () => {
    return (
        <div>
            

           

            {/* With right-aligned content */}
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
                <header className="flex h-16 items-center justify-between px-6">
                    <div>Logo</div>
                    <ul className="flex items-center gap-4">
                        <li><Button variant="secondary" color="red" red-500 ><Link href="/login">Login</Link></Button></li>
                        <li><Button variant="solid" color="primary">
                            <Link href="/signup">Sign Up</Link>
                        </Button></li>
                    </ul>
                </header>
            </nav>
        </div>
    );
};

export default Navbar;