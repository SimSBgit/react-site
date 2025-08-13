import Button from "./Button";


function ConfirmDialog(props) {
    return (
        <div>
            <p>내용을 확인하고 확인 버튼을 눌러주세요.</p>
            <Button children="확인" color="green"></Button>
        </div>
    )    
}

export default ConfirmDialog;