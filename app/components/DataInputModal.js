import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import colors from "../misc/colors";
import { AntDesign } from "@expo/vector-icons";

export default function DataInputModal({
  visible,
  onClose,
  onSubmit,
  isEdit,
  data,
}) {
  //TOP
  const [name, setName] = useState("");
  const [length, setLength] = useState("");
  const [chest, setChest] = useState("");
  const [waist, setWaist] = useState("");
  const [waistLen, setWaistLen] = useState("");
  const [should, setShould] = useState("");
  const [frontN, setFrontN] = useState("");
  const [backN, setBackN] = useState("");
  const [sleeveLen, setSleeveLen] = useState("");
  const [sleeveRon, setSleeveRon] = useState("");
  const [seatRon, setSeatRon] = useState("");
  const [daman, setDaman] = useState("");
  const [topText, setTopText] = useState("");

  //PANT
  const [pantLen, setPantLen] = useState("");
  const [kneeLen, setKneeLen] = useState("");
  const [kneeRon, setKneeRon] = useState("");
  const [bottomRon, setBottomRon] = useState("");
  const [pantText, setPantText] = useState("");

  //BLOUSE
  const [blouseLen, setBlouseLen] = useState("");
  const [blouseChe, setBlouseChe] = useState("");
  const [blouseWai, setBlouseWai] = useState("");
  const [blouseWaiLen, setBlouseWaiLen] = useState("");
  const [blouseSleeveLen, setBlouseSleeveLen] = useState("");
  const [blouseSleeveRon, setBlouseSleeveRon] = useState("");
  const [blouseFrontN, setBlouseFrontN] = useState("");
  const [blouseBackN, setBlouseBackN] = useState("");
  const [blouseText, setBlouseText] = useState("");

  const [remark, setRemark] = useState("");

  const handleOnChangeInput = (text, valueFor) => {
    if (valueFor === "name") setName(text);
    else if (valueFor === "length") setLength(text);
    else if (valueFor === "chest") setChest(text);
    else if (valueFor === "waist") setWaist(text);
    else if (valueFor === "waistLen") setWaistLen(text);
    else if (valueFor === "should") setShould(text);
    else if (valueFor === "frontN") setFrontN(text);
    else if (valueFor === "backN") setBackN(text);
    else if (valueFor === "sleeveLen") setSleeveLen(text);
    else if (valueFor === "sleeveRon") setSleeveRon(text);
    else if (valueFor === "seatRon") setSeatRon(text);
    else if (valueFor === "daman") setDaman(text);
    else if (valueFor === "topText") setTopText(text);
    else if (valueFor === "pantLen") setPantLen(text);
    else if (valueFor === "kneeLen") setKneeLen(text);
    else if (valueFor === "kneeRon") setKneeRon(text);
    else if (valueFor === "bottomRon") setBottomRon(text);
    else if (valueFor === "pantText") setPantText(text);
    else if (valueFor === "blouseLen") setBlouseLen(text);
    else if (valueFor === "blouseChe") setBlouseChe(text);
    else if (valueFor === "blouseWai") setBlouseWai(text);
    else if (valueFor === "blouseWaiLen") setBlouseWaiLen(text);
    else if (valueFor === "blouseSleeveLen") setBlouseSleeveLen(text);
    else if (valueFor === "blouseSleeveRon") setBlouseSleeveRon(text);
    else if (valueFor === "blouseFrontN") setBlouseFrontN(text);
    else if (valueFor === "blouseBackN") setBlouseBackN(text);
    else if (valueFor === "blouseText") setBlouseText(text);
    else if (valueFor === "remark") setRemark(text);
  };

  const handleSubmit = () => {
    if (!name.trim()) return onClose();

    if (isEdit) {
      onSubmit(
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
        Date.now()
      );
    } else {
      onSubmit(
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
      );
      setName("");
      setLength("");
      setChest("");
      setWaist("");
      setWaistLen("");
      setShould("");
      setFrontN("");
      setBackN("");
      setSleeveLen("");
      setSleeveRon("");
      setSeatRon("");
      setDaman("");
      setTopText("");
      setPantLen("");
      setKneeLen("");
      setKneeRon("");
      setBottomRon("");
      setPantText("");
      setBlouseLen("");
      setBlouseChe("");
      setBlouseWai("");
      setBlouseWaiLen("");
      setBlouseSleeveLen("");
      setBlouseSleeveRon("");
      setBlouseFrontN("");
      setBlouseBackN("");
      setBlouseText("");
      setRemark("");
    }
    onClose();
  };

  const closeModal = () => {
    if (!isEdit) {
      setName("");
      setLength("");
      setChest("");
      setWaist("");
      setWaistLen("");
      setShould("");
      setFrontN("");
      setBackN("");
      setSleeveLen("");
      setSleeveRon("");
      setSeatRon("");
      setDaman("");
      setTopText("");
      setPantLen("");
      setKneeLen("");
      setKneeRon("");
      setBottomRon("");
      setPantText("");
      setBlouseLen("");
      setBlouseChe("");
      setBlouseWai("");
      setBlouseWaiLen("");
      setBlouseSleeveLen("");
      setBlouseSleeveRon("");
      setBlouseFrontN("");
      setBlouseBackN("");
      setBlouseText("");
      setRemark("");
    }
    onClose();
  };

  useEffect(() => {
    if (isEdit) {
      setName(data.name);
      setLength(data.length);
      setChest(data.chest);
      setWaist(data.waist);
      setWaistLen(data.waistLen);
      setShould(data.should);
      setFrontN(data.frontN);
      setBackN(data.backN);
      setSleeveLen(data.sleeveLen);
      setSleeveRon(data.sleeveRon);
      setSeatRon(data.seatRon);
      setDaman(data.daman);
      setTopText(data.topText);
      setPantLen(data.pantLen);
      setKneeLen(data.kneeLen);
      setKneeRon(data.kneeRon);
      setBottomRon(data.bottomRon);
      setPantText(data.pantText);
      setBlouseLen(data.blouseLen);
      setBlouseChe(data.blouseChe);
      setBlouseWai(data.blouseWai);
      setBlouseWaiLen(data.blouseWaiLen);
      setBlouseSleeveLen(data.blouseSleeveLen);
      setBlouseSleeveRon(data.blouseSleeveRon);
      setBlouseFrontN(data.blouseFrontN);
      setBlouseBackN(data.blouseBackN);
      setBlouseText(data.blouseText);
      setRemark(data.remark);
    }
  }, [isEdit]);

  return (
    <>
      <StatusBar hidden />
      <Modal visible={visible} animationType="slide">
        <ScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <TextInput
                value={name}
                onChangeText={(text) => handleOnChangeInput(text, "name")}
                placeholder="Name"
                style={[styles.input, styles.custname]}
              />
              <View style={styles.measurementsContainer}>
                <View style={styles.columnContainer}>
                  <Text style={styles.heading}>TOP</Text>
                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>Length:</Text>
                    <TextInput
                      value={length}
                      onChangeText={(text) =>
                        handleOnChangeInput(text, "length")
                      }
                      keyboardType="numeric"
                      style={[styles.input, styles.measure]}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>Chest:</Text>
                    <TextInput
                      value={chest}
                      onChangeText={(text) =>
                        handleOnChangeInput(text, "chest")
                      }
                      keyboardType="numeric"
                      style={[styles.input, styles.measure]}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>Waist:</Text>
                    <TextInput
                      value={waist}
                      onChangeText={(text) =>
                        handleOnChangeInput(text, "waist")
                      }
                      keyboardType="numeric"
                      style={[styles.input, styles.measure]}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>W.Len:</Text>
                    <TextInput
                      value={waistLen}
                      onChangeText={(text) =>
                        handleOnChangeInput(text, "waistLen")
                      }
                      keyboardType="numeric"
                      style={[styles.input, styles.measure]}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>Should:</Text>
                    <TextInput
                      value={should}
                      onChangeText={(text) =>
                        handleOnChangeInput(text, "should")
                      }
                      keyboardType="numeric"
                      style={[styles.input, styles.measure]}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>F.Neck:</Text>
                    <TextInput
                      value={frontN}
                      onChangeText={(text) =>
                        handleOnChangeInput(text, "frontN")
                      }
                      keyboardType="numeric"
                      style={[styles.input, styles.measure]}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>B.Neck:</Text>
                    <TextInput
                      value={backN}
                      onChangeText={(text) =>
                        handleOnChangeInput(text, "backN")
                      }
                      keyboardType="numeric"
                      style={[styles.input, styles.measure]}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>Sl.Len:</Text>
                    <TextInput
                      value={sleeveLen}
                      onChangeText={(text) =>
                        handleOnChangeInput(text, "sleeveLen")
                      }
                      keyboardType="numeric"
                      style={[styles.input, styles.measure]}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>Sl.Rnd:</Text>
                    <TextInput
                      value={sleeveRon}
                      onChangeText={(text) =>
                        handleOnChangeInput(text, "sleeveRon")
                      }
                      keyboardType="numeric"
                      style={[styles.input, styles.measure]}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>St.Rnd:</Text>
                    <TextInput
                      value={seatRon}
                      onChangeText={(text) =>
                        handleOnChangeInput(text, "seatRon")
                      }
                      keyboardType="numeric"
                      style={[styles.input, styles.measure]}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>Daman:</Text>
                    <TextInput
                      value={daman}
                      onChangeText={(text) =>
                        handleOnChangeInput(text, "daman")
                      }
                      keyboardType="numeric"
                      style={[styles.input, styles.measure]}
                    />
                  </View>
                </View>

                <View style={styles.columnContainer}>
                  <Text style={styles.heading}>PANT</Text>
                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>Length:</Text>
                    <TextInput
                      value={pantLen}
                      onChangeText={(text) =>
                        handleOnChangeInput(text, "pantLen")
                      }
                      keyboardType="numeric"
                      style={[styles.input, styles.measure]}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>K.Len:</Text>
                    <TextInput
                      value={kneeLen}
                      onChangeText={(text) =>
                        handleOnChangeInput(text, "kneeLen")
                      }
                      keyboardType="numeric"
                      style={[styles.input, styles.measure]}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>K.Rnd:</Text>
                    <TextInput
                      value={kneeRon}
                      onChangeText={(text) =>
                        handleOnChangeInput(text, "kneeRon")
                      }
                      keyboardType="numeric"
                      style={[styles.input, styles.measure]}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>B.Rnd:</Text>
                    <TextInput
                      value={bottomRon}
                      onChangeText={(text) =>
                        handleOnChangeInput(text, "bottomRon")
                      }
                      keyboardType="numeric"
                      style={[styles.input, styles.measure]}
                    />
                  </View>
                </View>

                <View style={styles.columnContainer}>
                  <Text style={styles.heading}>BLOUSE</Text>
                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>Length:</Text>
                    <TextInput
                      value={blouseLen}
                      onChangeText={(text) =>
                        handleOnChangeInput(text, "blouseLen")
                      }
                      keyboardType="numeric"
                      style={[styles.input, styles.measure]}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>Chest:</Text>
                    <TextInput
                      value={blouseChe}
                      onChangeText={(text) =>
                        handleOnChangeInput(text, "blouseChe")
                      }
                      keyboardType="numeric"
                      style={[styles.input, styles.measure]}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>Waist:</Text>
                    <TextInput
                      value={blouseWai}
                      onChangeText={(text) =>
                        handleOnChangeInput(text, "blouseWai")
                      }
                      keyboardType="numeric"
                      style={[styles.input, styles.measure]}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>W.Len:</Text>
                    <TextInput
                      value={blouseWaiLen}
                      onChangeText={(text) =>
                        handleOnChangeInput(text, "blouseWaiLen")
                      }
                      keyboardType="numeric"
                      style={[styles.input, styles.measure]}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>Sl.Len:</Text>
                    <TextInput
                      value={blouseSleeveLen}
                      onChangeText={(text) =>
                        handleOnChangeInput(text, "blouseSleeveLen")
                      }
                      keyboardType="numeric"
                      style={[styles.input, styles.measure]}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>Sl.Rnd:</Text>
                    <TextInput
                      value={blouseSleeveRon}
                      onChangeText={(text) =>
                        handleOnChangeInput(text, "blouseSleeveRon")
                      }
                      keyboardType="numeric"
                      style={[styles.input, styles.measure]}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>F.Neck:</Text>
                    <TextInput
                      value={blouseFrontN}
                      onChangeText={(text) =>
                        handleOnChangeInput(text, "blouseFrontN")
                      }
                      keyboardType="numeric"
                      style={[styles.input, styles.measure]}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>B.Neck:</Text>
                    <TextInput
                      value={blouseBackN}
                      onChangeText={(text) =>
                        handleOnChangeInput(text, "blouseBackN")
                      }
                      keyboardType="numeric"
                      style={[styles.input, styles.measure]}
                    />
                  </View>
                </View>
              </View>
              <TextInput
                value={remark}
                onChangeText={(text) => handleOnChangeInput(text, "remark")}
                placeholder="Remarks"
                style={[styles.custname, styles.input]}
              />

              <View style={styles.btnContainer}>
                {name.trim() ? (
                  <AntDesign
                    name="check"
                    size={20}
                    style={styles.checkBtn}
                    onPress={handleSubmit}
                  />
                ) : null}
                <AntDesign
                  name="close"
                  size={20}
                  style={styles.checkBtn}
                  onPress={closeModal}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
        <StatusBar hidden />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  measurementsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    marginVertical: 16,
  },
  columnContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: colors.PRIMARY,
    fontSize: 15,
    paddingHorizontal: 8,
  },
  label: {
    fontSize: 15,
    marginRight: 8,
  },
  custname: {
    textAlign: "center",
    width: 200,
    marginBottom: 15,
    fontWeight: "bold",
    fontSize: 35,
  },
  measure: {
    width: 50,
    height: 35,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 15,
    gap: 10,
  },
  checkBtn: {
    backgroundColor: colors.PRIMARY,
    padding: 15,
    borderRadius: 50,
    elevation: 5,
  },
});
