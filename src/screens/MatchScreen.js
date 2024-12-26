import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

const MatchScreen = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const teams = {
    A: {
      name: "Manchester United",
      logo: require("../../assets/logo/ManchesterUnited.png"),
    },
    B: {
      name: "Manchester City",
      logo: require("../../assets/logo/ManchesterCity.png"),
    },
  };

  // Menambah skor tim A atau B
  const handleAddScore = team => {
    if (team === "A") {
      const newScore = scoreA + 1;
      setScoreA(newScore);
      if (newScore === 10) Alert.alert("Winner", `${teams.A.name} wins!`);
    } else {
      const newScore = scoreB + 1;
      setScoreB(newScore);
      if (newScore === 10) Alert.alert("Winner", `${teams.B.name} wins!`);
    }
  };

  // Mengurangi skor tim A atau B, tidak boleh di bawah 0
  const handleSubtractScore = team => {
    if (team === "A" && scoreA > 0) {
      setScoreA(scoreA - 1);
    } else if (team === "B" && scoreB > 0) {
      setScoreB(scoreB - 1);
    }
  };

  // Reset skor
  const handleReset = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.date}>31.12.2024 03:00</Text>
      <View style={styles.matchContainer}>
        <View style={styles.teamContainer}>
          <Image source={teams.A.logo} style={styles.teamLogo} />
          <Text style={styles.teamName}>{teams.A.name}</Text>
          {/* Tombol untuk tim A */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleAddScore("A")}
            >
              <Text style={styles.buttonText}>+ {teams.A.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSubtractScore("A")}
            >
              <Text style={styles.buttonText}>- {teams.A.name}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Skor di tengah antara logo tim A dan tim B */}
        <View style={styles.scoreContainer}>
          <Text style={styles.score}>
            {scoreA} - {scoreB}
          </Text>
        </View>

        <View style={styles.teamContainer}>
          <Image source={teams.B.logo} style={styles.teamLogo} />
          <Text style={styles.teamName}>{teams.B.name}</Text>
          {/* Tombol untuk tim B */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleAddScore("B")}
            >
              <Text style={styles.buttonText}>+ {teams.B.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSubtractScore("B")}
            >
              <Text style={styles.buttonText}>- {teams.B.name}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleReset}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
  },
  date: {
    color: "#ffffff",
    fontSize: 16,
    marginBottom: 10,
  },
  matchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Menjaga logo, skor dan tombol terpisah
    width: "100%",
    marginBottom: 20,
  },
  teamContainer: {
    alignItems: "center",
  },
  teamLogo: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  teamName: {
    color: "#ffffff",
    fontSize: 14,
    textAlign: "center",
  },
  scoreContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20, // Menjaga jarak antara logo dan skor
  },
  score: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "column", // Menyusun tombol secara vertikal (atas-bawah)
    alignItems: "center", // Menyusun tombol di tengah horizontal
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#1f1f1f",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
  },
});

export default MatchScreen;
