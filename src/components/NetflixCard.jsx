import "./netflixcard.css";
// import img from '../assets/img1.jpeg';
import { IoMdShare } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { FiMessageSquare } from "react-icons/fi";

const NetflixCard = (props) => {
    const { data } = props;
    console.log(data);
    return (
        <div className="net-cards">
            {data.map((item) => {
                return (
                    <div
                        className="net-card"
                        style={{ backgroundImage: `url(${item.bgimg})` }}
                        key={item.name}
                    >
                        <div className="net-content">
                            <img className="net-img" src={item.img}></img>
                            <div className="content">
                                <div className="content1">
                                    <h3>{item.name}</h3>
                                    <span>{item.year}, </span>
                                    <span>{item.producer}</span>
                                </div>
                                <div className="content2">
                                    <span className="yearSpan">{item.totalTime}</span>
                                    <span>  {item.category}</span>
                                </div>
                            </div>
                        </div>
                        <p>{item.about}</p>
                        <div className="net-content2">
                            <IoMdShare className="icon"/>
                            <FcLike className="icon" />
                            <FiMessageSquare className="icon" />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default NetflixCard;
