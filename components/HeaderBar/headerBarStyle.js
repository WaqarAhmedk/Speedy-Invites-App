import { StyleSheet } from "react-native";
import { AppColors } from "../../constants/constants";


const headerStylesheet=StyleSheet.create({
    main:{
    flex:1,
    backgroundColor:AppColors.mainBackgroundColor,
    paddingHorizontal:10,
    paddingVertical: 10
    },
    innercontainer:{
        flexDirection:'row',
        gap:10
    },
    headerTitle:{
        color:AppColors.white,
        fontSize:25,
        fontWeight:'bold'
    }
})

module.exports=headerStylesheet;