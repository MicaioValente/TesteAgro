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