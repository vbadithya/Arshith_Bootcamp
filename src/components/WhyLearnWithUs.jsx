import React from 'react';
import { Video, TrendingUp, Award, Headphones } from 'lucide-react';

export default function WhyLearnWithUs() {
  const features = [
    {
      id: 1,
      title: 'Video Lessons',
      description: 'High-quality, easy-to-follow video tutorials',
      bgColor: 'bg-peach-100/80 text-peach-600 border-peach-200',
      icon: Video
    },
    {
      id: 2,
      title: 'Track Progress',
      description: 'Monitor your learning journey in real-time',
      bgColor: 'bg-brand-100/80 text-brand-700 border-brand-200',
      icon: TrendingUp
    },
    {
      id: 3,
      title: 'Certificates',
      description: 'Get certified and showcase your skills',
      bgColor: 'bg-amber-100/80 text-amber-700 border-amber-200',
      icon: Award
    },
    {
      id: 4,
      title: 'Expert Support',
      description: 'Our team is always here to help you',
      bgColor: 'bg-purple-100/80 text-purple-700 border-purple-200',
      icon: Headphones
    }
  ];

  return (
    <section className="py-16 bg-[#FAFDFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Why Learn With Us?
            </h2>
            <span className="text-2xl">🌱</span>
          </div>
          <p className="text-sm sm:text-base text-slate-500 font-medium">
            We provide the best learning experience with modern tools and expert guidance.
          </p>
        </div>

        {/* Features 4-column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {features.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center group"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.bgColor} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-xs`}>
                  <IconComponent className="w-7 h-7 stroke-[2.2]" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
