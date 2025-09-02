'use client';

import React from 'react';
import { Position } from '../app/data/positions';

interface PositionModalProps {
  position: Position | null;
  isOpen: boolean;
  onClose: () => void;
  onApply: () => void;
}

const PositionModal: React.FC<PositionModalProps> = ({ position, isOpen, onClose, onApply }) => {
  if (!isOpen || !position) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-md flex items-center justify-center p-4 z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#6B46C1] to-[#4EA2DA] text-white p-6 rounded-t-2xl">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-bold mb-2">{position.title}</h2>
              <p className="text-purple-100 text-lg">⏰ {position.timeCommitment}</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-orange-200 text-2xl font-bold"
            >
              ×
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">





          {/* What You'll Gain */}
          {position.whatYoullGain && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">What You'll Gain</h3>
              <ul className="space-y-2">
                {position.whatYoullGain.map((gain, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{gain}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}


          {/* Position Details */}
          {position.positionDetails && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Position Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#6B46C1] mb-2">Overview</h4>
                  <p className="text-gray-700 leading-relaxed">{position.positionDetails.overview}</p>
                </div>

                {position.positionDetails.dailyExpectations && (
                  <div>
                    <h4 className="font-semibold text-[#6B46C1] mb-2">Daily Expectations</h4>
                    <ul className="space-y-1">
                      {position.positionDetails.dailyExpectations.map((expectation, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-[#4EA2DA] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{expectation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {position.positionDetails.growthOpportunities && (
                  <div>
                    <h4 className="font-semibold text-[#6B46C1] mb-2">Growth Opportunities</h4>
                    <ul className="space-y-1">
                      {position.positionDetails.growthOpportunities.map((opportunity, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-[#F97316] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{opportunity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {position.positionDetails.challenges && (
                  <div>
                    <h4 className="font-semibold text-[#6B46C1] mb-2">Challenges</h4>
                    <ul className="space-y-1">
                      {position.positionDetails.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-6 rounded-b-2xl flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-6 py-3 border-2 border-[#6B46C1] text-[#6B46C1] rounded-lg hover:bg-[#6B46C1] hover:text-white transition-colors duration-300 font-semibold"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onApply();
            }}
            className="px-6 py-3 bg-gradient-to-r from-[#4EA2DA] to-[#6B46C1] text-white rounded-lg hover:from-[#4EA2DA]/90 hover:to-[#6B46C1]/90 transition-all duration-300 font-semibold"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PositionModal;