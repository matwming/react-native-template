import React from "react";
import { View, ActivityIndicator } from "react-native";

/**
|--------------------------------------------------
| 这里定义了一个loading的组件,封装了react native 原生的 Activity Indicator,
| 当需要显示 "加载图标" 的时候,直接引入这个组件即可,减少代码,更易于维护;
|--------------------------------------------------
*/
const Loading = () => {
    return (
        <View style={{ marginTop: "15%" }}>
            <ActivityIndicator size="large" color="lightgrey" />
        </View>
    );
};

export default Loading;
