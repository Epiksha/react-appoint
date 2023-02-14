import classNames from "classnames";
import { useRef } from "react";

interface IModalProps {
    children?: React.ReactNode;
    className?: string;
    setIsModalOpen(value: boolean): void;
}

const Modal: React.FC<IModalProps> = ({
    children,
    className,
    setIsModalOpen,
}) => {
    const modalRef = useRef<HTMLDivElement>(null);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === modalRef.current) {
            closeModal();
        }
    };

    return (
        <div
            ref={modalRef}
            className={classNames("ra-modal", className, { "ra-modal--default": !children })}
            onClick={handleModalClick}
        >
            <div className="ra-modal__box">
                {children}
            </div>
        </div>
    );
};

export default Modal;