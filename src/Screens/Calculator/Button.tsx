import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import * as S from './styles'
import { Button } from "@react-native-material/core";

interface ButtonProps {
    onPress: () => void;
    title: string;
    isBlue?: boolean;
    isGray?: boolean;
}


export default function ButtonCalculator({ title, onPress, isBlue, isGray }: ButtonProps) {
    const choseColor = () => {
        if (isBlue) {
            return '#4B5EFC'
        }
        if (isGray) {
            return '#4E505F'
        }
    }

    {/* <S.Buttom
    style={choseColor()}
    onPress={onPress}>
    <S.SmallText>
        {title}
    </S.SmallText>
</S.Buttom> */}
    //     export const Buttom = styled(Button)`
    //     width: ${RFValue(72)}px;
    //     height: ${RFValue(72)}px;
    //     border-radius: ${RFValue(24)}px;
    //     background-color: ${({ Color }) => Color};
    //     justify-content: center;
    //     align-items: center;
    //     margin: ${RFValue(8)}px;
    // `
    return (
        <S.ContainerButtom>
            <Button
                onPress={onPress}
                title={title}
                color={'#9a9a9a54'}
                // color={'#fff'}
                titleStyle={{
                    color: choseColor()
                }}
                uppercase={true}
                contentContainerStyle={{
                    height: 72,
                    width: 72,
                }}

            />
        </S.ContainerButtom>

    );
}
