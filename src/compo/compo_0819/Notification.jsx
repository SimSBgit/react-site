import { useEffect, useState } from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    messageText: {
        color: "black",
        fontSize: 16,
    },
};

export default function Notification(props) {

    useEffect(() => {
        console.log(`${props.id} componentDidMount() called.`)
        return(
            console.log(`${props.id} componentWillUnmount() called.`)
        )
    }, [])

    useEffect(() => {
        console.log(`${props.id} componentDidUpdate() called.`)
    }, [props.id])

    return (
        <>
            <div style={styles.wrapper}>
                <span style={styles.messageText}>{props.message}</span>
            </div>
        </>
    )
}
