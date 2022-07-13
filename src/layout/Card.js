import { CardContainer, Cards, Image } from "../style";
import NumberFormat from "react-number-format";
import { useState } from "react";

export default function Card({ animais }) {
  const [showImage, setShowImage] = useState(false);

  function changeOpacity() {
    setShowImage(!showImage);
  }

  return (
    <CardContainer>
      <button onClick={changeOpacity}>mostrar imagens</button>
      {animais.map((animal) => (
        <Cards key={animal.name}>
          <div>
            Name: <b>{animal.name}</b>
          </div>
          <Image src={animal.img} opacity={showImage} alt="animal" />
          <NumberFormat
            value={animal.price}
            decimalScale={2}
            fixedDecimalScale={true}
            decimalSeparator={","}
            thousandSeparator={"."}
            displayType={"text"}
            prefix={"Preço: R$ "}
          />
        </Cards>
      ))}
    </CardContainer>
  );
}
