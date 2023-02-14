/// <reference types="react" />
interface IModalProps {
    children?: React.ReactNode;
    className?: string;
    setIsModalOpen(value: boolean): void;
}
declare const Modal: React.FC<IModalProps>;
export default Modal;
