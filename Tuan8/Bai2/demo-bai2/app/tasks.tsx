import { Feather, Ionicons } from "@expo/vector-icons";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function TasksScreen() {
  const router = useRouter();
  const [tasks, setTasks] = useState([]);
  const params = useLocalSearchParams();
  const name = params.name || "Guest";

  useEffect(() => {
    fetch("https://68ca0095ceef5a150f668d31.mockapi.io/task")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      });
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </Pressable>

        <View style={styles.profile}>
          <Image
            source={require("../assets/images/avatar.jpg")}
            style={styles.avatar}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.greeting}>Hi {name}</Text>
            <Text style={styles.subtitle}>Have agrate day a head</Text>
          </View>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="#777"
          style={styles.searchIcon}
        />
        <TextInput style={styles.searchInput} placeholder="Search" />
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <View style={styles.taskLeft}>
              <View style={styles.checkbox}>
                {item.completed && (
                  <Ionicons name="checkmark" size={16} color="#4CAF50" />
                )}
              </View>
              <Text style={styles.taskText}>{item.title}</Text>
            </View>
            <Pressable style={styles.editButton}>
              <Feather name="edit-2" size={18} color="#FF5252" />
            </Pressable>
          </View>
        )}
      />

      <Link href="/add-job" asChild>
        <Pressable style={styles.addButton}>
          <Ionicons name="add" size={32} color="white" />
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  backButton: {
    marginRight: 15,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ddd",
  },
  profileInfo: {
    marginLeft: 10,
  },
  greeting: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 12,
    color: "#777",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  taskLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 4,
    backgroundColor: "#e0ffe0",
    borderWidth: 1,
    borderColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  taskText: {
    fontSize: 16,
  },
  editButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#1ED5F4",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
