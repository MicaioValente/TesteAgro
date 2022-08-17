import * as React from "react";
import Button from "./Button";
import * as S from './styles'


export default function MyKeyboard() {
  const [firstNumber, setFirstNumber] = React.useState("");
  const [secondNumber, setSecondNumber] = React.useState("");
  const [operation, setOperation] = React.useState("");
  const [result, setResult] = React.useState<Number | null>(null);

  const handleNumberPress = (buttonValue: string) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
  };

  const handleOperationPress = (buttonValue: string) => {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber("");
  };

  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setResult(null);
  };

  const firstNumberDisplay = () => {
    if (result !== null) {
      return <S.FirstNumber>{result?.toString()}</S.FirstNumber>;
    }
    if (firstNumber && firstNumber.length < 6) {
      return <S.FirstNumber>{firstNumber}</S.FirstNumber>;
    }
    if (firstNumber === "") {
      return <S.FirstNumber>{"0"}</S.FirstNumber>;
    }
    if (firstNumber.length > 5 && firstNumber.length < 8) {
      return (
        <S.FirstNumber style={{ fontSize: 70 }}>
          {firstNumber}
        </S.FirstNumber>
      );
    }
    if (firstNumber.length > 7) {
      return (
        <S.FirstNumber style={{ fontSize: 50 }}>
          {firstNumber}
        </S.FirstNumber>
      );
    }
  };

  const getResult = () => {
    switch (operation) {
      case "+":
        clear();
        setResult(parseInt(secondNumber) + parseInt(firstNumber));
        break;
      case "-":
        clear();
        setResult(parseInt(secondNumber) - parseInt(firstNumber));
        break;
      case "*":
        clear();
        setResult(parseInt(secondNumber) * parseInt(firstNumber));
        break;
      case "/":
        clear();
        setResult(parseInt(secondNumber) / parseInt(firstNumber));
        break;
      default:
        clear();
        setResult(0);
        break;
    }
  };

  return (
    <S.ContainerBottom>
      <S.ContainerText
        style={{
          height: 120,
          width: "90%",
          justifyContent: "flex-end",
          alignSelf: "center",
        }}
      >
        <S.SecondNumber>
          {secondNumber}
          <S.Text>{operation}</S.Text>
        </S.SecondNumber>
        {firstNumberDisplay()}
      </S.ContainerText>
      <S.Row>
      </S.Row>
      <S.Row>
        <Button title="7" onPress={() => handleNumberPress("7")} />
        <Button title="8" onPress={() => handleNumberPress("8")} />
        <Button title="9" onPress={() => handleNumberPress("9")} />
        <Button title="C" isGray onPress={clear} />
      </S.Row>
      <S.Row>
        <Button title="4" onPress={() => handleNumberPress("4")} />
        <Button title="5" onPress={() => handleNumberPress("5")} />
        <Button title="6" onPress={() => handleNumberPress("6")} />
        <Button title="-" isBlue onPress={() => handleOperationPress("-")} />
      </S.Row>
      <S.Row>
        <Button title="1" onPress={() => handleNumberPress("1")} />
        <Button title="2" onPress={() => handleNumberPress("2")} />
        <Button title="3" onPress={() => handleNumberPress("3")} />
        <Button title="+" isBlue onPress={() => handleOperationPress("+")} />
      </S.Row>
      <S.Row>
        <Button title="." onPress={() => handleNumberPress(".")} />
        <Button title="0" onPress={() => handleNumberPress("0")} />
        <Button title="⌫" onPress={() => setFirstNumber(firstNumber.slice(0, -1))} />
        <Button title="=" isBlue onPress={() => getResult()} />
      </S.Row>
    </S.ContainerBottom>
  );
}
