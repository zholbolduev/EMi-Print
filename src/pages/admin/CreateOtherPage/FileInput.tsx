// FileInput.tsx

import React, { ChangeEvent } from "react";

interface FileInputProps {
  label: string;
  onChange: (files: FileList | null) => void;
}

const FileInput: React.FC<FileInputProps> = ({ label, onChange }) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    onChange(files);
  };

  return (
    <div>
      <label>{label}</label>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileInput;
