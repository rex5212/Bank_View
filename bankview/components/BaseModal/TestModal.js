import React, { useRef, useEffect } from 'react';

const TestModal = ({ onClose, children }) => {
  const modalRef = useRef();

  // Handle click outside the modal
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal" ref={modalRef}>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default TestModal;
