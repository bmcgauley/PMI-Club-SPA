'use client';

import React from 'react';
import { Certification } from '../app/data/certifications';

interface CertificationModalProps {
  certification: Certification | null;
  isOpen: boolean;
  onClose: () => void;
}

const CertificationModal: React.FC<CertificationModalProps> = ({ certification, isOpen, onClose }) => {
  if (!isOpen || !certification) return null;

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
      <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#6B46C1] to-[#4EA2DA] text-white p-6 rounded-t-2xl">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-4xl font-bold mb-2">{certification.code}</h2>
              <p className="text-xl text-purple-100 mb-2">{certification.fullName}</p>
              <p className="text-purple-100 text-lg">{certification.name}</p>
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
        <div className="p-6 space-y-8">
          {/* Overview */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Certification Overview</h3>
            <p className="text-gray-700 leading-relaxed text-lg">{certification.description}</p>
          </div>

          {/* Cost Information */}
          <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-xl p-6 border-2 border-[#F97316]">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Cost & Investment</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-[#6B46C1] mb-3">Pricing</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">PMI Member Price:</span>
                    <span className="font-bold text-green-600">${certification.cost.memberPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Non-Member Price:</span>
                    <span className="font-bold text-red-600">${certification.cost.nonMemberPrice}</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="text-gray-600 font-semibold">Estimated Savings:</span>
                    <span className="font-bold text-[#F97316]">{certification.cost.estimatedDiscount}</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#6B46C1] mb-3">Salary Impact</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average Salary:</span>
                    <span className="font-bold text-green-600">{certification.salaryData.averageSalary}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Entry Level:</span>
                    <span className="font-bold text-blue-600">{certification.salaryData.entryLevelSalary}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Experienced:</span>
                    <span className="font-bold text-purple-600">{certification.salaryData.experiencedSalary}</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="text-gray-600 font-semibold">Salary Increase:</span>
                    <span className="font-bold text-[#F97316]">{certification.salaryData.salaryIncrease}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Source: {certification.salaryData.source} ({certification.salaryData.year})
                </p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Disclaimer:</strong> {certification.cost.disclaimer}
              </p>
            </div>
          </div>

          {/* Requirements */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#6B46C1] mb-2">Education</h4>
                <p className="text-gray-700">{certification.requirements.education}</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#6B46C1] mb-2">Experience</h4>
                <p className="text-gray-700">{certification.requirements.experience}</p>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold text-[#6B46C1] mb-2">Prerequisites</h4>
              <ul className="space-y-2">
                {certification.requirements.prerequisites.map((prereq, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-[#4EA2DA] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{prereq}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Exam Information */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Exam Information</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#4EA2DA] mb-1">{certification.examInfo.questions}</div>
                <div className="text-sm text-gray-600">Questions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#F97316] mb-1">{certification.examInfo.duration}</div>
                <div className="text-sm text-gray-600">Duration</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-[#6B46C1] mb-1">{certification.examInfo.format}</div>
                <div className="text-sm text-gray-600">Format</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-green-600 mb-1">{certification.examInfo.passingScore}</div>
                <div className="text-sm text-gray-600">Passing Score</div>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold text-[#6B46C1] mb-2">Available Languages</h4>
              <p className="text-gray-700 text-sm">
                {certification.examInfo.languages.join(', ')}
              </p>
            </div>
          </div>


          {/* Is this certification right for you? */}
          {certification.id === 'pmp' && (
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border-2 border-[#6B46C1]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Is a PMP Right for You?</h3>
              <div className="space-y-4">
                <div className="bg-white/70 rounded-lg p-4">
                  <p className="text-gray-800 mb-3">
                    The PMP certification proves you have the project leadership and expertise in any way of working: predictive, hybrid or agile. It demonstrates your ability to lead projects without being tied to any specific industry or geographic location.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-2xl font-bold text-green-800">33%</p>
                      <p className="text-sm text-green-700">Higher median salaries for PMP certification holders</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-green-800">1.5M+</p>
                      <p className="text-sm text-green-700">PMP certification holders worldwide</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-[#6B46C1] mb-3">PMP Exam Details:</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center bg-blue-50 rounded-lg p-3">
                      <p className="text-lg font-bold text-blue-800">180</p>
                      <p className="text-sm text-blue-700">Questions</p>
                    </div>
                    <div className="text-center bg-orange-50 rounded-lg p-3">
                      <p className="text-lg font-bold text-orange-800">230 min</p>
                      <p className="text-sm text-orange-700">Duration</p>
                    </div>
                    <div className="text-center bg-purple-50 rounded-lg p-3">
                      <p className="text-lg font-bold text-purple-800">16</p>
                      <p className="text-sm text-purple-700">Languages</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Is PMI-ACP Right for You? */}
          {certification.id === 'pmi-acp' && (
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border-2 border-green-400">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Is PMI-ACP Right for You?</h3>
              <div className="space-y-4">
                <div className="bg-white/70 rounded-lg p-4">
                  <p className="text-gray-800 mb-3">
                    Organizations that embrace agility and adaptability outperform their counterparts, resulting in increased value. With the demand for agile practitioners soaring, the PMI-ACP certification is more valuable than ever.
                  </p>
                  <p className="text-gray-700 text-sm">
                    Developed by agile leaders, this certification equips agile practitioners with the mindset to apply agile principles effectively, along with the tools and skills needed to collaborate in any agile environment.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-2xl font-bold text-green-800">86%</p>
                      <p className="text-sm text-green-700">of PMI-ACPs qualified for new opportunities</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-green-800">84%</p>
                      <p className="text-sm text-green-700">of PMI-ACPs gained recognition for career advancement</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-green-700 mb-3">PMI-ACP Exam Details:</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center bg-blue-50 rounded-lg p-3">
                      <p className="text-lg font-bold text-blue-800">120</p>
                      <p className="text-sm text-blue-700">Questions</p>
                    </div>
                    <div className="text-center bg-orange-50 rounded-lg p-3">
                      <p className="text-lg font-bold text-orange-800">180 min</p>
                      <p className="text-sm text-orange-700">Duration</p>
                    </div>
                    <div className="text-center bg-purple-50 rounded-lg p-3">
                      <p className="text-lg font-bold text-purple-800">10</p>
                      <p className="text-sm text-purple-700">Languages</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Path to PMI-ACP Certification */}
          {certification.id === 'pmi-acp' && (
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-2 border-green-400">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Path to PMI-ACP Certification</h3>
              <div className="grid md:grid-cols-5 gap-4 mb-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#4EA2DA] rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-2">1</div>
                  <p className="text-sm text-gray-700">Check eligibility and prepare</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#F97316] rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-2">2</div>
                  <p className="text-sm text-gray-700">Complete the application</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#6B46C1] rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-2">3</div>
                  <p className="text-sm text-gray-700">Pay and schedule the exam</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-2">4</div>
                  <p className="text-sm text-gray-700">Study for the exam</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-2">5</div>
                  <p className="text-sm text-gray-700">Take the exam</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-700 mb-3">Eligibility Requirements:</h4>
                  <div className="bg-white/70 rounded-lg p-4">
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Secondary degree (high school diploma, GED, or equivalent)</li>
                      <li>• 24 months/2 years of agile experience within the last 5 years</li>
                      <li>• 28 hours of training in agile practices, frameworks, and methodologies</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> A current PMP® certification satisfies the agile experience requirement but is not mandatory.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Path to PMP Certification */}
          {certification.id === 'pmp' && (
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border-2 border-[#F97316]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Path to PMP Certification</h3>
              <div className="grid md:grid-cols-5 gap-4 mb-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#4EA2DA] rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-2">1</div>
                  <p className="text-sm text-gray-700">Check eligibility and prepare</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#F97316] rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-2">2</div>
                  <p className="text-sm text-gray-700">Complete the application</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#6B46C1] rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-2">3</div>
                  <p className="text-sm text-gray-700">Pay and schedule the exam</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-2">4</div>
                  <p className="text-sm text-gray-700">Study for the exam</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-2">5</div>
                  <p className="text-sm text-gray-700">Take the exam</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#F97316] mb-3">Eligibility Requirements (Choose One Set):</h4>
                  <div className="space-y-3">
                    <div className="bg-white/70 rounded-lg p-4">
                      <h5 className="font-semibold text-[#4EA2DA] mb-2">Set A Requirements:</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• High school or secondary school diploma</li>
                        <li>• Minimum 60 months/5 years of project management experience</li>
                        <li>• 35 hours of project management education/training</li>
                      </ul>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4">
                      <h5 className="font-semibold text-[#F97316] mb-2">Set B Requirements:</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Bachelor's degree or higher</li>
                        <li>• 36 months/3 years of project management experience</li>
                        <li>• 35 hours of project management education/training</li>
                      </ul>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4">
                      <h5 className="font-semibold text-[#6B46C1] mb-2">Set C Requirements:</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Bachelor's degree from GAC accredited program</li>
                        <li>• 24 months/2 years of project management experience</li>
                        <li>• 35 hours of project management education/training</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Is this certification right for you? */}
          {certification.id === 'capm' && (
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-[#4EA2DA]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Is a CAPM Right for You?</h3>
              <div className="space-y-4">
                <div className="bg-white/70 rounded-lg p-4">
                  <p className="text-gray-800 mb-3">
                    <strong className="text-[#4EA2DA]">The CAPM is ranked #1</strong> out of "The 9 Most In-Demand Professional Certifications" according to Entrepreneur Media, Inc.
                  </p>
                  <p className="text-gray-700 text-sm">
                    Earning your CAPM certification can help with career advancement, increase your earning potential, and position you to pursue any of our major certifications including the gold standard in project management certification, the PMP.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#4EA2DA] mb-3">Common Career Paths with CAPM:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#F97316] rounded-full mr-3"></div>
                      <span className="text-gray-700 text-sm">Assistant Project Manager</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#F97316] rounded-full mr-3"></div>
                      <span className="text-gray-700 text-sm">Project Coordinator</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#F97316] rounded-full mr-3"></div>
                      <span className="text-gray-700 text-sm">Project Administrator</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#F97316] rounded-full mr-3"></div>
                      <span className="text-gray-700 text-sm">Project Analyst</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#F97316] rounded-full mr-3"></div>
                      <span className="text-gray-700 text-sm">Project Manager</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#F97316] rounded-full mr-3"></div>
                      <span className="text-gray-700 text-sm">Technical Project Manager</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-bold text-green-800">1.7M+</p>
                      <p className="text-sm text-green-700">PMI certification holders worldwide</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-green-800">$72,000</p>
                      <p className="text-sm text-green-700">Average salary for CAPM-certified PMs</p>
                      <p className="text-xs text-green-600">Source: Forbes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Path to Certification */}
          {certification.id === 'capm' && (
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border-2 border-[#6B46C1]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Path to CAPM Certification</h3>
              <div className="grid md:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#4EA2DA] rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-2">1</div>
                  <p className="text-sm text-gray-700">Check eligibility and prepare</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#F97316] rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-2">2</div>
                  <p className="text-sm text-gray-700">Complete the application</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#6B46C1] rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-2">3</div>
                  <p className="text-sm text-gray-700">Pay and schedule the exam</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-2">4</div>
                  <p className="text-sm text-gray-700">Study for the exam</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-2">5</div>
                  <p className="text-sm text-gray-700">Take the exam</p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-[#6B46C1] mb-3">Eligibility Requirements:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#4EA2DA] rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700 text-sm">Secondary degree (high school diploma, GED, or equivalent)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700 text-sm">At least 23 hours of project management education</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-6 rounded-b-2xl flex justify-between items-center">
          <a
            href={certification.pmiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#4EA2DA] to-[#6B46C1] text-white font-semibold py-3 px-6 rounded-lg hover:from-[#4EA2DA]/90 hover:to-[#6B46C1]/90 transition-all duration-300"
          >
            Learn More on PMI.org
          </a>
          <button
            onClick={onClose}
            className="px-6 py-3 border-2 border-[#6B46C1] text-[#6B46C1] rounded-lg hover:bg-[#6B46C1] hover:text-white transition-colors duration-300 font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificationModal;