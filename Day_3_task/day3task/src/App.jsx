import Employee from "./Components/Employee"
import Fetchdata from "./Components/Fetchdata"
import Previoussearch from "./Components/Previoussearch"
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
      <Previoussearch/>
    </div>
    </>
  )
}

export default App
