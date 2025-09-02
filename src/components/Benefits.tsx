'use client';

import React from 'react';
import { benefits } from '../app/data/positions';

const Benefits = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Join as a <span className="text-[#F97316]">Founding Officer</span>?
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            This isn't just another club activity – it's your launchpad for building professional networks, developing leadership and project skills, and making a positive impact through social good projects.
            Certifications (PMP, CAPM, PMI-ACP) are a valuable benefit, but our club also offers networking, skill-building, employability, and opportunities to contribute to the community.
          </p>
        </div>

        {/* Immediate Benefits */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Immediate Benefits</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.immediate.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#F97316] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg leading-relaxed">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Long-term Benefits */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Long-term Career Impact</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.longTerm.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#4EA2DA] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg leading-relaxed">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Criteria */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-center mb-8">What Makes a Successful Founding Officer?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4EA2DA] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2">Reliable</h4>
              <p className="text-purple-100 text-sm">Shows up, follows through, and keeps commitments</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F97316] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2">Interested</h4>
              <p className="text-purple-100 text-sm">Genuine curiosity about project management</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6B46C1] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2">Communicative</h4>
              <p className="text-purple-100 text-sm">Works well with others and represents the club</p>
            </div>
          </div>
        </div>

        {/* Certification Support */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Professional Certification Support</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-lg p-4 border border-[#F97316]/30">
                <div className="text-xl font-bold text-[#F97316] mb-2">PMP</div>
                <div className="text-sm text-purple-100">Project Management Professional</div>
                <div className="text-xs text-purple-200 mt-1">35 contact hours required</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 border border-[#4EA2DA]/30">
                <div className="text-xl font-bold text-[#4EA2DA] mb-2">CAPM</div>
                <div className="text-sm text-purple-100">Certified Associate in Project Management</div>
                <div className="text-xs text-purple-200 mt-1">23 contact hours required</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 border border-[#6B46C1]/30">
                <div className="text-xl font-bold text-[#6B46C1] mb-2">PMI-ACP</div>
                <div className="text-sm text-purple-100">Agile Certified Practitioner</div>
                <div className="text-xs text-purple-200 mt-1">21 contact hours required</div>
              </div>
            </div>
            <p className="text-purple-100">
              We provide workshops, study groups, and industry connections to help you earn these valuable certifications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;