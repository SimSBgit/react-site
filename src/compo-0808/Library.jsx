import Book from "./Book"

function Library() {
    return (
        <div>
            <Book comment="안녕?" name="스티브잡스" book="리액트를 배워보자" numOfpage="50000" />
            <Book comment="졸려?" name="저커버그" book="HTML을 배워보자" numOfpage="100" />
            <Book comment="정신차려" name="젠슨황" book="CSS를 배워보자" numOfpage="300" />
            <Book comment="네.." name="홍길동" book="JS를 배워보자" numOfpage="200" />
        </div>
    )
}

export default Library