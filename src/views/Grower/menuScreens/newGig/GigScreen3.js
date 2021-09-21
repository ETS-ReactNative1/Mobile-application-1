// src/views/Grower/NewGig.js

import React, {useState, useEffect, useContext} from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Button,
  ScrollView,
  TextInput,
} from "react-native";

import SelectBox from "react-native-multi-selectbox";

import * as Colors from "../../../../styles/abstracts/colors";
import AppHeader from "../../../Common/AppHeader";

import DatePickerComp from "../../../Common/DatePickerComp";

const K_OPTIONS = [
  {
    item: "kg",
    id: "kg",
  },
  {
    item: "pcs",
    id: "pcs",
  },
  {
    item: "g",
    id: "g",
  },
];

function GigScreen3({navigation, route}) {
  const {gigType, gigCategory, gigTitle, gigDescription, deliveryOp} = route.params;

  console.log("Gig Type: ", gigType);
  console.log("Gig Category: ", gigCategory);
  console.log("Gig Type: ", gigTitle);
  console.log("Gig Category: ", gigDescription);
  console.log("Gig Category: ", deliveryOp);

  const onSubmit = formFields => {
    // Actions on submit button click.

    navigation.navigate("GigScreen4", {
      gigType: gigType,
      gigCategory: gigCategory,
      gigTitle: gigTitle,
      gigDescription: gigDescription,
      deliveryOp: deliveryOp,
      selectedUnit: selectedUnit.item,
      quantity: quantity,
      price: price,
      minOrderAmount: minOrderAmount,
      gigDuration: gigDuration,
    });
    console.log("Gig Type: ", gigType);
    console.log("Gig Category: ", gigCategory);
    console.log("Gig Type: ", gigTitle);
    console.log("Gig Category: ", gigDescription);
    console.log("Gig Category: ", deliveryOp);

    console.log("unit: ", selectedUnit.item);
    console.log("Quantity: ", quantity);
    console.log("Price: ", price);
    console.log("minAmount: ", minOrderAmount);
    console.log("Gig Duration: ", gigDuration);
  };

  const [selectedUnit, setSelectedTeam] = useState({});
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [minOrderAmount, setMinOrder] = useState("");
  const [gigDuration, setGigDuration] = useState("");

  function setUnit() {
    return val => setSelectedTeam(val);
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary.color} />

      <AppHeader navigation={navigation} title="Add a New Gig" showBackButton={true} />

      <View style={styles.selectBox}>
        <SelectBox
          labelStyle={styles.labelText}
          label={"Select Unit"}
          options={K_OPTIONS}
          value={selectedUnit}
          onChange={setUnit()}
          hideInputFilter={false}
        />
      </View>

      <Text style={styles.labelText}>No. of Units</Text>
      <TextInput
        style={styles.input}
        onChangeText={setQuantity}
        value={quantity}
        placeholder="Enter Number of Units for selling"
        keyboardType="numeric"
      />
      <Text style={styles.labelText}>Unit Price (Rs.)</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPrice}
        value={price}
        placeholder="Enter Selling Price of a Unit"
        keyboardType="numeric"
      />

      <Text style={styles.labelText}>Minimum Order Amount Accepting (Rs.)</Text>
      <TextInput
        style={styles.input}
        onChangeText={setMinOrder}
        value={minOrderAmount}
        placeholder="Enter minimum order amount accepting "
        keyboardType="numeric"
      />

      <Text style={styles.labelText}>Gig Duration</Text>
      <TextInput
        style={styles.input}
        onChangeText={setGigDuration}
        value={gigDuration}
        placeholder="Enter number of days for gig existence "
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => onSubmit()}>
          <Text style={styles.btnTxt}>Publish Gig</Text>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.buttonContainer}>
        <Button
          accessibilityLabel="submit-button"
          title="Submit"
          buttonStyle={styles.button}
          onPress={onSubmit}
        />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  selectBox: {
    margin: 20,
    borderColor: "#000000",
  },

  labelText: {
    marginLeft: 15,
    marginRight: 15,
    color: "#000000",
    fontSize: 15,
  },
  input: {
    height: 40,
    margin: 15,
    borderWidth: 1,
    padding: 10,
  },

  button: {
    width: "40%",
    alignSelf: "center",
    margin: 20,
    elevation: 8,
    backgroundColor: Colors.primary.color,
    marginTop: 8,
    alignItems: "center",
    paddingVertical: 0,
    borderRadius: 30,
    // minHeight: 100,
  },
  btnTxt: {
    color: "#ffff",
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default GigScreen3;
