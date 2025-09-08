import React, { useCallback, useState } from 'react';
import { Upload, FileText, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface UploadSectionProps {
  onFileUpload: (file: File) => void;
}

export const UploadSection: React.FC<UploadSectionProps> = ({ onFileUpload }) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragOver(false);
      
      const files = Array.from(e.dataTransfer.files);
      const file = files.find(f => f.type === 'application/pdf' || f.name.endsWith('.pdf'));
      
      if (file) {
        onFileUpload(file);
      }
    },
    [onFileUpload]
  );

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-4xl mx-auto animate-slide-up">
        {/* Animated title */}
        <div className="relative mb-8">
          <h1 className="text-6xl md:text-7xl font-bold gradient-text mb-4 animate-float">
            AI-Powered Internship Matcher
          </h1>
          <div className="absolute -top-4 right-10 animate-pulse-glow">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
        </div>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Upload your resume and discover your best internship matches instantly using advanced AI technology.
        </p>

        {/* Upload area */}
        <div
          className={`relative mx-auto max-w-lg p-12 border-2 border-dashed rounded-3xl transition-all duration-300 neumorphic hover:glow cursor-pointer ${
            isDragOver 
              ? 'border-primary bg-primary/5 scale-105' 
              : 'border-border bg-card/50 hover:border-primary/50'
          }`}
          onDrop={handleDrop}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragOver(true);
          }}
          onDragLeave={() => setIsDragOver(false)}
          onClick={() => document.getElementById('file-input')?.click()}
        >
          <input
            id="file-input"
            type="file"
            accept=".pdf"
            onChange={handleFileSelect}
            className="hidden"
          />
          
          <div className="text-center">
            <div className="relative mb-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-primary to-accent p-1 animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  {isDragOver ? (
                    <FileText className="w-8 h-8 text-primary" />
                  ) : (
                    <Upload className="w-8 h-8 text-primary" />
                  )}
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold mb-2">
              {isDragOver ? 'Drop your resume here!' : 'Upload Your Resume'}
            </h3>
            <p className="text-muted-foreground mb-6">
              Drag and drop your PDF resume or click to browse
            </p>
            
            <Button 
              variant="outline" 
              size="lg"
              className="neumorphic hover:glow transition-all duration-300"
            >
              Choose File
            </Button>
          </div>
        </div>

        {/* Features preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
          {[
            { icon: "🧠", title: "AI Analysis", desc: "NLP & NER processing" },
            { icon: "⚖️", title: "Fair Allocation", desc: "Reservation rules applied" },
            { icon: "🎯", title: "Smart Matching", desc: "Perfect internship fits" }
          ].map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-2xl neumorphic hover:glow transition-all duration-300">
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h4 className="font-semibold mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};