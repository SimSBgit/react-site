import "./css/style.css"

function CarModel(p) {
    return (
        <div>
            <ul>
                <button className="btn"><b>정보 보기</b></button>
                <li><b>모델명 : {p.name}</b></li>
                <li><b>색상 : {p.color}</b></li>
                <li><b>유형 : {p.type}</b></li>
                <li><b>가격 : {p.price}</b></li>
            </ul>
        </div>
    )
}

export default CarModel