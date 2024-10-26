import { type LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  trend: string;
}

const StatCard = ({ icon: Icon, label, value, trend }: StatCardProps) => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <div className="flex items-center justify-between mb-4">
      <Icon className="h-6 w-6 text-indigo-600" />
      <span className={`text-sm font-medium ${
        trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
      }`}>{trend}</span>
    </div>
    <h3 className="text-2xl font-bold mb-1">{value}</h3>
    <p className="text-gray-600">{label}</p>
  </div>
);

export default StatCard;