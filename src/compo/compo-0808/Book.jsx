function Book(p) {
    return (
        <div>
            <h2>저자의 말 : {p.comment}</h2>
            <h2>저자 소개 : {p.name}</h2>
            <h2>이 책에 대하여 : {p.book}</h2>
            <h2>전체 페이지 : {p.numOfpage}</h2>
            <br />
        </div>
    )
}

export default Book
