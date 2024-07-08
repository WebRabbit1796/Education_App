import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import { COLORS, SIZES } from '../constants';

const colors = {
    advanced: "#ff566e",
    intermediate: "#fda120", 
    medium: "#fbd027",
    weak: "#26c2a3",
    completed: COLORS.completed
}

const CourseProgressBar = ({ numberOfCourseCompleted, totalNumberOfCourses }) => {
  const progress = numberOfCourseCompleted / totalNumberOfCourses;
  
  return (
    <View style={styles.container}>
     <ProgressBar 
        progress={progress} 
        width={SIZES.width - 220} 
        unfilledColor={"#EEEEEE"}
        borderColor={"#FFF"}
        borderWidth={1}
        animated={true}
        indeterminateAnimationDuration={2000}
        animationType="decay"
        color={
            progress == 1 ? colors.completed :
            progress >= 0.75 ? colors.advanced :
            progress >= 0.50 ? colors.intermediate :
            progress >= 0.35 ? colors.medium : colors.weak
          }
        />
      <Text style={styles.title}>{numberOfCourseCompleted} / {totalNumberOfCourses}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        width: SIZES.width - 220,
        marginVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 12,
        fontFamily: "Urbanist Medium",
        color: "gray",
        marginHorizontal: 12
    }
})

export default CourseProgressBar;
