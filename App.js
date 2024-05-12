import { View, Text, StyleSheet, SafeAreaView, TextInput, Pressable } from 'react-native';
import { useState } from 'react'

export default function App() {
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [isIMCCalculated, setCalculated] = useState(null)

  function renderResult() {
    setCalculated(true)
  }

  function calculateIMC(height, weight) {
    const imc = weight / (height * height)
    return imc.toFixed(2)
  }

  function handleTextChange(value, type) {
    setCalculated(false)
    type === "height" ? setHeight(value) : setWeight(value)
  }


  return (
    <SafeAreaView style={styles.backgroud}>
      <View style={styles.container}>
        <Text style={styles.title}>Calculadora de IMC</Text>
        <Text style={styles.paragraph}>Altura:</Text>
        <TextInput placeholder="Metros" inputMode="number-pad" value={height} onChangeText={e => handleTextChange(e, "height")}
          style={styles.input} />
        <Text style={styles.paragraph}>Peso:</Text>
        <TextInput placeholder="Quilos" inputMode="number-pad" value={weight} onChangeText={e => handleTextChange(e, "weight")}
          style={styles.input} />
        <Pressable
          onPress={renderResult}
          style={styles.btn}>
          <Text style={styles.btnText}>Calcular</Text>
        </Pressable>
        <Text style={styles.resultParagraph}>Resultado</Text>
        <View style={styles.resultBox}>
          {isIMCCalculated &&
            <Text style={{ textAlign: 'center', marginTop: 30, }}>{calculateIMC(height, weight)}</Text>
          }
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroud: {
    backgroundColor: "#5B5B5B",
    height: 860,
  },
  title: {
    fontSize: 22,
    marginTop: 30,
    alignSelf: "center",
    fontWeight: 700,
    color: "purple"
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    width: 328,
    height: 580,
    marginLeft: 34,
    marginRight: 34,
    marginTop: 85,
    marginBottom: 85,
    border: 1,
    borderRadius: 20,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 500,
    marginTop: 28,
    marginLeft: 22,
  },
  input: {
    width: 300,
    marginTop: 12,
    alignSelf: "center",
    height: 70,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#D3D3D3",
    backgroundColor: "#ffffff",
    borderStyle: "stroke",
    paddingLeft: 20,
    shadowOpacity: '0.25',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  btn: {
    width: 300,
    alignSelf: "center",
    height: 70,
    marginTop: 28,
    backgroundColor: "#610E95",
    borderRadius: 15,
  },
  btnText: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: 600,
    marginTop: 25,
    marginBottom: 23,
    textAlign: "center",
  },
  resultParagraph: {
    fontSize: 18,
    fontWeight: 500,
    marginTop: 22,
    textAlign: "center"
  },
  resultBox: {
    marginTop: 12,
    width: 300,
    alignSelf: "center",
    height: 88,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#D3D3D3",
    backgroundColor: "#ffffff",
    borderStyle: "stroke",
    paddingLeft: 20,
    shadowOpacity: '0.25',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  }
});
