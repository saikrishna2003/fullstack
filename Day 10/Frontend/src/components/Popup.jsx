import React from 'react';

const Popup = ({ title, disagree, agree, open, onClose, onAgree }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 max-w-md">
        <h3 className="text-lg leading-6 font-medium text-black mb-4">{title}</h3>
        <div className="flex justify-end">
          <button
            onClick={onAgree}
            className="mr-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
          >
            {agree}
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none"
          >
            {disagree}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
``