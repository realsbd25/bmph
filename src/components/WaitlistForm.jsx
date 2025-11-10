import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    email: '',
    full_name: '',
    professional_status: '',
    sector: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await base44.entities.WaitlistEntry.create(formData);
      setIsSuccess(true);
      setFormData({
        email: '',
        full_name: '',
        professional_status: '',
        sector: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-8 bg-white/50 backdrop-blur-sm rounded-3xl border border-[#FDE2C7]/30"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-[#3D2817] mb-2">You're on the list!</h3>
        <p className="text-[#6B5942]">We'll notify you when we launch.</p>
        <Button
          onClick={() => setIsSuccess(false)}
          variant="outline"
          className="mt-6 border-[#D4A574] text-[#D4A574] hover:bg-[#D4A574] hover:text-white"
        >
          Join Another Person
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      onSubmit={handleSubmit}
      className="space-y-6 p-8 bg-white/50 backdrop-blur-sm rounded-3xl border border-[#FDE2C7]/30"
    >
      <div className="space-y-2">
        <Label htmlFor="full_name" className="text-[#3D2817] font-medium">
          Full Name *
        </Label>
        <Input
          id="full_name"
          type="text"
          value={formData.full_name}
          onChange={(e) => handleChange('full_name', e.target.value)}
          required
          placeholder="Enter your full name"
          className="bg-white border-[#FDE2C7] focus:border-[#D4A574] focus:ring-[#D4A574]"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-[#3D2817] font-medium">
          Email Address *
        </Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          required
          placeholder="you@example.com"
          className="bg-white border-[#FDE2C7] focus:border-[#D4A574] focus:ring-[#D4A574]"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="professional_status" className="text-[#3D2817] font-medium">
          Professional Status
        </Label>
        <Select
          value={formData.professional_status}
          onValueChange={(value) => handleChange('professional_status', value)}
        >
          <SelectTrigger className="bg-white border-[#FDE2C7] focus:border-[#D4A574] focus:ring-[#D4A574]">
            <SelectValue placeholder="Select your status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="professional">Professional</SelectItem>
            <SelectItem value="student">Student</SelectItem>
            <SelectItem value="graduate">Graduate</SelectItem>
            <SelectItem value="career_changer">Career Changer</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="sector" className="text-[#3D2817] font-medium">
          Primary Sector
        </Label>
        <Select
          value={formData.sector}
          onValueChange={(value) => handleChange('sector', value)}
        >
          <SelectTrigger className="bg-white border-[#FDE2C7] focus:border-[#D4A574] focus:ring-[#D4A574]">
            <SelectValue placeholder="Select your sector" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="healthcare">Healthcare</SelectItem>
            <SelectItem value="medical">Medical</SelectItem>
            <SelectItem value="pharmaceutical">Pharmaceutical</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#D4A574] hover:bg-[#C49464] text-white rounded-full py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Joining...
          </>
        ) : (
          'Join Waitlist'
        )}
      </Button>
    </motion.form>
  );
}