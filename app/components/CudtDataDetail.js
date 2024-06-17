import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import colors from "../misc/colors";
import RoundIconButton from "./RoundIconBtn";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useData } from "../context/DataProvider";
import DataInputModal from "./DataInputModal";

export default function CustDataDetail(props) {
  const [data, setDatae] = useState(props.route.params.data);
  const { setData } = useData();
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const formatDate = (ms) => {
    const date = new Date(ms);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hrs = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    return `${day}/${month}/${year} - ${hrs}:${min}:${sec}`;
  };

  const displayDeleteAlert = () => {
    Alert.alert(
      "Are You Sure!",
      "This action will delete this data permanently!",
      [
        {
          text: "Delete",
          onPress: deleteData,
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancelled"),
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  const deleteData = async () => {
    try {
      const res = await AsyncStorage.getItem("data");
      let storedData = [];

      if (res !== null) {
        storedData = JSON.parse(res);
      }

      const updatedData = storedData.filter((item) => item.id !== data.id);
      setData(updatedData);
      await AsyncStorage.setItem("data", JSON.stringify(updatedData));
      props.navigation.goBack(); // Navigate back after successful deletion
    } catch (error) {
      console.error("Error deleting data: ", error);
      // Handle error (e.g., show an alert)
    }
  };

  const handleUpdate = async (
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
    const res = await AsyncStorage.getItem("data");
    let storedData = [];
    if (res !== null) storedData = JSON.parse(res);

    const newData = storedData.filter((d) => {
      if (d.id == data.id) {
        d.name = name;
        d.length = length;
        d.chest = chest;
        d.waist = waist;
        d.waistLen = waistLen;
        d.should = should;
        d.frontN = frontN;
        d.backN = backN;
        d.sleeveLen = sleeveLen;
        d.sleeveRon = sleeveRon;
        d.seatRon = seatRon;
        d.daman = daman;
        d.topText = topText;
        d.pantLen = pantLen;
        d.kneeLen = kneeLen;
        d.kneeRon = kneeRon;
        d.bottomRon = bottomRon;
        d.pantText = pantText;
        d.blouseLen = blouseLen;
        d.blouseChe = blouseChe;
        d.blouseWai = blouseWai;
        d.blouseWaiLen = blouseWaiLen;
        d.blouseSleeveLen = blouseSleeveLen;
        d.blouseSleeveRon = blouseSleeveRon;
        d.blouseFrontN = blouseFrontN;
        d.blouseBackN = blouseBackN;
        d.blouseText = blouseText;
        d.remark = remark;
        d.isUpated = true;
        d.time = Date.now();

        setDatae(d);
      }
      return d;
    });

    setData(newData);
    await AsyncStorage.setItem("data", JSON.stringify(newData));
  };
  const handleOnClose = () => {
    setShowModal(false);
  };

  const openEditModal = () => {
    setIsEdit(true);
    setShowModal(true);
  };

  return (
    <>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Text style={styles.time}>
            {data.isUpated
              ? `Updated At ${formatDate(data.time)}`
              : `Created At ${formatDate(data.time)}`}
          </Text>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.heading}>TOP</Text>
          <Text style={styles.measure}>Length: {data.length}</Text>
          <Text style={styles.measure}>Chest: {data.chest}</Text>
          <Text style={styles.measure}>Waist: {data.waist}</Text>
          <Text style={styles.measure}>Waist Length: {data.waistLen}</Text>
          <Text style={styles.measure}>Shoulder: {data.should}</Text>
          <Text style={styles.measure}>Front Neck: {data.frontN}</Text>
          <Text style={styles.measure}>Back Neck: {data.backN}</Text>
          <Text style={styles.measure}>Sleeve Length: {data.sleeveLen}</Text>
          <Text style={styles.measure}>Sleeve Round: {data.sleeveRon}</Text>
          <Text style={styles.measure}>Seat Round: {data.seatRon}</Text>
          <Text style={styles.measure}>Daman: {data.daman}</Text>
          <Text style={styles.heading}>PANT</Text>
          <Text style={styles.measure}>Length: {data.pantLen}</Text>
          <Text style={styles.measure}>Knee Length: {data.kneeLen}</Text>
          <Text style={styles.measure}>Knee Round: {data.kneeRon}</Text>
          <Text style={styles.measure}>Bottom Round: {data.bottomRon}</Text>
          <Text style={styles.heading}>BLOUSE</Text>
          <Text style={styles.measure}>Length: {data.blouseLen}</Text>
          <Text style={styles.measure}>Chest: {data.blouseChe}</Text>
          <Text style={styles.measure}>Waist: {data.blouseWai}</Text>
          <Text style={styles.measure}>Waist Length: {data.blouseWaiLen}</Text>
          <Text style={styles.measure}>
            Sleeve Length: {data.blouseSleeveLen}
          </Text>
          <Text style={styles.measure}>
            Sleeve Round: {data.blouseSleeveRon}
          </Text>
          <Text style={styles.measure}>Front Neck: {data.blouseFrontN}</Text>
          <Text style={styles.measure}>Back Neck: {data.blouseBackN}</Text>
          <Text style={styles.heading}>Remark: {data.remark}</Text>
        </ScrollView>
        <View style={styles.btnContainer}>
          <AntDesign
            name="edit"
            size={40}
            onPress={openEditModal}
            style={{
              backgroundColor: colors.PRIMARY,
              padding: 10,
              marginBottom: 35,
              borderRadius: 50,
              elevation: 5,
            }}
          />
          <AntDesign
            name="delete"
            size={40}
            onPress={displayDeleteAlert}
            style={{
              backgroundColor: colors.ERROR,
              padding: 10,
              marginBottom: 35,
              borderRadius: 50,
              elevation: 5,
            }}
          />
        </View>
      </View>
      <DataInputModal
        isEdit={isEdit}
        data={data}
        onClose={handleOnClose}
        onSubmit={handleUpdate}
        visible={showModal}
      />
    </>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 30,
    color: colors.PRIMARY,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  scrollViewContent: {
    paddingTop: 50,
  },
  measure: {
    fontSize: 20,
    opacity: 0.5,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },
  time: {
    textAlign: "right",
    fontSize: 12,
    opacity: 0.5,
    paddingRight: 20,
  },
  btnContainer: {
    position: "absolute",
    right: 10,
    bottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
});
