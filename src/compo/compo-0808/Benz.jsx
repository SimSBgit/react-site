import CarModel from "./CarModel"

function Benz () {
    return (
        <div>
            <br />
            <CarModel name="A-class" color="black" type="세단" price="5,000만원" />
            <CarModel name="B-class" color="white" type="세단" price="4,500만원" />
            <CarModel name="C-class" color="silver" type="세단" price="6,300만원" />
            <CarModel name="E-class" color="grey" type="세단" price="11,000만원" />
            <CarModel name="S-class" color="black" type="세단" price="18,000만원" />
        </div>
    )
}

export default Benz