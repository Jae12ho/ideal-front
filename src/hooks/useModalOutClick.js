import { useEffect } from 'react';

export const useModalOutClick = (modalRef, setIsModalOpen) => {
    useEffect(() => {
        const modalOutClick = (e) => {
            if(!modalRef.current.contains(e.target)) {
                setIsModalOpen(false);
            }
        };

        window.addEventListener("mousedown", modalOutClick);

        return () => window.removeEventListener('mousedown', modalOutClick);
    }, []);
};