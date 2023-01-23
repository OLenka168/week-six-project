import { useState } from "react";

function Items({anyProduct}) {

    const [showText, setShowText] = useState(false);
    console.log(showText)

    const showTextClick = (element) => {
        element.showMore = !element.showMore
        setShowText(!showText)
    }

    return (
    <div className="products">
        {anyProduct.map((element => {
            const {id, name, image, description, price, showMore} = element;
            return(
                <div className="product_card" key={id}>
                    <div className="product_img">
                        <h3>{name}</h3>
                    </div>
                    <div className="product_img">
                        <img src={image} width='300px' alt='pic' />
                    </div>
                    <div className="product_img">
                        <p>{showMore ? description.substring(0,100) + '...' : description} <button className="show" onClick={() => showTextClick(element)}>{showMore ? 'Show more' : 'Show less'}</button></p>
                    </div>
                    <div className="product_img">
                        <p>{price}</p>
                    </div>
                    
                </div>
            )
        }))}
    </div>
    )
    
}

export default Items;