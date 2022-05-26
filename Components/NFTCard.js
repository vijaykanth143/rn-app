import { View, Image, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { CircleButton, RectButton } from "./Button";
import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";
import { useState } from "react";

const NFTCard = ({ data }) => {
  const [Likes, setlikes] = useState(false);
  const navigation = useNavigation();
  const LikeHandler = (id) => {
    setlikes(!Likes);
    console.log(id);
  };
  console.log(Likes);
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        {Likes ? (
          <CircleButton
            imgUrl={assets.heartwhite}
            right={10}
            top={10}
            handlePress={LikeHandler}
            like={Likes}
          />
        ) : (
          <CircleButton
            imgUrl={assets.heart}
            right={10}
            top={10}
            handlePress={LikeHandler}
            like={Likes}
          />
        )}

        <Text>{Likes}</Text>
      </View>
      <SubInfo />
      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitlesize={SIZES.small}
        />
      </View>
      <View
        style={{
          marginTop: SIZES.font,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <EthPrice price={data.price} />
        <RectButton
          minWidth={120}
          fontSize={SIZES.font}
          handlePress={() => navigation.navigate("Details", { data })}
        />
      </View>
    </View>
  );
};

export default NFTCard;
