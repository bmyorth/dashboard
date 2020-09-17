import { FlexStyle } from "react-native";
import {itemWidth} from "./screen.service";
import {shadow} from "./shadow";



export const flexContainer = {
    display: 'flex' as FlexStyle['display'],
}
export const flexContainer1 = {
    flex: 1 as FlexStyle['flex'],
}
export const flexContainerDiretionColumn = {
    flexDirection: 'column' as FlexStyle['flexDirection'],
}
export const flexContainerDiretionRow = {
    flexDirection: 'row' as FlexStyle['flexDirection'],
}
export const flexContainerjustifyContentSpaceAround= {
    justifyContent: 'space-around' as FlexStyle['justifyContent']
}
export const flexContainerjustifyContentSpaceBetween= {
    justifyContent: 'space-between' as FlexStyle['justifyContent']
}
export const flexjustifyContentEnd= {
    justifyContent: 'flex-end' as FlexStyle['justifyContent']
}
export const flexjustifyContentStart= {
    justifyContent: 'flex-start' as FlexStyle['justifyContent']
}
export const flexjustifyContentCenter= {
    justifyContent: 'center' as FlexStyle['justifyContent']
}
export const flexalignItemsEnd= {
    justifyContent: 'flex-end' as FlexStyle['justifyContent']
}
export const flexalignItemsStart= {
    justifyContent: 'flex-start' as FlexStyle['justifyContent']
}
export const flexalignSelfEnd= {
    alignSelf: 'flex-end' as FlexStyle['alignSelf']
}
export const flexalignItems= {
    alignItems: 'center' as FlexStyle['alignItems']
}


export const flexContainerCentered = {
    ...flexContainer,
    alignItems: 'center' as FlexStyle['alignItems'],
    justifyContent: 'center' as FlexStyle['justifyContent'],
}

export const viewContainer = {
    ...flexContainerCentered,
    flex: 1,
    minHeight: '80%'
}

export const viewContent = {
    ...flexContainerCentered,
    flex: 6,
}

export const flexRow= {
    ...flexContainer,
    flexDirection: 'row' as FlexStyle['flexDirection'],
    marginTop: 20,
    marginBottom: 5,
    minWidth: 300,
    alignItems: 'center' as FlexStyle['alignItems']
}

export const flexRowAround = {
    ...flexRow,
    justifyContent: 'space-around' as FlexStyle['justifyContent'],


}
export const flexStretch= {
    alignItems: 'stretch' as FlexStyle['alignItems'],


}
export const globalContainer = {
    ...flexContainer,
    ...flexContainerDiretionColumn,
    ...flexContainerjustifyContentSpaceBetween,
    flex: 1,
    paddingBottom: 8
}
export const globalContainerfull = {
    ...flexContainer,
    ...flexContainerDiretionColumn,
    ...flexContainerjustifyContentSpaceBetween,
    flex: 1,
    alignItems: 'stretch' as FlexStyle['alignItems'],

}
export const globalContainerHeader = {
    ...flexContainer,
    ...flexContainerDiretionColumn,
    alignItems: 'flex-start' as FlexStyle['alignItems'],
    marginTop: 5,
    marginBottom: 5,
    paddingHorizontal: 25,

}
export const globalContainerContent = {
    ...flexContainer,
    ...flexContainerDiretionColumn,
    alignItems: 'stretch' as FlexStyle['alignItems'],
    marginTop: 10,
    paddingHorizontal: 20,
}

export const globalContainerFooter = {
    ...flexContainer,
    ...flexContainerDiretionColumn,
    justifyContent: 'flex-end' as FlexStyle['justifyContent'],
    alignItems: 'center' as FlexStyle['alignItems'],
    paddingTop: 8,
    // paddingHorizontal:20,


}
export const globalContainerFooterFull = {
    ...flexContainer,
    ...flexContainerDiretionColumn,
    justifyContent: 'flex-end' as FlexStyle['justifyContent'],
    alignItems: 'center' as FlexStyle['alignItems'],


}
const dimension = itemWidth * 0.40;
export const ballbig = {
    width: dimension,
    height:dimension,
    backgroundColor: 'transparent',
     borderRadius: 80,
     ...flexContainerCentered,
     alignSelf: 'center',
     position: 'absolute'
}
const dimension1 = itemWidth * 0.15;
export const ballsmall = {
    width: dimension1,
    height:dimension1,
    backgroundColor: 'transparent',
     borderRadius: 40,
     ...flexContainerCentered,


}
export const globalContainerHeaderDashboard = {
    ...flexContainer,
    ...flexContainerDiretionColumn,
    alignItems: 'center' as FlexStyle['alignItems'],
    justifyContent: 'center' as FlexStyle['justifyContent'],
    marginTop: 5,
    marginBottom: 5,
    paddingHorizontal: 25,
    height: itemWidth * 0.50,
    flex:1
}
