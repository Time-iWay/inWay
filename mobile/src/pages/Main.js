import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { MaterialIcons } from "@expo/vector-icons";

// Get server information using API
import api from "../services/api";
import { connect, disconnect, subcribeToNewDevs } from "../services/socket";

function Main({ navigation }) {
  // Save states for Dev, location and tech(input text)
  const [consults, setConsult] = useState([]);
  const [currentRegion, setCurrentRegion] = useState(null);
  const [perfil, setPerfil] = useState("");

  // Ask permissions for geolocation and generate it on the map
  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();
      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        });
      }
    }
    loadInitialPosition();
  }, []);

  // "Reload" all consults based on websocket response
  useEffect(() => {
    subcribeToNewDevs((consult) => setConsult([...consults, consult]));
  }, [consults]);

  // Setup websocket connetion for new consults in realtime
  function setupWebsocket() {
    disconnect();
    const { latitude, longitude } = currentRegion;

    connect(latitude, longitude, perfil);
  }

  // Load consults in the map based on perfil search
  async function loadConsults() {
    const { latitude, longitude } = currentRegion;

    const response = await api.get("/search", {
      params: {
        latitude,
        longitude,
        perfil,
      },
    });
    setConsult(response.data);
    setupWebsocket();
  }

  // Reloads devs location when maps scrolled
  function handleRegionChanged(region) {
    setCurrentRegion(region);
  }

  // If geolocation is not permitted, null
  if (!currentRegion) {
    return null;
  }

  return (
    <>
      {/* Draw map */}
      <MapView
        onRegionChangeComplete={handleRegionChanged}
        initialRegion={currentRegion}
        style={styles.map}
      >
        {consults.map((consult) => (
          // Puts maker in map
          <Marker
            // key={consult._id}
            coordinate={{
              latitude: -26.3544977,
              longitude: -52.8527323,
              // latitude: consult.location.coordinates[1],
              // longitude: consult.location.coordinates[0],
            }}
          >
            <Image style={styles.avatar} source={{ uri: consult.avatar_url }} />
            <Callout
              onPress={() => {
                // Navigate to Profile sending username as param
                navigation.navigate("Profile", {
                  github_username: consult.github_username,
                });
              }}
            >
              <View style={styles.callout}>
                <Text style={styles.consultName}>{consult.name}</Text>
                <Text style={styles.consultBio}>{consult.bio}</Text>
                <Text style={styles.consultPerfil}>
                  {consult.perfil.join(", ")}
                </Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      {/* Input Text */}
      <View style={styles.searchForm}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar Consultores por perfil..."
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={perfil}
          onChangeText={(text) => setPerfil(text)}
        />
        {/* Search button*/}
        <TouchableOpacity onPress={loadConsults} style={styles.loadButton}>
          <MaterialIcons name="my-location" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </>
  );
}

// Stylization for components
const styles = StyleSheet.create({
  map: {
    flex: 1,
  },

  avatar: {
    width: 54,
    height: 54,
    borderRadius: 54 / 2,
    borderWidth: 4,
    borderColor: "#fff",
  },

  callout: {
    width: 260,
  },

  devName: {
    fontWeight: "bold",
    fontSize: 16,
  },

  devBio: {
    color: "#666",
    marginTop: 5,
  },

  devPerfil: {
    marginTop: 5,
  },

  searchForm: {
    position: "absolute",
    top: 20,
    left: 20,
    right: 20,
    zIndex: 5,
    flexDirection: "row",
  },

  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: "#fff",
    color: "#333",
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 4,
  },

  loadButton: {
    width: 50,
    height: 50,
    backgroundColor: "#0B1964",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
  },
});

export default Main;
