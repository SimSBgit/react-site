function Divbox(p) {
    return (
        <div>
            <br />
            <p><b>A 컨테이너</b></p>
            <div className="container">
                <div className="aaa">A</div>
                <div className="aaa">A</div>
                <div className="aaa">A</div>
                <div className="aaa">A</div>
            </div>
            <br />
            <p><b>B 컨테이너</b></p>
            <div className="container">
                <div className="bbb">B</div>
                <div className="bbb">B</div>
            </div>
        </div>
    )
}

export default Divbox