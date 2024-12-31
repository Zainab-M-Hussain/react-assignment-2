
export default function Navbar() {
    return (
      <nav className="flex justify-between items-center p-6 bg-darkBlue">
        <div className="text-white text-lg font-bold">BrandName</div>
        <ul className="flex gap-6 text-white">
          <li>Home</li>
          <li>Product</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
        <div className="flex gap-4">
          <button className="text-white">Login</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">JOIN US</button>
        </div>
      </nav>
    );
  }
  