import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Mail, Info } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <footer className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/80 to-transparent backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center">
        <div className="neumorphic rounded-2xl p-6 bg-card/50 backdrop-blur-sm">
          <div className="flex items-center justify-center mb-4">
            <Info className="w-5 h-5 text-primary mr-2" />
            <h3 className="text-lg font-semibold">About This Demo</h3>
          </div>
          
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            This is a demo prototype of <span className="font-semibold text-primary">Smart AI Internship Allocation System</span> 
            {" "}(Inspired by SIH Problem Statement 25033). The system demonstrates AI-powered resume analysis, 
            skill extraction, and fair internship matching using reservation policies.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="outline" className="neumorphic hover:glow">
              <ExternalLink className="w-4 h-4 mr-2" />
              Learn More
            </Button>
            <Button variant="outline" className="neumorphic hover:glow">
              <Mail className="w-4 h-4 mr-2" />
              Contact Us
            </Button>
          </div>
          
          <div className="mt-4 text-xs text-muted-foreground">
            Built with React, TypeScript, and AI-powered analysis
          </div>
        </div>
      </div>
    </footer>
  );
};