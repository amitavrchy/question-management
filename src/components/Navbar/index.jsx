"use client";
import React, { useState } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-red-600">QA</h1>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-md px-3 py-2">
            <Search className="h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="কোর্স, বিষয়ের নাম লিখুন..."
              className="bg-transparent outline-none ml-2 text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-red-500"
                >
                  <span>{item.name}</span>
                  {item.sublinks && <ChevronDown className="h-4 w-4" />}
                </button>
                {item.sublinks && dropdownOpen === index && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                    {item.sublinks.map((sublink, subIndex) => (
                      <a
                        key={subIndex}
                        href={sublink.link}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {sublink.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isOpen && (
          <div className="md:hidden flex items-center bg-gray-100 rounded-md px-3 py-2 my-2">
            <Search className="h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="কোর্স, বিষয়ের নাম লিখুন..."
              className="bg-transparent outline-none ml-2 text-sm w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        )}

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            {menuItems.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleDropdown(index)}
                  className="w-full flex justify-between px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  <span>{item.name}</span>
                  {item.sublinks && <ChevronDown className="h-4 w-4" />}
                </button>
                {item.sublinks && dropdownOpen === index && (
                  <div className="bg-gray-50">
                    {item.sublinks.map((sublink, subIndex) => (
                      <a
                        key={subIndex}
                        href={sublink.link}
                        className="block px-8 py-2 text-gray-700 hover:bg-gray-200"
                      >
                        {sublink.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

const menuItems = [
  {
    name: "ক্লাস ৬-১২",
    sublinks: [
      { name: "ক্লাস ৬", link: "/class-6" },
      { name: "ক্লাস ৭", link: "/class-7" },
      { name: "ক্লাস ৮", link: "/class-8" },
    ],
  },
  {
    name: "স্কিলস",
    sublinks: [
      { name: "প্রোগ্রামিং", link: "/programming" },
      { name: "ডিজাইন", link: "/design" },
      { name: "ডিজিটাল মার্কেটিং", link: "/marketing" },
    ],
  },
  {
    name: "ভর্তি পরীক্ষা",
    sublinks: [
      { name: "বিশ্ববিদ্যালয় ভর্তি", link: "/university-admission" },
      { name: "বিসিএস প্রস্তুতি", link: "/bcs" },
    ],
  },
  {
    name: "অনলাইন ব্যাচ",
    sublinks: [
      { name: "বিজ্ঞান বিভাগ", link: "/science-batch" },
      { name: "ব্যবসা শিক্ষা", link: "/business-batch" },
    ],
  },
  {
    name: "ইংলিশ সেন্টার",
    sublinks: [
      { name: "স্পোকেন ইংলিশ", link: "/spoken-english" },
      { name: "আইইএলটিএস", link: "/ielts" },
    ],
  },
];

export default Navbar;
