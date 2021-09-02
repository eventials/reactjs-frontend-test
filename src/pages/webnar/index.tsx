import React from 'react';
import { MdAirplay } from 'react-icons/md';
import { FiShare } from 'react-icons/fi';
import { AiOutlineControl } from 'react-icons/ai';
import { IoVideocamOutline } from 'react-icons/io5';
import { BsMic } from 'react-icons/bs';
import { CgScreen } from 'react-icons/cg';
import { BsChat } from 'react-icons/bs';
import { IoExitOutline } from 'react-icons/io5';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { MdSend } from 'react-icons/md';
import { GrAttachment } from 'react-icons/gr';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { WebnarContainer } from "./styles";



const Webnar: React.FC = () => {
return (
<WebnarContainer>
    <div className="leftContainer">
        <div className="headerContainer">
            <MdAirplay color="green"/>
            <div className="titleContainer">
                <div>
                    <p>UX/UI Design Conference Meeting</p>
                    <p>Productivity</p>
                </div>
                <div className="headerIconsContainer">
                    <FiShare color="green"/>
                    <AiOutlineControl color="green"/>
                </div>
            </div>
        </div>
        <div className="chatContainer">
            <div className="ownerVideo">
                <div>
                    <div className="participantsVideoContainer"></div>
                    <div className="participantsVideoContainer"></div>
                    <div className="participantsVideoContainer"></div>
                    <div className="participantsVideoContainer"></div>
                </div>
            </div>
        </div>
        <div className="menuContainer">
            <IoVideocamOutline size={20} color="green"/>
            <BsMic size={20} color="green"/>
            <CgScreen size={20} color="green"/>
            <BsChat size={20} color="green"/>
            <IoExitOutline size={20} color="green"/>
        </div>
    </div>
    <div className="rigthContainer">
        <div>
            <p> Chat with Anna</p>
            <IoCloseCircleOutline />
        </div>
        <div>
        <GrAttachment />
        <TextField id="outlined-basic" label="Email" variant="outlined" size="small" />
        <Button variant="contained" color="primary">
            <MdSend />
      </Button>
        </div>
    </div>
</WebnarContainer>
)
}

export default Webnar;