import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";

const courses = [
    { id_Curso: 1, nome_Curso: "Administração", maxSemestres_Curso: 8 },
    { id_Curso: 2, nome_Curso: "Direito", maxSemestres_Curso: 10 },
    { id_Curso: 3, nome_Curso: "Engenharia Civil", maxSemestres_Curso: 10 },
    { id_Curso: 4, nome_Curso: "Engenharia de Computação", maxSemestres_Curso: 10 },
    { id_Curso: 5, nome_Curso: "Sistemas de Informação", maxSemestres_Curso: 8 },
    { id_Curso: 6, nome_Curso: "Ciência da Computação", maxSemestres_Curso: 8 },
    { id_Curso: 7, nome_Curso: "Medicina", maxSemestres_Curso: 12 },
    { id_Curso: 8, nome_Curso: "Enfermagem", maxSemestres_Curso: 8 },
    { id_Curso: 9, nome_Curso: "Psicologia", maxSemestres_Curso: 10 },
    { id_Curso: 10, nome_Curso: "Arquitetura e Urbanismo", maxSemestres_Curso: 10 },
    { id_Curso: 11, nome_Curso: "Educação Física", maxSemestres_Curso: 8 },
    { id_Curso: 12, nome_Curso: "Pedagogia", maxSemestres_Curso: 8 },
    { id_Curso: 13, nome_Curso: "Contabilidade", maxSemestres_Curso: 8 },
    { id_Curso: 14, nome_Curso: "Publicidade e Propaganda", maxSemestres_Curso: 8 },
    { id_Curso: 15, nome_Curso: "Design Gráfico", maxSemestres_Curso: 8 },
].sort((a, b) => a.nome_Curso.localeCompare(b.nome_Curso));

export default function CourseSelector({ onSelect }: { onSelect: (id: number) => void }) {
    const [selected, setSelected] = useState<number | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (id: number) => {
        setSelected(id);
        setIsOpen(false);
        onSelect(id);
    };

    const selectedCourse = courses.find((c) => c.id_Curso === selected);

    return (
        <View style={styles.container}>
            {/* Botão que abre/fecha a lista */}
            <TouchableOpacity style={styles.dropdownButton} onPress={() => setIsOpen(!isOpen)}>
                <Text style={styles.dropdownText}>
                    {selectedCourse ? selectedCourse.nome_Curso : "Selecione seu curso"}
                </Text>
            </TouchableOpacity>

            {/* Lista de cursos (mostra apenas quando aberta) */}
            {isOpen && (
                <View style={styles.dropdownList}>
                    <FlatList
                        data={courses}
                        keyExtractor={(item) => String(item.id_Curso)}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={[
                                    styles.item,
                                    selected === item.id_Curso && styles.selectedItem,
                                ]}
                                onPress={() => handleSelect(item.id_Curso)}
                            >
                                <Text
                                    style={[
                                        styles.itemText,
                                        selected === item.id_Curso && styles.selectedText,
                                    ]}
                                >
                                    {item.nome_Curso}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    dropdownButton: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 12,
        backgroundColor: "#f9f9f9",
    },
    dropdownText: {
        fontSize: 16,
        color: "#333",
    },
    dropdownList: {
        marginTop: 5,
        maxHeight: 250,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        backgroundColor: "#fff",
    },
    item: {
        padding: 12,
    },
    selectedItem: {
        backgroundColor: "#e6f0ff",
    },
    itemText: {
        fontSize: 16,
    },
    selectedText: {
        color: "#007AFF",
        fontWeight: "bold",
    },
});
