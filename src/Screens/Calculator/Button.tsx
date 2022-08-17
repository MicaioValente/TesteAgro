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

    return (
        <S.ContainerButtom>
            <Button
                onPress={onPress}
                title={title}
                color={'#9a9a9a54'}
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
