'use client'
import React, { useEffect } from "react";
import "@/app/Styles/ModalPassword.scss"

export default function ModalPassword ({ isOpen, onClose }) {
    useEffect(() => {
        const handleOutsideClick = (event) => {
          if (isOpen && !event.target.closest(".Modalpassword")) {
            onClose();
          }
        };
    
        document.addEventListener("mousedown", handleOutsideClick);
    
        return () => {
          document.removeEventListener("mousedown", handleOutsideClick);
        };
      }, [isOpen, onClose]);
    
      useEffect(() => {
        const disableScroll = () => {
          document.body.classList.add("modal-open");
        };
    
        const enableScroll = () => {
          document.body.classList.remove("modal-open");
        };
    
        if (isOpen) {
          disableScroll();
        } else {
          enableScroll();
        }
    
        return () => {
          enableScroll();
        };
      }, [isOpen]);
    
     
      const handleCrossClick = () => {
        onClose();
      };
  return (
    <>
     {isOpen && (
        <div className="Container__modal" >
            <div className="Modalpassword">
              <input type="text" placeholder="Старый пароль" />
              <input type="password" placeholder="Новый пароль" />
              <input type="button" value="Обновить" />


            <img className="modal_cross" src='/cross.svg' onClick={handleCrossClick} />
            </div>

        </div>
    )}
    </>
  )
};
