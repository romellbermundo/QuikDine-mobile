import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Children, cloneElement, isValidElement } from "react";
import { FontFamily } from "../../GlobalStyles";

export const PlanMealText = () => {
  return (
    <View style={styles.dashboardView}>
      <TextStroke stroke={2} color={"#379540"}>
        <Text style={styles.textStrokeText}> Create New Event </Text>
      </TextStroke>
    </View>
  );
};

export const SubInfo = () => {
  return (
    <View>
      <PlanMealText />
    </View>
  );
};
// export const PlanMealText2 = () => {
//   return (   <View style={styles.dashboardView}>
{
  /* <TextStroke stroke={2} color={"#379540"}> */
}
// <Text style={styles.textStrokeText}> In-Progress Events </Text>
{
  /* </TextStroke> */
}
// </View>

//   );
// };

// export const SubInfo2 = () => {
//   return (
//     <View style={styles.dashboardView}>
//       {/* <TextStroke stroke={2} color={"#379540"}> */}
//       <Text style={styles.textStrokeText}>
//         <PlanMealText2 />{" "}
//       </Text>
//       {/* </TextStroke> */}
//     </View>
//   );
// };

export const SubInfo2 = (props) => {
  const { title } = props;
  return (
    <View style={styles.dashboardView}>
      <TextStroke stroke={2} color={"#379540"}>
        <Text style={styles.textStrokeText}> Event {title} </Text>
      </TextStroke>
    </View>
  );
};

export const PlanMealText3 = () => {
  return (
    <View style={styles.dashboardView}>
      <TextStroke stroke={2} color={"#379540"}>
        <Text style={styles.textStrokeText}> Past Events </Text>
      </TextStroke>
    </View>
  );
};

export const SubInfo3 = () => {
  return (
    <View>
      <PlanMealText3 />
    </View>
  );
};

const styles = StyleSheet.create({
  outline: {
    position: "absolute",
  },
  dashboardView: {
    flexDirection: "row",

    color: "#F44336",
  },
  textStrokeText: {
    fontSize: 25,
    color: "#FFFFFF",
    fontFamily: FontFamily.poppins,
  },
});

export class TextStroke extends React.Component {
  createClones = (w, h, color) => {
    const { children } = this.props;
    return Children.map(children, (child) => {
      if (isValidElement(child)) {
        const currentProps = child.props;
        const currentStyle = currentProps ? currentProps.style || {} : {};

        const newProps = {
          ...currentProps,
          style: {
            ...currentStyle,
            textShadowOffset: {
              width: w,
              height: h,
            },
            textShadowColor: color,
            textShadowRadius: 1,
          },
        };
        return cloneElement(child, newProps);
      }
      return child;
    });
  };

  render() {
    const { color, stroke, children } = this.props;
    const strokeW = stroke;
    const top = this.createClones(0, -strokeW * 1.2, color);
    const topLeft = this.createClones(-strokeW, -strokeW, color);
    const topRight = this.createClones(strokeW, -strokeW, color);
    const right = this.createClones(strokeW, 0, color);
    const bottom = this.createClones(0, strokeW, color);
    const bottomLeft = this.createClones(-strokeW, strokeW, color);
    const bottomRight = this.createClones(strokeW, strokeW, color);
    const left = this.createClones(-strokeW * 1.2, 0, color);

    return (
      <View>
        <View style={styles.outline}>{left}</View>
        <View style={styles.outline}>{right}</View>
        <View style={styles.outline}>{bottom}</View>
        <View style={styles.outline}>{top}</View>
        <View style={styles.outline}>{topLeft}</View>
        <View style={styles.outline}>{topRight}</View>
        <View style={styles.outline}>{bottomLeft}</View>
        {bottomRight}
      </View>
    );
  }
}
