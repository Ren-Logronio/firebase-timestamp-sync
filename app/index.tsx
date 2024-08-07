import { Text, View } from "react-native";
import { styles } from "./styles";
import { Suspense } from "react";
import SuspenseActivityIndicator from "@/components/SuspenseActivityIndicator";
import FirebaseFunctionDemo from "@/components/FirebaseFunctionDemo";
import FirebaseFirestoreDemo from "@/components/FirebaseFirestoreDemo";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.division}>
        <Text style={styles.heading}>Firebase Function</Text>
        <Suspense fallback={<SuspenseActivityIndicator />}>
          <FirebaseFunctionDemo />
        </Suspense>
      </View>
      <View style={styles.division}>
        <Text style={styles.heading}>Firebase Firestore</Text>
        <Suspense fallback={<SuspenseActivityIndicator />}>
          <FirebaseFirestoreDemo />
        </Suspense>
      </View>
    </View>
  );
}
