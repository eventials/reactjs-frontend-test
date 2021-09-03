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
            <MdAirplay size={30} color="#FF0049" className="logoContainer"/>
            <div className="titleContainer">
                <div>
                    <p>UX/UI Design Conference Meeting</p>
                    <p>Productivity</p>
                </div>
                <div className="headerIconsContainer">
                    <FiShare size={20} color="#FFBD2D"/>
                    <AiOutlineControl size={20} color="#6200FF"/>
                </div>
            </div>
        </div>
        <div className="chatContainer">
            <div className="ownerVideo">
                <div className="participantsVideoContainer">
                    <div className="participants"></div>
                    <div className="participants"></div>
                    <div className="participants"></div>
                    <div className="participants"></div>
                </div>
            </div>
        </div>
        <div className="menuContainer">
            <IoVideocamOutline size={35} color="#6200FF" className="menuIcon"/>
            <BsMic size={30} color="#FFBD2D" className="menuIcon"/>
            <CgScreen size={35} color="#FF0049" className="menuIcon"/>
            <BsChat size={30} color="#FF90BB" className="menuIcon"/>
            <IoExitOutline size={35} color="#8C00FF" className="menuIcon"/>
        </div>    
    </div> 
    <div className="rigthContainer">
        <div className="headerChat">
            <p> Chat with Anna</p>
            <IoCloseCircleOutline size={20} color="#FF0049"/>
        </div>
        <div className="messageChat">
            <GrAttachment size={20} className="attachIcon"/>
            <TextField id="outlined-basic" label="Escreva sua mensagem" variant="outlined" size="small" />
            <Button variant="contained" color="primary">
                <MdSend />
            </Button>
        </div>
    </div>
</WebnarContainer>
)
}

export default Webnar;