import Link from 'next/link';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <FaExclamationTriangle className="text-warning text-8xl animate-bounce" />
        </div>
        <h1 className="text-9xl font-extrabold text-primary">404</h1>
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Oops! Page Not Found</h2>
          <p className="text-gray-500 max-w-sm mx-auto">
            The page you are looking for might have been removed or is temporarily unavailable.
          </p>
        </div>
        <Link href="/">
          <button className="btn btn-primary btn-wide gap-2">
            <FaHome /> Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}