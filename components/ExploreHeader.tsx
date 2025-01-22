import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRef, useState } from 'react';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import * as Haptics from 'expo-haptics';

const categories = [
    {
        name: 'Tiny homes',
        icon: 'home',
    },
    {
        name: 'Cabins',
        icon: 'house-siding',
    },
    {
        name: 'Trending',
        icon: 'local-fire-department',
    },
    {
        name: 'Play',
        icon: 'videogame-asset',
    },
    {
        name: 'City',
        icon: 'apartment',
    },
    {
        name: 'Beachfront',
        icon: 'beach-access',
    },
    {
        name: 'Countryside',
        icon: 'nature-people',
    },
];


interface Props {
    onCategoryChanged: (category: string) => void;
}

const ExploreHeader = ({ onCategoryChanged }: Props) => {
    const scrollRef = useRef<ScrollView>(null);
    const itemsRef = useRef<Array<React.ElementRef<typeof TouchableOpacity> | null>>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const selectCategory = (index: number) => {
        const seleted = itemsRef.current[index];
        setActiveIndex(index);
        seleted?.measure((x: any) => {
            scrollRef.current?.scrollTo({ x: x - 16, y: 0, animated: true });
        });
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        onCategoryChanged(categories[index].name);
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.container}>
                <View style={styles.actionRow}>
                    <Link href={'/(taps)'} asChild>
                        <TouchableOpacity>
                            <View style={styles.searchBtn}>
                                <TouchableOpacity style={styles.filterBtn}>
                                    <Ionicons name="options-outline" size={24} />
                                </TouchableOpacity>
                                <View>
                                    <Text style={[{ fontFamily: 'mon-sb' }]}>Where are you ?</Text>
                                </View>
                                <Ionicons name="search" size={24} style={styles.searchIcon} />
                            </View>
                        </TouchableOpacity>
                    </Link>
                </View>

                <ScrollView
                    horizontal
                    ref={scrollRef}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        alignItems: 'center',
                        gap: 20,
                        paddingHorizontal: 15,
                    }}>
                    {categories.map((item, index) => (
                        <TouchableOpacity
                            ref={(el) => (itemsRef.current[index] = el)}
                            key={index}
                            style={activeIndex === index ? styles.categoriesBtnActive : styles.categoriesBtn}
                            onPress={() => selectCategory(index)}>
                            <MaterialIcons
                                name={item.icon as any}
                                size={24}
                                color={activeIndex === index ? '#000' : Colors.grey}
                            />
                            <Text style={activeIndex === index ? styles.categoryTextActive : styles.categoryText}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 130,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: {
            width: 1,
            height: 10,
        },
    },
    actionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingBottom: 16,
    },

    searchBtn: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        width: 360,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#c2c2c2',
        borderRadius: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.12,
        shadowRadius: 8,
        shadowOffset: {
            width: 1,
            height: 1,
        },
    },
    searchIcon: {
        left: 150
    },
    filterBtn: {
        padding: 10,
        borderRadius: 20
    },
    categoryText: {
        fontSize: 14,
        fontFamily: 'mon-sb',
        color: Colors.grey,
    },
    categoryTextActive: {
        fontSize: 14,
        fontFamily: 'mon-sb',
        color: '#000',
    },
    categoriesBtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 8,
    },
    categoriesBtnActive: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        paddingBottom: 8,
    },
});

export default ExploreHeader;