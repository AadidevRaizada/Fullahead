const { Resend } = require('resend');

const resend = new Resend('re_7gPPffmZ_E6Voeyob7ZxaFxgHMRQ7RiRb');

// Function to get MIME type based on file extension
function getContentType(fileName) {
  const extension = fileName.toLowerCase().split('.').pop();
  const mimeTypes = {
    'pdf': 'application/pdf',
    'doc': 'application/msword',
    'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'txt': 'text/plain',
    'rtf': 'application/rtf'
  };
  return mimeTypes[extension] || 'application/octet-stream';
}

// Function to clean up filename for better display
function cleanFileName(fileName, applicantName) {
  // Remove common duplicate suffixes like (1), (2), etc.
  let cleanName = fileName.replace(/\s*\(\d+\)/g, '');
  
  // Get file extension
  const extension = cleanName.substring(cleanName.lastIndexOf('.'));
  
  // Create a professional display name
  const displayName = `${applicantName} - Resume${extension}`;
  
  return {
    original: fileName,
    cleaned: cleanName,
    display: displayName
  };
}

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, rank, message, fileName, fileContent } = req.body;

    console.log('🚀 API: Starting email submission process...');
    console.log('📋 API: Form data:', { name, email, phone, rank, fileName });

    // Clean up the filename for better display
    const fileNames = cleanFileName(fileName, name);
    
    // Get the proper content type for the file
    const contentType = getContentType(fileName);
    console.log('📎 API: File content type detected:', contentType);

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #1e40af; color: white; padding: 20px; text-align: center;">
          <h1>New Resume Submission</h1>
        </div>
        
        <div style="padding: 30px; background-color: #f9fafb;">
          <h2 style="color: #1e40af; margin-bottom: 20px;">Applicant Details</h2>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 15px;">
              <strong style="color: #1e40af;">Full Name:</strong>
              <span style="margin-left: 10px;">${name}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #1e40af;">Email:</strong>
              <span style="margin-left: 10px;">${email}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #1e40af;">Phone:</strong>
              <span style="margin-left: 10px;">${phone}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #1e40af;">Rank:</strong>
              <span style="margin-left: 10px;">${rank}</span>
            </div>
            
            ${message ? `
              <div style="margin-bottom: 15px;">
                <strong style="color: #1e40af;">Additional Information:</strong>
                <div style="margin-top: 5px; padding: 10px; background-color: #f3f4f6; border-radius: 4px;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
            ` : ''}
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #dbeafe; border-radius: 8px;">
            <h3 style="color: #1e40af; margin-bottom: 10px;">📎 Resume Attached</h3>
            <p style="margin: 0; color: #374151;">
              <strong>Document:</strong> ${fileNames.display}
            </p>
            <p style="margin: 5px 0 0 0; color: #6b7280; font-size: 12px;">
              <strong>Type:</strong> ${contentType}
            </p>
            ${fileNames.original !== fileNames.cleaned ? `
              <p style="margin: 5px 0 0 0; color: #6b7280; font-size: 12px;">
                Original filename: ${fileNames.original}
              </p>
            ` : ''}
          </div>
        </div>
        
        <div style="background-color: #f1f5f9; padding: 15px; text-align: center;">
          <p style="margin: 0; color: #6b7280;">
            This profile was submitted through the Full Ahead Marine & Offshore crewing portal.
          </p>
        </div>
      </div>
    `;

    console.log('📧 API: Sending email via Resend...');

    const result = await resend.emails.send({
      from: 'Full Ahead Careers <crewing@fullahead.in>',
      to: ['crewing@fullahead.in'],
      cc: ['aadidevraizada26@gmail.com'],
      subject: `New Applicant: ${rank} - ${name}`,
      html: emailHtml,
      attachments: fileContent ? [
        {
          filename: fileNames.original,
          content: fileContent,
          type: contentType // This is the key fix - specify the MIME type
        },
      ] : [],
    });

    console.log('✅ API: Email sent successfully!');
    console.log('📬 API: Resend response:', result);
    console.log('🎯 API: Email details:', {
      from: 'crewing@fullahead.in',
      to: 'crewing@fullahead.in',
      cc: 'aadidevraizada26@gmail.com',
      subject: `New Applicant: ${rank} - ${name}`,
      attachmentName: fileNames.display,
      originalFilename: fileNames.original,
      contentType: contentType,
      emailId: result.data?.id
    });

    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully',
      emailId: result.data?.id 
    });

  } catch (error) {
    console.error('❌ API: Error sending email:', error);
    console.error('🔍 API: Error details:', {
      message: error.message,
      stack: error.stack
    });

    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email',
      error: error.message
    });
  }
}; 