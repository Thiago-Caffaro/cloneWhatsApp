import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, View, StyleSheet, SafeAreaView } from "react-native";

import { Amplify } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";
import outputs from "./amplify_outputs.json"

// Configuração do amplify com as informações da aplicação
Amplify.configure(outputs);

const SignOutButton = () => {
  const { signOut } = useAuthenticator();
// Botão para testar a função de sign out
  return (
    <View style={styles.signOutButton}>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};
export default function App() {

  return (
    <View style={styles.container}>
      <Authenticator.Provider>
      <Authenticator>
        <SafeAreaView>
          <SignOutButton />
        </SafeAreaView>
      </Authenticator>
    </Authenticator.Provider>
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signOutButton: {
    alignSelf: "flex-end",
  },
});
