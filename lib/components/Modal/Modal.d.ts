/// <reference types="react" />
import { Dayjs } from "dayjs";
interface IModalProps {
    className?: string;
    currentDate: Dayjs;
    setIsModalOpen(value: boolean): void;
}
declare const Modal: React.FC<IModalProps>;
export default Modal;
