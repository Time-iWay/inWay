import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "./pages/Main";
import Profile from "./pages/Profile";

const Routes = createAppContainer(
  // Seta as rotas de cada página
  createStackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          title: "Bem Vindo",
        },
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          title: "Perfil na Gorila",
        },
      },
    },
    {
      defaultNavigationOptions: {
        headerTintColor: "#fff",
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: "#0B1964",
        },
      },
    }
  )
);

export default Routes;
