import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Mail, Brain, Users, Target } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Advanced resume parsing and skill extraction using NLP"
    },
    {
      icon: Users,
      title: "Fair Allocation",
      description: "Transparent reservation policies for equal opportunities"
    },
    {
      icon: Target,
      title: "Smart Matching",
      description: "Intelligent internship matching based on skills and preferences"
    }
  ];

  return (
    <footer className="absolute bottom-0 left-0 right-0 py-20 px-6 bg-gradient-to-t from-blue-50/95 via-white/98 to-white/90">
      <div className="max-w-6xl mx-auto">
        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-gray-100/50 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* About Section */}
        <div className="text-center space-y-8">
          <p className="text-base text-gray-700 max-w-4xl mx-auto leading-relaxed">
            <span className="font-semibold text-gray-900 text-lg">ShikshaSetu AI</span> is a demo prototype of Smart AI Internship Allocation System (Inspired by SIH Problem Statement 25033)
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Button variant="outline" className="bg-white/90 hover:bg-white border-gray-300 px-6 py-3 text-base">
              <ExternalLink className="w-4 h-4 mr-2" />
              Learn More
            </Button>
            <Button variant="outline" className="bg-white/90 hover:bg-white border-gray-300 px-6 py-3 text-base">
              <Mail className="w-4 h-4 mr-2" />
              Contact Us
            </Button>
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900 px-6 py-3 text-base">
              About This Demo
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};