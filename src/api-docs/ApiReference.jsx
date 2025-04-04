import React from "react";
import endpoints from "../data/endpoints.js";
import EndpointCard from "../components/EndpointCard.jsx";
import "../components/EndpointCard.css";
import "./ApiReference.css";

const ApiReference = () => {
    const groupedEndpoints = endpoints.reduce((acc, endpoint) => {
        if (!acc[endpoint.section]) {
            acc[endpoint.section] = [];
        }
        acc[endpoint.section].push(endpoint);
        return acc;
    }, {});

    return (
        <div className="api-reference">
            <h2>API Reference</h2>
            {Object.entries(groupedEndpoints).map(([section, endpoints]) => (
                <div key={section} className="api-section">
                    <h3>{section}</h3>
                    {endpoints.map((ep, idx) => (
                        <EndpointCard
                            key={idx}
                            method={ep.method}
                            path={ep.path}
                            description={ep.description}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ApiReference;

