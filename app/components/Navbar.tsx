import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          MyStore
        </Link>
        <div>
          <Link
            href="/"
            className="mr-6 hover:text-blue-400 transition-colors duration-300"
          >
            Products
          </Link>
          <Link
            className="hover:text-blue-400 transition-colors duration-300"
            href="/product-listing"
          >
            Product Listing
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
