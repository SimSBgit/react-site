import Comment from "./Comment"

export default function CommentList(props) {

    return(
        <>
            <Comment name="첫 번째 컴포넌트" Comment="리액트로 만들었습니다."/>
            <Comment name="두 번째 컴포넌트" Comment="리액트 배우고 있습니다." />
            <Comment name="세 번째 컴포넌트" Comment="리액트... 그만.." />
        </>

    )
}