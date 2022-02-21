import { Link } from 'react-router-dom';
import { getAppointmentById } from '../../api/data.js';

const PlateNumberButton = ({ plateNumber, id, setOpenModal, setModalData }) => {
   
    const modalShow = async () => {
        setOpenModal(true);
        const modalFetchData =  await getAppointmentById(id);
        setModalData(modalFetchData);
    }

    return (
        <div className="plateNumbers">
            <Link to={'#'}
                className="openModalBtn"
                onClick={modalShow}>
                {plateNumber}
            </Link>
        </div>
    );
}

export default PlateNumberButton;