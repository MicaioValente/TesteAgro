import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #dbdbdb;
`

export const Number = styled.Text`
    height: ${RFValue(22)}px;
    font-size: ${RFValue(18)}px;
    color: #fff;
`

export const Row = styled.Text`
    max-width: 100%;
    flex-Direction: row;
`

export const FirstNumber = styled.Text`
    font-size:${RFValue(96)}px;
    color: #747477;
    font-weight: 200;
    align-self: flex-end;
`

export const SecondNumber = styled.Text`
    font-size:${RFValue(40)}px;
    color: #747477;
    font-weight: 200;
    align-self: flex-end;
`

export const ContainerBottom = styled.View`
    position: absolute;
    bottom: ${RFValue(50)}px;
`

export const ContainerText = styled.View`
    height: ${RFValue(120)}px;
    width: 90%;
    justify-content: flex-end;
    align-self: center;
`

export const Text = styled.Text`
    color: #9002f5;
    font-size: ${RFValue(30)}px;
    font-weight: 500;
`

export const SmallText = styled.Text`
    font-size: ${RFValue(32)}px;
    color: #fff;
`

export const ContainerButtom = styled.View`
`