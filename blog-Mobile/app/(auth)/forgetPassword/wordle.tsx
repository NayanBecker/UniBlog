import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import { api } from "@/src/services/api";
import wordsData from "./wordsData.json";

export default function Wordle() {
    const wordles = wordsData
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [emailOk, setEmailOk] = useState(false);

    async function handleEmailSubmit() {
        if (!email.includes("@") || !email.includes(".")) {
            Alert.alert("E-mail inválido", "Digite um e-mail válido!");
            return;
        }

        try {
            const res = await api.post("/account/recoverLogin", { email_Account: email });
            if (res.status === 200 && res.data.accountId) {
                await AsyncStorage.setItem("id_Account", res.data.accountId.id_Account.toString());
                console.log(res.data.accountId);

                setEmailOk(true);
            } else {
                Alert.alert("Não Cadastrado", "Nenhuma conta com esse e-mail.");
                setEmailOk(false);
            }
        } catch (error) {
            Alert.alert("Erro", "Falha ao recuperar o ID da conta.");
            setEmailOk(false);
        }
    }


    const [randomWordle] = useState(() => {
        const randomIndex = Math.floor(Math.random() * wordles.length);
        return wordles[randomIndex];
    });

    const [guess, setGuess] = useState("");
    const [attempts, setAttempts] = useState<string[]>([]);
    const [feedback, setFeedback] = useState<string[][]>([]);
    const maxAttempts = 6;


    async function checkGuess() {
        if (guess.length !== randomWordle.length) {
            Alert.alert("A palavra deve ter 9 letras!");
            return;
        }

        const randomWordleLower = randomWordle.toLowerCase();
        const guessLower = guess.toLowerCase();

        const fb: string[] = [];
        for (let i = 0; i < guessLower.length; i++) {
            if (guessLower[i] === randomWordleLower[i]) {
                fb.push("correct");
            } else if (randomWordleLower.includes(guessLower[i])) {
                fb.push("present");
            } else {
                fb.push("absent");
            }
        }

        setAttempts([...attempts, guessLower]);
        setFeedback([...feedback, fb]);
        setGuess("");

        if (guessLower === randomWordleLower) {
            try {
                Alert.alert("Sucesso!", "Pode mudar tua senha");

                router.replace("/(auth)/forgetPassword/resetPassword");
            } catch (err: any) {
                console.error(err);
                Alert.alert("Erro", "Falha ao autenticar.");
            }
            return;
        }

        if (attempts.length + 1 >= maxAttempts) {
            Alert.alert("❌ Game Over", `A palavra era "${randomWordleLower}"`);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recupere sua Senha</Text>
            {!emailOk && (
                <>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Digite seu e-mail..."
                        style={styles.input}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <Text style={styles.button} onPress={handleEmailSubmit}>
                        Continuar
                    </Text>
                </>
            )}
            {emailOk && (
                <>
                    {Array.from({ length: maxAttempts }).map((_, attemptIndex) => (
                        <View key={attemptIndex} style={styles.row}>
                            {Array.from({ length: randomWordle.length }).map((_, letterIndex) => {
                                const letter =
                                    attempts[attemptIndex]?.[letterIndex]?.toUpperCase() || "";

                                const status = feedback[attemptIndex]?.[letterIndex];

                                let backgroundColor = "#444";
                                if (status === "correct") backgroundColor = "#4caf50";
                                if (status === "present") backgroundColor = "#ffb300";
                                if (status === "absent") backgroundColor = "#555";

                                return (
                                    <View
                                        key={letterIndex}
                                        style={[styles.cell, { backgroundColor }]}
                                    >
                                        <Text style={styles.letter}>{letter}</Text>
                                    </View>
                                );
                            })}
                        </View>
                    ))}

                    <TextInput
                        style={styles.input}
                        maxLength={randomWordle.length}
                        value={guess}
                        onChangeText={setGuess}
                        placeholder="Digite sua palavra..."
                        autoCapitalize="none"
                    />

                    <Text style={styles.button} onPress={checkGuess}>
                        Enviar
                    </Text>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
        padding: 20,
    },
    title: {
        color: "white",
        fontSize: 28,
        marginBottom: 20,
    },
    row: {
        flexDirection: "row",
    },
    cell: {
        width: 35,
        height: 50,
        borderWidth: 2,
        borderColor: "#333",
        justifyContent: "center",
        alignItems: "center",
        margin: 3,
    },
    letter: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
    },
    input: {
        marginTop: 20,
        width: "80%",
        padding: 12,
        backgroundColor: "#333",
        color: "white",
        borderRadius: 6,
        fontSize: 18,
        textAlign: "center",
    },
    button: {
        marginTop: 15,
        backgroundColor: "#4caf50",
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 8,
        color: "white",
        fontSize: 18,
    },
});