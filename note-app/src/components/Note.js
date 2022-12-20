import {MdDeleteForever} from 'react-icons/md'

const Note = ({ id, text, date}) => {
    return (
        <div className="note" key={id}>
            <span>{text}</span>
            <div>
                <small>{date}</small>
            </div>
            <div className='note-footer'>
                <MdDeleteForever className="delete-icon" size="1.3em" />
            </div>
        </div>
    );
};

export default Note;