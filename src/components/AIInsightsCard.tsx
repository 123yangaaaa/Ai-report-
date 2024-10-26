import React from 'react';
import { Brain } from 'lucide-react';

const AIInsightsCard = () => {
  const insights = [
    {
      title: 'Learning Pattern Detected',
      description: 'Students show 23% better retention when using interactive modules',
      time: '2h ago',
    },
    {
      title: 'Performance Insight',
      description: 'Math scores improved by 15% after implementing AI tutoring',
      time: '5h ago',
    },
    {
      title: 'Resource Optimization',
      description: 'Recommended resource reallocation could improve efficiency by 18%',
      time: '1d ago',
    },
  ];

  return (
    <div className="space-y-4">
      {insights.map((insight, index) => (
        <div key={index} className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
          <div className="bg-purple-100 p-2 rounded-lg h-fit">
            <Brain className="h-5 w-5 text-purple-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{insight.title}</h3>
            <p className="text-sm text-gray-600 mb-1">{insight.description}</p>
            <span className="text-xs text-gray-400">{insight.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AIInsightsCard;