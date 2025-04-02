import "./EndpointCard.css";

const EndpointCard = ({ method, path, description }) => {
    return (
        <div className={`endpoint-card ${method.toLowerCase()}`}>
            <div className="endpoint-header">
                <span className="method">{method}</span>
                <span className="path">{path}</span>
            </div>
            <p className="description">{description}</p>
        </div>
    );
};

export default EndpointCard;
