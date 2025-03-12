import { Text, View } from "react-native";
import ViewComponent from '../components/ViewComponent'
import TextComponent from '../components/TextComponent'
import TextInputComponent from '../components/TextInputComponent'
import ButtonComponent from '../components/ButtonComponent'
import TouchableOpacityComponent from '../components/TouchabilityOpacityComponent'
import TouchableHighlightcomponent from '../components/TouchableHighlightComponent'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ViewComponent>
        <TextComponent />
        <TextInputComponent />
      </ViewComponent>
      <ButtonComponent />
      <TouchableOpacityComponent/>
      <TouchableHighlightcomponent />
    </View>
  );
}
