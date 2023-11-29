import Link from "next/link";

const Navbar = ({children}) => {
    return (
        <header class="header">
        <a class="logo" href=".page-top">Demo App</a>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
          <li><Link href="/categories" class="link link-theme link-arrow">categories</Link></li>
          <li><Link href="/produits" class="link link-theme link-arrow">produits</Link></li>
          <li><Link href={
              {
                pathname: "/utilisateur/[username]",
                query: {
                  username: "user1"
                }
              }
            } class="link link-theme link-arrow">user1</Link></li>
          <li><Link href={
              {
                pathname: "/utilisateur/[username]",
                query: {
                  username: "user2"
                }
              }
            } class="link link-theme link-arrow">user2</Link></li>
        </ul>
      </header>
    );
  };
  export default Navbar;