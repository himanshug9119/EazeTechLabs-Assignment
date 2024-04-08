import React from "react";

const Section1Component = (props) => {
    const containerStyle = {
        color: "black",
        width: "289.63px",
        height: "fixed 193.45px",
        top: "173.56px",
        gap: "0px",
        font: "Poppins",
        opacity: "0.8",
        border: "1px solid #E5E5E5",
        borderRadius: "10px",
    };

    const titleStyle = {
        font: "Poppins",
        width: "246px",
        fontSize: "16px",
        padding: "0 0 10.81px 0",
        fontWeight: "900",
    };

    const textStyle = {
        font: "Poppins",
        fontWeight: "600",
        fontSize: "15.13px",
    };

    const valueStyle = {
        font: "Poppins",
        fontWeight: "900",
        fontSize: "15.13px",
    };

    return (
        <div className="p-5 shadow-md bg-white" style={containerStyle}>
            <h1 style={titleStyle}>{props.title}</h1>

            <div className="flex flex-col justify-between gap-1">
                {props.data1Type && (
                    <div
                        className="flex flex-row justify-between mb-1"
                        style={{ width: "235px", height: "22px" }}
                    >
                        <p style={{ ...textStyle, width: "183.72px" }}>{props.data1Type}</p>
                        <p style={valueStyle}>{props.data1Value}</p>
                    </div>
                )}

                {props.data2Type && (
                    <div
                        className="flex flex-row justify-between mb-1"
                        style={{ width: "235px", height: "22px" }}
                    >
                        <p style={{ ...textStyle, width: "183.72px" }}>{props.data2Type}</p>
                        <p style={valueStyle}>{props.data2Value}</p>
                    </div>
                )}

                {props.data3Type && (
                    <div
                        className="flex flex-row justify-between"
                        style={{ width: "235px", height: "22px" }}
                    >
                        <p style={{ ...textStyle, width: "183.72px" }}>{props.data3Type}</p>
                        <p style={valueStyle}>{props.data3Value}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Section1Component;
