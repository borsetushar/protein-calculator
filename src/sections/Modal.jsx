import React from 'react'

const Modal = ({ isOpen, onClose, proteinIntake }) => {
    return (
      <>
        {isOpen ? (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
            <div className="bg-white p-8 rounded-lg z-10">
              <h3 className="text-xl font-bold mb-4">Protein Intake Calculation</h3>
              <p className="mb-4">Protein Intake: {proteinIntake} grams</p>
              <button
                className="px-4 py-2 bg-gray-800 text-white rounded-md"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        ) : null}
      </>
    );
  };

export default Modal