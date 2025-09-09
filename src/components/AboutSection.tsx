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
    <footer className="mt-20 py-20 px-6 bg-gradient-to-t from-gray-50/95 via-gray-25/98 to-white border-t border-gray-100/50">
      <div className="max-w-5xl mx-auto">
        {/* About Section */}
        <div className="text-center space-y-10">
          <p className="text-base text-gray-700 max-w-4xl mx-auto leading-relaxed">
            <span className="font-bold text-gray-900 text-lg">ShikshaSetu AI</span> is a demo prototype of Smart AI Internship Allocation System (Inspired by SIH Problem Statement 25033)
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-8">
            <Button variant="outline" className="bg-white hover:bg-gray-50 border-gray-300 hover:border-gray-400 px-8 py-4 text-base font-medium rounded-xl transition-all duration-300 hover:shadow-md">
              <ExternalLink className="w-4 h-4 mr-2" />
              Learn More
            </Button>
            <Button variant="outline" className="bg-white hover:bg-gray-50 border-gray-300 hover:border-gray-400 px-8 py-4 text-base font-medium rounded-xl transition-all duration-300 hover:shadow-md">
              <Mail className="w-4 h-4 mr-2" />
              Contact Us
            </Button>
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-8 py-4 text-base font-medium rounded-xl transition-all duration-300">
              About This Demo
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};