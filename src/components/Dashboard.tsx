import { useUser } from '@clerk/clerk-react';
import { BarChart3, Users, BookOpen, TrendingUp } from 'lucide-react';
import StatCard from './StatCard';

const Dashboard = () => {
  const { user } = useUser();

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">
          Welcome back, {user?.firstName || 'User'}!
        </h1>
        <p className="text-gray-600">
          Here's what's happening with your educational insights today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={Users}
          label="Active Students"
          value="1,234"
          trend="+5.2%"
        />
        <StatCard
          icon={BookOpen}
          label="Learning Hours"
          value="892"
          trend="+12.3%"
        />
        <StatCard
          icon={BarChart3}
          label="Performance Score"
          value="85.7%"
          trend="+3.1%"
        />
        <StatCard
          icon={TrendingUp}
          label="Engagement Rate"
          value="76.8%"
          trend="-2.4%"
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <p className="text-gray-600">Your activity dashboard will appear here.</p>
      </div>
    </div>
  );
};

export default Dashboard;