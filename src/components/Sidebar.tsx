import React from 'react';
import { LucideIcon, Brain, LogOut } from 'lucide-react';
import { useClerk } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

interface MenuItem {
  icon: LucideIcon;
  label: string;
  active?: boolean;
}

interface SidebarProps {
  menuItems: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {
  const { signOut } = useClerk();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/sign-in');
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-6">
      <div className="flex items-center gap-3 mb-8">
        <Brain className="h-8 w-8 text-indigo-600" />
        <h1 className="text-xl font-bold">EduAI Hub</h1>
      </div>
      
      <nav className="flex flex-col h-[calc(100%-theme(space.8))]">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  item.active
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
        
        <button
          onClick={handleSignOut}
          className="mt-auto flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
        >
          <LogOut className="h-5 w-5" />
          <span className="font-medium">Sign Out</span>
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;