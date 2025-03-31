
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';

export default function UploadWidget() {
  const [dragActive, setDragActive] = useState(false);
  const [email, setEmail] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('Anime');
  
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // Handle file upload
      console.log("File dropped:", e.dataTransfer.files[0]);
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // Handle file upload
      console.log("File selected:", e.target.files[0]);
    }
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h3 className="text-2xl font-semibold text-center mb-6">Ghibli AI your photo now</h3>
      
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center mb-6 ${
          dragActive ? 'border-purple-600 bg-purple-50' : 'border-gray-300'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <div className="flex justify-center mb-4">
          <Upload className="h-10 w-10 text-gray-400" />
        </div>
        <label htmlFor="file-upload" className="cursor-pointer">
          <p className="text-gray-600 mb-2">Drag & drop an image here, or click to select</p>
          <p className="text-xs text-gray-500">Supports PNG, JPG, WEBP, JPEG (max 10MB)</p>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            accept="image/png, image/jpeg, image/jpg, image/webp"
            onChange={handleChange}
          />
        </label>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <select
            className="w-full rounded-lg border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
            value={selectedStyle}
            onChange={(e) => setSelectedStyle(e.target.value)}
          >
            <option>Anime</option>
            <option>Watercolor</option>
            <option>Sketch</option>
            <option>Oil Painting</option>
            <option>Pixel Art</option>
          </select>
        </div>
        <div>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full rounded-lg border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      
      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg">
        CREATE GHIBLI AI ART
      </Button>
    </div>
  );
}
