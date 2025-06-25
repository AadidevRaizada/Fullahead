import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Upload, FileText, CheckCircle, X, AlertCircle } from 'lucide-react';
import SectionAnimation from '../components/shared/SectionAnimation';
import Button from '../components/shared/Button';
import MetaTags from '../components/shared/MetaTags';

interface CareerFormData {
  name: string;
  email: string;
  phone: string;
  rank: string;
  message?: string;
}

interface Toast {
  type: 'success' | 'error';
  message: string;
  show: boolean;
}

const CareersPage: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [toast, setToast] = useState<Toast>({ type: 'success', message: '', show: false });
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<CareerFormData>();

  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({ type, message, show: true });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 5000);
  };

  const handleFileUpload = (file: File) => {
    if (file.type === 'application/pdf' || file.type.includes('document') || file.type.includes('text')) {
      if (file.size <= 5 * 1024 * 1024) {
        setUploadedFile(file);
        console.log('File uploaded:', file.name, `(${(file.size / 1024 / 1024).toFixed(2)} MB)`);
      } else {
        showToast('error', 'File size should be less than 5MB');
      }
    } else {
      showToast('error', 'Please upload a PDF, DOC, or DOCX file');
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileUpload(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFileUpload(file);
  };

  const handleFileAreaClick = () => {
    fileInputRef.current?.click();
  };

  const onSubmit = async (data: CareerFormData) => {
    if (!uploadedFile) {
      showToast('error', 'Please upload your crewing profile');
      return;
    }

    console.log('🚀 Starting email submission process...');
    console.log('📋 Form data:', {
      name: data.name,
      email: data.email,
      phone: data.phone,
      rank: data.rank,
      fileName: uploadedFile.name,
      fileSize: `${(uploadedFile.size / 1024 / 1024).toFixed(2)} MB`
    });

    try {
      // Convert file to base64 for attachment
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const base64Content = (reader.result as string).split(',')[1]; // Remove data URL prefix
          
          console.log('📎 File converted to base64, size:', base64Content.length, 'characters');
          
          console.log('📧 Calling API endpoint...');
          
          const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: data.name,
              email: data.email,
              phone: data.phone,
              rank: data.rank,
              message: data.message || '',
              fileName: uploadedFile.name,
              fileContent: base64Content,
            }),
          });

          const result = await response.json();

          if (!response.ok) {
            throw new Error(result.error || `HTTP error! status: ${response.status}`);
          }

          console.log('✅ Email sent successfully!');
          console.log('📬 API response:', result);
          console.log('🎯 Email details:', {
            from: 'crewing@fullahead.in',
            to: 'crewing@fullahead.in',
            subject: `New Crewing Profile: ${data.rank} - ${data.name}`,
            attachmentName: uploadedFile.name,
            emailId: result.emailId
          });

          // Show success animation
          setShowSuccess(true);
          
          // Reset form after animation
          setTimeout(() => {
            reset();
            setUploadedFile(null);
            setShowSuccess(false);
          }, 3000);

          showToast('success', 'Profile uploaded successfully! We will contact you if we have suitable opportunities.');
          
        } catch (error) {
          console.error('❌ API Error:', error);
          console.error('🔍 Error details:', {
            message: error instanceof Error ? error.message : 'Unknown error',
            stack: error instanceof Error ? error.stack : 'No stack trace'
          });
          showToast('error', 'There was an error uploading your profile. Please try again later.');
        }
      };
      reader.readAsDataURL(uploadedFile);
    } catch (error) {
      console.error('❌ File processing error:', error);
      showToast('error', 'There was an error processing your profile. Please try again.');
    }
  };

  return (
    <>
      <MetaTags
        title="Upload Crewing Profile | Full Ahead Marine & Offshore"
        description="Upload your crewing profile to Full Ahead Marine & Offshore. We maintain a database of qualified maritime professionals for future crewing requirements."
        keywords="maritime crew, ship crew profiles, marine crew database, maritime professionals, crew management"
        url="https://www.fullahead.in/careers"
      />
      
      {/* Toast Notification */}
      <div
        className={`fixed top-4 right-4 z-50 max-w-md p-4 rounded-lg shadow-lg transition-all duration-500 transform ${
          toast.show ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } ${
          toast.type === 'success' 
            ? 'bg-green-500 text-white' 
            : 'bg-red-500 text-white'
        }`}
      >
        <div className="flex items-center">
          {toast.type === 'success' ? (
            <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
          )}
          <span className="flex-1">{toast.message}</span>
          <button
            onClick={() => setToast(prev => ({ ...prev, show: false }))}
            className="ml-2 text-white hover:text-gray-200"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Success Animation Overlay */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md mx-4 text-center animate-pulse">
            <div className="animate-bounce mb-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-green-600 mb-2">Success!</h3>
            <p className="text-gray-600 mb-4">
              Your crewing profile has been uploaded successfully!
            </p>
            <div className="flex items-center justify-center text-sm text-gray-500">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary mr-2"></div>
              Processing your submission...
            </div>
          </div>
        </div>
      )}
      
      <section className="section px-2 sm:px-4 py-20 md:py-28">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <SectionAnimation className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Upload Crewing Profile</h1>
              <p className="text-xl text-secondary-light">
                Submit your crewing profile to be considered for future opportunities. We maintain a database of qualified maritime professionals and will contact you when suitable positions become available.
              </p>
            </SectionAnimation>
            
            <SectionAnimation delay={100}>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-secondary mb-1">
                        Full Name <span className="text-error">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                          errors.name ? 'border-error' : 'border-gray-300'
                        }`}
                        placeholder="John Doe"
                        {...register('name', { required: 'Name is required' })}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-error">{errors.name.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1">
                        Email Address <span className="text-error">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                          errors.email ? 'border-error' : 'border-gray-300'
                        }`}
                        placeholder="john@example.com"
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-error">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-1">
                        Phone Number <span className="text-error">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                          errors.phone ? 'border-error' : 'border-gray-300'
                        }`}
                        placeholder="+91 98765 43210"
                        {...register('phone', { required: 'Phone number is required' })}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-error">{errors.phone.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="rank" className="block text-sm font-medium text-secondary mb-1">
                        Rank <span className="text-error">*</span>
                      </label>
                      <input
                        id="rank"
                        type="text"
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                          errors.rank ? 'border-error' : 'border-gray-300'
                        }`}
                        placeholder="e.g., Chief Engineer, Second Officer, Bosun"
                        {...register('rank', { required: 'Rank is required' })}
                      />
                      {errors.rank && (
                        <p className="mt-1 text-sm text-error">{errors.rank.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-1">
                      Upload Crewing Profile <span className="text-error">*</span>
                    </label>
                    <div
                      className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer ${
                        isDragOver
                          ? 'border-primary bg-primary bg-opacity-5'
                          : 'border-gray-300 hover:border-primary hover:bg-gray-50'
                      }`}
                      onDrop={handleDrop}
                      onDragOver={(e) => {
                        e.preventDefault();
                        setIsDragOver(true);
                      }}
                      onDragLeave={() => setIsDragOver(false)}
                      onClick={handleFileAreaClick}
                    >
                      {uploadedFile ? (
                        <div className="flex items-center justify-center">
                          <FileText className="w-8 h-8 text-primary mr-3" />
                          <div>
                            <p className="text-primary font-medium">{uploadedFile.name}</p>
                            <p className="text-sm text-secondary-light">
                              {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                          <p className="text-secondary-light mb-2">
                            Drop your crewing profile here, or{' '}
                            <span className="text-primary cursor-pointer hover:underline">
                              browse
                            </span>
                          </p>
                          <p className="text-sm text-secondary-light">
                            Support PDF, DOC, DOCX files up to 5MB
                          </p>
                        </div>
                      )}
                      <input
                        type="file"
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        ref={fileInputRef}
                      />
                    </div>
                    {uploadedFile && (
                      <button
                        type="button"
                        onClick={() => setUploadedFile(null)}
                        className="mt-2 text-sm text-error hover:underline"
                      >
                        Remove file
                      </button>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary mb-1">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Additional certifications, experience, or any other relevant information..."
                      {...register('message')}
                    ></textarea>
                  </div>
                  
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Uploading Profile...' : 'Upload Profile'}
                  </Button>
                </form>
              </div>
            </SectionAnimation>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareersPage; 