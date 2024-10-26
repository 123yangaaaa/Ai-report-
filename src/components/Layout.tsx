import { UserButton } from '@clerk/clerk-react';
import { LayoutDashboard, Users, Settings, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Users, label: 'Students', path: '/students' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-indigo-600">EduApp</span>
            </div>
            <div className="flex items-center gap-4">
              <UserButton afterSignOutUrl="/sign-in" />
            </div>
          </div>
        </div>
      </nav>

      <div className="flex pt-16">
        <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-200">
          <nav className="p-4 space-y-2">
            {navItems.map(({ icon: Icon, label, path }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                  location.pathname === path
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{label}</span>
              </Link>
            ))}
          </nav>
        </aside>

        <main className="flex-1 ml-64">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;