import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';

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
    { id_Curso: 15, nome_Curso: "Design", maxSemestres_Curso: 8 },
].sort((a, b) => a.nome_Curso.localeCompare(b.nome_Curso));



export default function CourseSelector({ onSelect }: ({ onSelect: (courseId: number) => void })) {
    const [value, setValue] = useState<number | null>(null);
    const [isFocus, setIsFocus] = useState(false);


    const data = courses.map((curso) => ({
        label: curso.nome_Curso,
        value: curso.id_Curso,
    }));

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: '#007AFF' }]}>
                    Cursos
                </Text>
            );
        }
        return null;
    };


    return (
        <View style={styles.container}>
            {renderLabel()}
            <Dropdown
                style={[styles.dropdownButton, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholder}
                selectedTextStyle={styles.selectedText}
                inputSearchStyle={styles.inputSearch}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Selecione um curso' : '...'}
                searchPlaceholder="Pesquisar..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                    onSelect(item.value);
                }}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
    },
    dropdownButton: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 12,
        backgroundColor: "#f9f9f9",
    },
    label: {
        position: "absolute",
        backgroundColor: "white",
        borderRadius: 4,
        top: -6,
        left: 5,
        borderWidth: 1,
        borderColor: "#ccc",
        zIndex: 999,
        paddingHorizontal: 4,
        fontSize: 12,
    },
    dropdownText: {
        fontSize: 16,
        color: "#333",
    },
    dropdownList: {
        marginTop: 5,
        maxHeight: 80,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        backgroundColor: "#007AFF",
    },
    placeholder: {
        fontSize: 16,
        color: "#007AFF",
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
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearch: {
        height: 40,
        fontSize: 16,
    },
    icon: {
        marginRight: 10,
    },

});
