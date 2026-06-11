import Employee from "./Components/Employee"
import Fetchdata from "./Components/Fetchdata"
import Productsearch from "./Components/Productsearch"
import Todolist from "./Components/Todolist"
import Toggle from "./Components/Toggle"

const App = () => {
  return (
    <>
    <div>
      <Employee/>
      <Productsearch/>
      <Toggle/>
      <Todolist/>
      <Fetchdata/>
    </div>
    </>
  )
}

export default App
