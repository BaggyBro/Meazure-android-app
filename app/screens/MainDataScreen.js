import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";
import colors from "../misc/colors";
import SearchBar from "../components/SearchBar";
import RoundIconBtn from "../components/RoundIconBtn";
import { AntDesign } from "@expo/vector-icons";
import DataInputModal from "../components/DataInputModal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustData from "../components/custData";
import { useData } from "../context/DataProvider";
import NotFound from "../components/NotFound";
import IntroSplashModal from "../components/IntroSplashModal";

export default function MainDataScreen({ navigation }) {
  const [greet, setGreet] = useState("");
  const [modalViible, setModalVisible] = useState(false);
  const { data, setData, findData } = useData();
  const [searchQuery, setSearchQuery] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [introModalVisible, setIntroModalVisible] = useState(true);

  const findGreet = () => {
    const hrs = new Date().getHours();
    if (hrs === 0 || hrs < 12) return setGreet("Morning");
    if (hrs === 1 || hrs < 17) return setGreet("Afternoon");
    else setGreet("Evening");
  };

  const handleOnSearchInput = async (text) => {
    setSearchQuery(text);
    if (!text.trim()) {
      setSearchQuery("");
      setNotFound(false);
      return await findData();
    }
    const filteredData = data.filter((d) => {
      if (d.name.toLowerCase().includes(text.toLowerCase())) {
        return d;
      }
    });

    if (filteredData.length) {
      setData([...filteredData]);
    } else {
      setNotFound(true);
    }
  };

  useEffect(() => {
    findGreet();
  }, []);

  const handleOnSubmit = async (
    name,
    length,
    chest,
    waist,
    waistLen,
    should,
    frontN,
    backN,
    sleeveLen,
    sleeveRon,
    seatRon,
    daman,
    topText,
    pantLen,
    kneeLen,
    kneeRon,
    bottomRon,
    pantText,
    blouseLen,
    blouseChe,
    blouseWai,
    blouseWaiLen,
    blouseSleeveLen,
    blouseSleeveRon,
    blouseFrontN,
    blouseBackN,
    blouseText,
    remark
  ) => {
    const time = new Date().getTime();

    const custData = {
      id: Date.now(),
      name,
      length,
      chest,
      waist,
      waistLen,
      should,
      frontN,
      backN,
      sleeveLen,
      sleeveRon,
      seatRon,
      daman,
      topText,
      pantLen,
      kneeLen,
      kneeRon,
      bottomRon,
      pantText,
      blouseLen,
      blouseChe,
      blouseWai,
      blouseWaiLen,
      blouseSleeveLen,
      blouseSleeveRon,
      blouseFrontN,
      blouseBackN,
      blouseText,
      remark,
      time: Date.now(),
    };

    const updatedData = [...data, custData];
    setData(updatedData);

    await AsyncStorage.setItem("data", JSON.stringify(updatedData));
  };

  const openData = (data) => {
    navigation.navigate("CustDataDetail", { data });
  };

  const handleOnClear = async () => {
    setSearchQuery("");
    setNotFound(false);
    await findData();
  };

  const handleIntroModal = () => {
    setIntroModalVisible(false);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.LIGHT} />
      <View style={styles.container}>
        <Text style={styles.header}>{`Good ${greet} Aai`}</Text>
        {data.length ? (
          <SearchBar
            value={searchQuery}
            onChangeText={handleOnSearchInput}
            containerStyle={{ marginVertical: 15 }}
            onClear={handleOnClear}
          />
        ) : null}

        {notFound ? (
          <NotFound />
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <CustData item={item} onPress={() => openData(item)} />
            )}
          />
        )}

        <AntDesign
          name="plus"
          size={40}
          color={colors.LIGHT}
          style={styles.addBtn}
          onPress={() => setModalVisible(true)}
        />
      </View>
      <DataInputModal
        visible={modalViible}
        onClose={() => setModalVisible(false)}
        onSubmit={handleOnSubmit}
      />

      <IntroSplashModal
        visible={handleIntroModal}
        onPress={() => setIntroModalVisible(false)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  header: {
    fontSize: 25,
    fontWeight: "bold",
  },

  addBtn: {
    position: "absolute",
    right: 20,
    bottom: 50,
    backgroundColor: colors.PRIMARY,
    borderRadius: 50,
    padding: 10,
  },
});
