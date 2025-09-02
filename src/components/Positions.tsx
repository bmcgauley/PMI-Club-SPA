'use client';

import React, { useState } from 'react';
import { positions, Position } from '../app/data/positions';
import PositionModal from './PositionModal';

const Positions = () => {
  const [selectedPosition, setSelectedPosition] = useState<Position | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (position: Position) => {
    setSelectedPosition(position);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPosition(null);
  };

  const scrollToApplication = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Available Founding Positions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in launching CSU Fresno's first Project Management Institute Student Chapter.
            Officer time commitment is typically 1–3 hours/week, with flexibility for busier times like events or projects.
          </p>
        </div>

        {/* Officer Positions Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Core Officer Positions</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {positions
              .filter(position =>
                ['president', 'vice-president', 'treasurer', 'secretary'].includes(position.id)
              )
              .map((position) => (
              <div
                key={position.id}
                onClick={() => !position.isFilled && openModal(position)}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 cursor-pointer ${
                  position.isFilled
                    ? 'border-gray-200 bg-gray-50 cursor-not-allowed'
                    : 'border-[#6B46C1] hover:border-[#F97316] hover:shadow-orange-100'
                 }`}
              >
                {/* Status Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                  position.isFilled
                    ? 'bg-gray-100 text-gray-700'
                    : 'bg-[#F97316] text-white'
                }`}>
                  {position.isFilled ? 'FILLED' : 'AVAILABLE'}
                </div>

                {/* Header */}
                <div className={`p-6 ${position.isFilled ? 'bg-gray-100' : 'bg-gradient-to-r from-[#6B46C1] to-[#6B46C1]'}`}>
                  <h3 className={`text-2xl font-bold ${position.isFilled ? 'text-gray-800' : 'text-white'}`}>
                    {position.title}
                  </h3>
                  <p className={`text-sm mt-2 ${position.isFilled ? 'text-gray-600' : 'text-purple-100'}`}>
                    ⏰ {position.timeCommitment}
                  </p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Key Responsibilities:</h4>
                  <ul className="space-y-3">
                    {position.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start">
                        <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                          position.isFilled ? 'bg-gray-400' : 'bg-[#F97316]'
                        }`}></div>
                        <span className="text-gray-700 text-sm leading-relaxed">{responsibility}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Buttons */}
                  <div className="mt-6 space-y-3">
                    {!position.isFilled && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openModal(position);
                          }}
                          className="w-full bg-gradient-to-r from-[#6B46C1] to-[#6B46C1] hover:from-[#6B46C1]/90 hover:to-[#6B46C1]/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 border-2 border-[#6B46C1]"
                        >
                          ℹ️ Information
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            scrollToApplication();
                          }}
                          className="w-full bg-gradient-to-r from-[#F97316] to-[#F97316] hover:from-[#F97316]/90 hover:to-[#F97316]/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 border-2 border-[#F97316]"
                        >
                          Apply Now
                        </button>
                      </>
                    )}
                    {position.isFilled && (
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                        <p className="text-gray-700 font-medium text-sm">
                          Position Currently Filled
                        </p>
                        <p className="text-gray-600 text-xs mt-1">
                          Check back for future opportunities
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* General Membership Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">General Membership</h3>
          <div className="max-w-md mx-auto">
            {positions.filter(position => position.id === 'general-member').map((position) => (
              <div
                key={position.id}
                onClick={() => !position.isFilled && openModal(position)}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 cursor-pointer ${
                  position.isFilled
                    ? 'border-gray-200 bg-gray-50 cursor-not-allowed'
                    : 'border-[#4EA2DA] hover:border-[#F97316] hover:shadow-blue-100'
                 }`}
              >
                {/* Status Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                  position.isFilled
                    ? 'bg-gray-100 text-gray-700'
                    : 'bg-[#4EA2DA] text-white'
                }`}>
                  {position.isFilled ? 'FILLED' : 'AVAILABLE'}
                </div>

                {/* Header */}
                <div className={`p-6 ${position.isFilled ? 'bg-gray-100' : 'bg-gradient-to-r from-[#4EA2DA] to-[#4EA2DA]'}`}>
                  <h3 className={`text-2xl font-bold ${position.isFilled ? 'text-gray-800' : 'text-white'}`}>
                    {position.title}
                  </h3>
                  <p className={`text-sm mt-2 ${position.isFilled ? 'text-gray-600' : 'text-blue-100'}`}>
                    ⏰ {position.timeCommitment}
                  </p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Membership Benefits:</h4>
                  <ul className="space-y-3">
                    {position.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start">
                        <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                          position.isFilled ? 'bg-gray-400' : 'bg-[#4EA2DA]'
                        }`}></div>
                        <span className="text-gray-700 text-sm leading-relaxed">{responsibility}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Buttons */}
                  <div className="mt-6 space-y-3">
                    {!position.isFilled && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openModal(position);
                          }}
                          className="w-full bg-gradient-to-r from-[#4EA2DA] to-[#4EA2DA] hover:from-[#4EA2DA]/90 hover:to-[#4EA2DA]/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 border-2 border-[#4EA2DA]"
                        >
                          ℹ️ Information
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            scrollToApplication();
                          }}
                          className="w-full bg-gradient-to-r from-[#F97316] to-[#F97316] hover:from-[#F97316]/90 hover:to-[#F97316]/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 border-2 border-[#F97316]"
                        >
                          Join as Member
                        </button>
                      </>
                    )}
                    {position.isFilled && (
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                        <p className="text-gray-700 font-medium text-sm">
                          Position Currently Filled
                        </p>
                        <p className="text-gray-600 text-xs mt-1">
                          Check back for future opportunities
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        {(() => {
          const coreAndMember = positions.filter(
            p => ['president', 'vice-president', 'treasurer', 'secretary', 'general-member'].includes(p.id)
          );
          const total = coreAndMember.length;
          const available = coreAndMember.filter(p => !p.isFilled).length;
          return (
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md text-center border-2 border-[#4EA2DA]">
                <div className="text-3xl font-bold text-[#4EA2DA] mb-2">{total}</div>
                <div className="text-gray-600">Total Opportunities</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md text-center border-2 border-[#F97316]">
                <div className="text-3xl font-bold text-[#F97316] mb-2">{available}</div>
                <div className="text-gray-600">Available Now</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md text-center border-2 border-[#6B46C1]">
                <div className="text-3xl font-bold text-[#6B46C1] mb-2">1–3</div>
                <div className="text-gray-600">Hours/Week</div>
              </div>
            </div>
          );
        })()}
      </div>

      {/* Position Modal */}
      <PositionModal
        position={selectedPosition}
        isOpen={isModalOpen}
        onClose={closeModal}
        onApply={scrollToApplication}
      />
    </section>
  );
};

export default Positions;