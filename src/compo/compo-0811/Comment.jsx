const styles = {
    nameText: {
        color: "blue",
        fontsize: 16
    }
}


export default function Comment(props) {

    return(
        <div>
            <h1>{props.name}</h1>
            <p style={styles.nameText}>{props.Comment}</p>
        </div>


    )
}

