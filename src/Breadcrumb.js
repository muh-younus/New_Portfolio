// Breadcrumb.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation(); // Get the current route info

  // Break the current path into parts (e.g., "/degree" → ['degree'])
  const pathnames = location.pathname.split('/').filter(x => x);

  // Optional: map path segments to nicer display names
  const labelMap = {
    degree: 'Degree',
    project: 'Project',
  };

  return (
    <nav className="text-sm text-gray-600 my-4" aria-label="Breadcrumb">
      <ol className="flex items-center">
        {/* Home link always shown */}
        <li>
          <Link to="/" className="text-black hover:underline">Home</Link>
        </li>

        {/* Loop through each segment of the path */}
        {pathnames.map((segment, index) => {
          const routeTo = '/' + pathnames.slice(0, index + 1).join('/');
          const isLast = index === pathnames.length - 1;
          const label = labelMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);

          return (
            <li key={routeTo} className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              {isLast ? (
                <span className="text-gray-500">{label}</span> // Current page, no link
              ) : (
                <Link to={routeTo} className="text-blue-600 hover:underline">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
