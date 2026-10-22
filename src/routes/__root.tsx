import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import logo from "@/assets/logo.png";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const RootLayout = () => (
  <>
    <div className="w-screen bg-primary text-primary-foreground font-medium">
      <NavigationMenu>
        <NavigationMenuItem>
          <img
            src={logo}
            alt="logo"
            className="m-2 mr-6 size-16 rounded-full bg-olive-200"
          />
        </NavigationMenuItem>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink render={<Link to="/">Início</Link>} />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              render={<Link to="/portifolio">Portifólio</Link>}
            />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink render={<Link to="/bio">Bio</Link>} />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
    <Outlet />
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
