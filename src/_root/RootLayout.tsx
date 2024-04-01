import { Link, Outlet } from "react-router-dom";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { navigationLinks } from "@/constants";
import FooterDemo from "@/_root/components/FooterDemo";
import { Button } from "@/components/ui/button";
import "/globals.css";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <NavigationMenu className="w-full border-sky-500">
          <NavigationMenuList className="flex items-center justify-between py-4 px-4 md:px-8 border-b">
            <NavigationMenuItem asChild className="hover:scale-105">
              <Link to="/">
                <div>
                  <img src="/unFeathered.png" alt="Logo" className="h-8 w-auto" />
                </div>
              </Link>
            </NavigationMenuItem>
            <div className="flex flex-grow md:flex space-x-4">
              {navigationLinks.map((link, index) => (
                <NavigationMenuItem asChild key={index}>
                  <Link to={link.route} className="flex items-center space-x-1 text-gray-700 hover:underline font-semibold">
                    {link.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </div>
            <div className="flex md:flex md:flex-grow space-x-1">
              <NavigationMenuItem asChild className="justify-end">
                <Link to="/sign-in">
                  <div>
                    <Button onClick={() => sessionStorage.clear()}>
                      <img src="/assets/icons/logout.png" alt="Log Out" className="h-8 w-auto " />
                      <p className="text-red ml-2">Sign Out</p>
                    </Button>
                  </div>
                </Link>
              </NavigationMenuItem>
            </div>
          </NavigationMenuList>
        </NavigationMenu>

      </div>
      <div className="flex flex-1 justify-center items-center w-full">
        <Outlet />
      </div>
      <FooterDemo />
    </div>
  );
};

export default RootLayout;