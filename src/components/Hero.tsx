'use client';

import React, { useState } from 'react';
import { certifications, Certification } from '../app/data/certifications';
import CertificationModal from './CertificationModal';

const Hero = () => {
  const [selectedCertification, setSelectedCertification] = useState<Certification | null>(null);
  const [isCertificationModalOpen, setIsCertificationModalOpen] = useState(false);

  const openCertificationModal = (certification: Certification) => {
    setSelectedCertification(certification);
    setIsCertificationModalOpen(true);
  };

  const closeCertificationModal = () => {
    setIsCertificationModalOpen(false);
    setSelectedCertification(null);
  };

  return (
    <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
            Project Management Institute Student Club
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-4">
            California State University, Fresno
          </p>
          <div className="inline-block px-6 py-2 bg-[#F97316] rounded-full text-sm font-semibold">
            Founding Officer Recruitment
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Launch the Future of <span className="text-[#F97316]">Project Management</span> at Fresno State
            </h2>
            <p className="text-lg text-purple-100 mb-8 leading-relaxed">
              We're launching the Project Management Institute Student Club at CSU Fresno! As a founding officer, you'll help establish a new student club in partnership with PMI Central Valley Chapter as part of PMI’s global Chapter Student Clubs program, shaping the future of project management education on campus.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#4EA2DA] rounded-full mr-3"></div>
                <span>Leadership experience from day one</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#F97316] rounded-full mr-3"></div>
                <span>Resume building with tangible organizational impact</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#6B46C1] rounded-full mr-3"></div>
                <span>Professional networking with PMI industry professionals</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#F97316] rounded-full mr-3"></div>
                <span>Project management skills development</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/10 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#F97316]">
            <h3 className="text-2xl font-bold mb-6 text-white">Certification Support</h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  onClick={() => openCertificationModal(cert)}
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-600/20 to-orange-500/10 rounded-lg border border-purple-500/30 cursor-pointer hover:from-purple-600/30 hover:to-orange-500/20 transition-all duration-300 hover:scale-105"
                >
                  <div>
                    <span className="font-semibold text-white">{cert.code}</span>
                    <span className="text-sm text-purple-100 block">{cert.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-purple-200">Click for details</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-orange-200 mt-4">
              <strong>Note:</strong> Certification costs shown in details are for the exams, not club membership dues.
            </p>
            <p className="text-center text-[#F97316] mt-6 text-sm font-semibold">
              Founding member status - permanent recognition
            </p>
            <div className="mt-8 bg-white/10 rounded-xl p-4 border border-white/20 max-w-md mx-auto">
              <span className="block text-lg font-bold text-[#F97316] mb-1">PMI Student Membership</span>
              <span className="block text-white text-sm">$25/semester for all members</span>
            </div>
          </div>
        </div>
      </div>

      {/* Certification Modal */}
      <CertificationModal
        certification={selectedCertification}
        isOpen={isCertificationModalOpen}
        onClose={closeCertificationModal}
      />
    </section>
  );
};

export default Hero;