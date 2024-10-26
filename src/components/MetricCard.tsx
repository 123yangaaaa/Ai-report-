import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  trend: string;
  color: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ icon: Icon, label, value, trend, color }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-2 rounded-lg ${color.replace('text-', 'bg-').replace('600', '100')}`}>
          <Icon className={`h-5 w-5 ${color}`} />
        </div>
        <span className="text-green-600 text-sm font-medium">{trend}</span>
      </div>
      <h3 className="text-gray-500 text-sm mb-1">{label}</h3>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
};

export default MetricCard;