'use client';

import React from 'react';
import { applicationProcess } from '../app/data/positions';

const ApplicationProcess = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple Application Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've streamlined the process to make it easy for you to join our founding team.
            No lengthy applications or complex requirements - just your interest and commitment.
          </p>
        </div>

        {/* Requirements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Basic Requirements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applicationProcess.requirements.map((requirement, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#4EA2DA] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">{requirement}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Steps */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">3 Simple Steps</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {applicationProcess.steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#4EA2DA] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {index + 1}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h4>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div id="application-form" className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-[#4EA2DA]">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Apply Now</h3>
          <p className="text-center text-gray-600 mb-6">Fill out our quick application form below to join the PMI CCVC team!</p>
          <div className="flex justify-center">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdUqIKfg8JZx7TH11XuUC3pqFuVlUqA8g32nq6par3JhRZknQ/viewform?embedded=true"
              width="100%"
              height="1200"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="rounded-lg border-2 border-[#4EA2DA] w-full max-w-4xl"
              style={{
                minHeight: '800px',
                transform: 'scale(1.02)',
                transformOrigin: 'top center'
              }}
              title="PMI CCVC Application Form"
            >
              Loading application form...
            </iframe>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            Takes less than 5 minutes to complete
          </p>
          <p className="text-center text-sm mt-2">
            <span className="text-gray-600">Having trouble with the form? </span>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdUqIKfg8JZx7TH11XuUC3pqFuVlUqA8g32nq6par3JhRZknQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4EA2DA] hover:text-[#4EA2DA]/80 font-semibold underline"
            >
              Open in new tab ↗
            </a>
          </p>
        </div>

        {/* Interview Process */}
        <div className="mt-16 bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-8 border-2 border-[#F97316]">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Informal Interview: What to Expect</h3>
          <div className="grid md:grid-cols-1 gap-8">
            <div>
              <h4 className="font-semibold text-[#4EA2DA] mb-4">💡 Conversation Starters & Tips</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#4EA2DA] rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">No need to stress – this is a relaxed, get-to-know-you chat</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#4EA2DA] rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Share what interests you about project management or leadership</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#4EA2DA] rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Tell us about any experience (clubs, work, volunteering) – or just your curiosity!</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#4EA2DA] rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Ask questions about the club, our activities, or what you hope to get out of it</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#4EA2DA] rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Show your enthusiasm for learning and being part of a team</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;