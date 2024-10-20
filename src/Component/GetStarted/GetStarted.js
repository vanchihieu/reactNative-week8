import React from "react";
import { TouchableOpacity } from "react-native";
import { Image, Text, View } from "react-native";

const GetStarted = ({navigation}) => {
  return (
    <View style={{ paddingVertical: 60, paddingHorizontal: 16 }}>
      <Text style={{ fontSize: 20, textAlign: "center", fontWeight: "bold" }}>
        A premium online store for sporter and their stylish choice
      </Text>
      <View
        style={{
          backgroundColor: "#E941411A",
          borderRadius: 12,
          marginTop: 40,
          height: 388,
          flexBasis: "auto",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../../assets/bikeblue.png")}
          width={200}
          height={200}
        />
      </View>
      <View style={{ marginTop: 32 }}>
        <Text style={{ fontSize: 24, textAlign: "center", fontWeight: "bold" }}>
          POWER BIKE
        </Text>
        <Text style={{ fontSize: 24, textAlign: "center", fontWeight: "bold" }}>
          SHOP
        </Text>
      </View>

      <View style={{marginTop: 36}}>
        <TouchableOpacity
          style={{ backgroundColor: "#E94141", padding: 16, borderRadius: 18 }}
          onPress={() => navigation.navigate('ListProduct') }
        >
          <Text style={{ color: "white", fontSize: 20 , textAlign: 'center', fontWeight: 'bold'}}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GetStarted;
