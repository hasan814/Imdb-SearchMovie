import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="flex items-center justify-between">
        <p>
          Developed by <span>hasan moosavi </span>&copy;
          {new Date().getFullYear()} All rights reserved.
        </p>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
