'use client';

import React, { useState } from 'react';
import { ProjectData } from '@/lib/mathEngine';

interface InputFormProps {
  initialData: ProjectData;
  onUpdate: (data: Partial<ProjectData>) => Promise<void>;
}

export default function InputForm({ initialData, onUpdate }: InputFormProps) {
  const [formData, setFormData] = useState<ProjectData>(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await onUpdate(formData);
    setIsSubmitting(false);
  };

  return (
    <div className="p-8 bg-[#0a0a0a] border border-gray-800 rounded-2xl relative overflow-hidden group">
      {/* Decorative Gold Accent */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold/50 to-transparent group-hover:from-gold transition-all duration-500"></div>

      <h3 className="text-xl text-gold mb-6 font-light uppercase tracking-widest border-b border-gray-800 pb-4">
        Live Data Entry
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <InputGroup label="Actual Cost (AC)" name="actualCost" value={formData.actualCost} onChange={handleChange} />
          <InputGroup label="Earned Value (EV)" name="earnedValue" value={formData.earnedValue} onChange={handleChange} />
          <InputGroup label="Planned Value (PV)" name="plannedValue" value={formData.plannedValue} onChange={handleChange} />
          
          <InputGroup label="Total Budget" name="totalBudget" value={formData.totalBudget} onChange={handleChange} />
          <InputGroup label="Exp. Market Value" name="expectedMarketValue" value={formData.expectedMarketValue} onChange={handleChange} />
          
          <InputGroup label="Marble Wasted (sqm)" name="marbleWastedSqm" value={formData.marbleWastedSqm} onChange={handleChange} />
        </div>

        <div className="pt-4 flex justify-end border-t border-gray-800 mt-8">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="group relative px-8 py-3 bg-black text-gold border border-gold hover:bg-gold hover:text-black transition-all duration-300 font-medium tracking-widest uppercase text-sm disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
          >
            <span className="relative z-10">{isSubmitting ? 'Syncing...' : 'Sync to Engine'}</span>
            <div className="absolute inset-0 bg-gold transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
          </button>
        </div>
      </form>
    </div>
  );
}

function InputGroup({ label, name, value, onChange }: { label: string, name: string, value: number, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div className="flex flex-col">
      <label className="text-xs text-gray-500 tracking-wider uppercase mb-2">{label}</label>
      <input 
        type="number" 
        name={name}
        value={value}
        onChange={onChange}
        className="bg-black border border-gray-800 text-white p-3 rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold font-mono transition-all duration-300"
      />
    </div>
  );
}
