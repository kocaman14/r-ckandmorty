import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#c2dedc] py-5">
      <div className="flex flex-wrap justify-between items-start">
        <div className="flex-1 min-w-[200px] mb-5">
          <ul>
            <li>This website was made using</li>
            <li>the Rick and Morty API at</li>
            <li>
              <a
                href="https://rickandmortyapi.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://rickandmortyapi.com/
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 min-w-[200px] mb-5">
          <ul>
            <li></li>
            <li></li>
            <li>
              <p>
                <a
                  href="https://www.linkedin.com/"
                  className="text-blue-600 hover:underline"
                >
                  Visit My LinkedIn
                </a>
              </p>
            </li>
          </ul>
        </div>
        <div className="flex-1 min-w-[200px] mb-5">
          <p>
            <a
              href="https://www.netlify.app/"
              className="text-blue-600 hover:underline"
            >
              Visit My Portfolio
            </a>
          </p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="w-full text-center mt-5">
        <p>&copy; {new Date().getFullYear()} Rick and Morty Universe</p>
      </div>
    </footer>
  );
};

export default Footer;
