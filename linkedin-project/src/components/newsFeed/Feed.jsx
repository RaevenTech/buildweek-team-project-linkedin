import React from "react";
import { RiPencilFill } from "react-icons/ri";
import InputOption from "./InputOption";
import { HiPhotograph } from "react-icons/hi";
import { FaFileVideo } from "react-icons/fa";
import { MdOutlineEventNote } from "react-icons/md";
import { GrArticle } from "react-icons/gr";
import "./Feed.css";

function Feed() {
    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <RiPencilFill />
                    <form>
                        <input type="text"></input>
                        <button type="submit"> Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption
                        Icon={HiPhotograph}
                        title="Photo"
                       
                    />
                    <InputOption
                        Icon={FaFileVideo}
                        title="Video"
                       
                    />
                    <InputOption
                        Icon={MdOutlineEventNote}
                        title="Event"
                        
                    />
                    <InputOption
                        Icon={GrArticle}
                        title="Write article"
                        
                    />
                </div>
            </div>
        </div>
    )
}

export default Feed;
