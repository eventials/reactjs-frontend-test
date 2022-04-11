import {
  ChakraProvider,
  ThemeConfig,
  extendTheme,
} from "@chakra-ui/react"
import { WebinarProvider } from "./context/WebinarStore"
import AppRoutes from "./routes/routes"

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

export const App = () => (
  <ChakraProvider theme={theme}>
    <WebinarProvider>
      <AppRoutes/>
    </WebinarProvider>
  </ChakraProvider>
)
