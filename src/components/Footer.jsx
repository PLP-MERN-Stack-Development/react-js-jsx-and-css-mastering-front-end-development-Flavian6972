import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-8">
      <div className="mb-2">
        <a href="#" className="mx-2 hover:underline">Privacy Policy</a>
        <a href="#" className="mx-2 hover:underline">Terms of Service</a>
      </div>
      <p>© {new Date().getFullYear()} My Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
