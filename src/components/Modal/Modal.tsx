import classNames from "classnames";
import { Dayjs } from "dayjs";
import { useRef } from "react";

interface IModalProps {
    className?: string;
    currentDate: Dayjs;
    setIsModalOpen(value: boolean): void;
}

const Modal: React.FC<IModalProps> = ({
    className,
    currentDate,
    setIsModalOpen,
}) => {
    const modalRef = useRef<HTMLDivElement>(null);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.currentTarget === modalRef.current) {
            closeModal();
        }
    };

    return (
        <div
            ref={modalRef}
            className={classNames("modal", className)}
            onClick={handleModalClick}
        >
            <div className="modal__box">
                {currentDate}
            </div>
        </div>
    );
};

export default Modal;