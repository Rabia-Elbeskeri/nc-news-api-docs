import "./EndpointCard.css";

const EndpointCard = ({ endpoint }) => {
    return (
        endpoint && (
            <div className="endpoint-card">
                <span className={`method ${endpoint.method.toLowerCase()}`}>
                    {endpoint.method}
                </span>
                <code>{endpoint.path}</code>
                <p>{endpoint.description}</p>

                {endpoint.queries && (
                    <div className="queries">
                        <h5>Query Parameters:</h5>
                        <ul>
                            {Object.entries(endpoint.queries).map(([key, value]) => (
                                <li key={key}>
                                    <strong>{key}</strong>: {value}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        )
    );
};

export default EndpointCard;