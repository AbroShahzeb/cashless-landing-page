import logo from "../assets/logo.png";

export default function Navigation() {
  return (
    <nav className="container flex justify-between m-4 mx-auto max-w-[1140px] p-8 md:p-4">
      <img src={logo} alt="Website Logo" className="h-12" />
      <p>Menu</p>
    </nav>
  );
}
