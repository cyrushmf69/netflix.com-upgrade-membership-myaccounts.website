
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-netflix-black px-4 py-8 text-netflix-gray md:px-10 md:py-12">
      <div className="content-container">
        <div className="mb-6 flex items-center">
          <Link to="/" className="text-netflix-gray hover:text-netflix-lightgray">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </Link>
          <Link to="/" className="ml-6 text-netflix-gray hover:text-netflix-lightgray">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </Link>
          <Link to="/" className="ml-6 text-netflix-gray hover:text-netflix-lightgray">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
          <div>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:underline">Audio Description</Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">Investor Relations</Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">Legal Notices</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:underline">Help Center</Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">Jobs</Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">Cookie Preferences</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:underline">Gift Cards</Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">Terms of Use</Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">Corporate Information</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:underline">Media Center</Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">Privacy</Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>

        <button className="mt-6 border border-netflix-gray px-4 py-2 text-xs hover:text-white">
          Service Code
        </button>

        <div className="mt-6 text-xs">
          © 1997-{new Date().getFullYear()} Netflix Clone, Inc.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
