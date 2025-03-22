import React from 'react';
import PropTypes from 'prop-types';
import { ChevronRight, CheckCircle2, Circle, Star, Timer, Book } from 'lucide-react';
import { Link } from 'react-router';

function RoadmapSection({ title, description, topics, gradient }) {
  return (
    <div className="mb-16 relative">
      <div className={`absolute inset-0 ${gradient} opacity-5 rounded-3xl -m-6 p-6`} />
      <h2 className="text-3xl font-bold gradient-text mb-3">{title}</h2>
      <p className="text-gray-600 mb-8 text-lg">{description}</p>
      <div className="space-y-6">
        {topics.map((topic) => (
            <Link to={topic.link} className='block'>
          <div
            key={topic.id}
            className="card-3d bg-white rounded-xl p-6 border border-gray-100"
          >
            <div className="flex items-start gap-4">
              {topic.completed ? (
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              ) : (
                <Circle className="w-6 h-6 text-gray-300 flex-shrink-0 mt-1" />
              )}
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{topic.title}</h3>
                  <div className="flex items-center gap-2 text-sm">
                    {topic.difficulty && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        <Star className="w-3 h-3 mr-1" />
                        {topic.difficulty}
                      </span>
                    )}
                    {topic.duration && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        <Timer className="w-3 h-3 mr-1" />
                        {topic.duration}
                      </span>
                    )}
                    {topic.resources && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <Book className="w-3 h-3 mr-1" />
                        {topic.resources} Resources
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-gray-600">{topic.description}</p>
              </div>
              <button className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors">
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
            </Link>
        ))}
      </div>
    </div>
  );
}

RoadmapSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  gradient: PropTypes.string.isRequired,
  topics: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    completed: PropTypes.bool,
    duration: PropTypes.string,
    difficulty: PropTypes.oneOf(['Beginner', 'Intermediate', 'Advanced']),
    resources: PropTypes.number
  })).isRequired
};

export default RoadmapSection;